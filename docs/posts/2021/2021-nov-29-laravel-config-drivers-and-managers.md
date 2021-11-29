---
title: Laravel Config, Drivers and Managers
lang: zh-TW
date: 2021-11-29
categories: [2021]
tags: [Laravel, IoC Container, Service Container]
---


# Laravel Config, Drivers and Managers

##### Date: 2021/November/29

<br>

---

Laravel有相當多功能是透過在 env/config內設定，用以切換底層的程式。以 [mail.php][ref#01] 來說好了，

```php
return [
    'default' => env('MAIL_MAILER', 'smtp'),

    /*
     |------------------------
     | Driver Samples
     |------------------------
     */
    'mailers' => [
        'smtp' => [
            'host' => env('MAIL_HOST', 'smtp.mailgun.org'),
            'port' => env('MAIL_PORT', 587),
        ],

        'ses' => [
            'transport' => 'ses',
        ],

        'mailgun' => [
            'transport' => 'mailgun',
        ],

        ......
    ]
]
```

當需要切換發送 email 的驅動時（比如說從 **smtp** 切換到 AWS 的 **ses**），只要到 *env* 檔案裡變更 `MAIL_MAILER` 的值為 **ses** 就好。

若是要讓自己寫的程式碼可以支援切換功能的話，可以參考以下作法：

## 60 seconds

首先先設定好本次範例需要的設定檔 `app/cart.php` ：

```php
<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Video Uploader Driver
    |--------------------------------------------------------------------------
    |
    */
    'default' => env('DEFAULT_CART', 'cookie'),

    'cart' => [
        'cookie' => [
            // some configurations
        ],

        'session' => [
            // some configurations
        ],

        'database' => [
            // some configurations
        ],
    ],
];
```


根據 [pineco.de/drivers-and-managers-in-laravel][ref#02] 的介紹，可以透過繼承 [`Illuminate\Support\Manager`][ref#03] 的方式實踐。

```php
<?php

namespace App\Services;

use Illuminate\Support\Manager;

class CartManager extends Manager
{
    /**
     * Get the default driver name.
     *
     * @return string
     */
    public function getDefaultDriver()
    {
        return $this->config->get('cart.default');
    }
}
```

記得要到 `config/app.php` 與 Service Provider內進行綁定：


### config/app.php

```php
    'providers' => [
        /*
        * Application Service Providers...
        */
        App\Providers\CartServiceProvider::class,
    ],
```

### Add new Service Provider

```php
<?php

namespace App\Providers;

use App\Services\CartManager;
use Illuminate\Support\ServiceProvider;

class CartServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('cart', function ($app) {
            return new CartManager($app);
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
```

當程式碼需要支援多個驅動時，除了在 Manager 內指定以外，也能透過 `Illuminate\Support\Manager` 提供的 `extend` 方法進行擴充。

```php
$cart = app('cart');

$cart->extend('session', function ($app) {
    return new SessionDriver($app);
});

$cart->extend('cookie', function ($app) {
    return new CookieDriver($app);
});

$cart->extend('null', function ($app) {
    return new NullDriver($app);
});
```


完成綁定後，就可以透過下列方式進行呼叫了

```php
$cart = app('cart')->driver()->cart();

$cookieCart = app('cart')->driver('cookie)->cart();
```

<br>

## 60 minutes

這邊先以 [*Illuminate/Broadcasting*][ref#04] 作為範例，可以看到 Laravel 是怎麼實踐 `driver()` 方法的

```php
    /**
     * Get a driver instance.
     *
     * @param  string|null  $name
     * @return mixed
     */
    public function driver($name = null)
    {
        $name = $name ?: $this->getDefaultDriver();

        return $this->drivers[$name] = $this->get($name);
    }
```

Laravel中有些功能有提供其他名稱的方式 (如 [mailer][ref#05] )，但基本上還是會呼叫 `driver()` 以取出正確的 *driver* 執行功能。

Laravel 提供的 `Illuminate\Support\Manager` 更為簡潔易用。
可以看到它能把 `app('my_manager')->driver('my_driver')` 裡指定的 **my_driver** 用 `Str::studly($driver)` 自動轉換為 `createMyDriverDriver()` ，接下來要做的事情就是實踐這個方法，或是如上面寫的透過 `extend()` 方法註冊 **MyDriver** 即可。

```php
    /**
     * Get a driver instance.
     *
     * @param  string|null  $driver
     * @return mixed
     *
     * @throws \InvalidArgumentException
     */
    public function driver($driver = null)
    {
        $driver = $driver ?: $this->getDefaultDriver();

        if (is_null($driver)) {
            throw new InvalidArgumentException(sprintf(
                'Unable to resolve NULL driver for [%s].', static::class
            ));
        }

        // If the given driver has not been created before, we will create the instances
        // here and cache it so we can return it next time very quickly. If there is
        // already a driver created by this name, we'll just return that instance.
        if (! isset($this->drivers[$driver])) {
            $this->drivers[$driver] = $this->createDriver($driver);
        }

        return $this->drivers[$driver];
    }

    /**
     * Create a new driver instance.
     *
     * @param  string  $driver
     * @return mixed
     *
     * @throws \InvalidArgumentException
     */
    protected function createDriver($driver)
    {
        // First, we will determine if a custom driver creator exists for the given driver and
        // if it does not we will check for a creator method for the driver. Custom creator
        // callbacks allow developers to build their own "drivers" easily using Closures.
        if (isset($this->customCreators[$driver])) {
            return $this->callCustomCreator($driver);
        } else {
            $method = 'create'.Str::studly($driver).'Driver';

            if (method_exists($this, $method)) {
                return $this->$method();
            }
        }

        throw new InvalidArgumentException("Driver [$driver] not supported.");
    }
```

之後一些細節，例如資料庫的連線資訊、連線至外部API的金鑰等等設定，在 `createMyDriverDriver()` 內實作就好，對呼叫者來說隱藏了不必要的資訊，把建立實例的工作都打包起來了，挺好的。

<br>

---


## References

[img#01]: /images/folder/file "Image description"

[ref#01]: https://github.com/laravel/laravel/blob/8.x/config/mail.php "GitHub laravel/framework - mail.php"

[ref#02]: https://pineco.de/drivers-and-managers-in-laravel/ "Drivers and Managers in Laravel"

[ref#03]: https://github.com/laravel/framework/blob/8.x/src/Illuminate/Support/Manager.php "GitHub laravel/framework - Illuminate/Support/Manager.php"

[ref#04]: https://github.com/laravel/framework/blob/8940ff3c9c643f8abcca026a6341fdfcfc83e983/src/Illuminate/Broadcasting/BroadcastManager.php#L148-L159 "GitHub laravel/framework - Illuminate/Broadcasting/BroadcastManager.php"

[ref#05]: https://github.com/laravel/framework/blob/8.x/src/Illuminate/Mail/MailManager.php#L63-L85 "GitHub laravel/framework - Illuminate/Mail/MailManager.php"


<br>

#### 其他參考資料

Gergő D. Nagy (2020/JAN/28). [Drivers and Managers in Laravel](https://pineco.de/drivers-and-managers-in-laravel/). pineco.de.

Laravel (2021/NOV/29). [laravel/framework](https://github.com/laravel/framework). GitHub.

Lavavel (2021/NOV/29). [Service Container](https://laravel.com/docs/8.x/container). laravel.com.

Lavavel (2021/NOV/29). [Service Providers](https://laravel.com/docs/8.x/providers). laravel.com.
