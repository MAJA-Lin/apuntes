---
title: Static V.S. Self in PHP
lang: zh-TW
date: 2019-04-29
categories: [2019]
tags: [PHP, OOP]
---


# Static V.S. Self in PHP

##### Date: 2019/April/29

<br>

---


## 60 seconds

### Difference

#### Static

[PHP Manual的定義][ref#php manual static]

> Declaring class properties or methods as static makes them accessible without needing an instantiation of the class. A property declared as static cannot be accessed with an instantiated class object (though a static method can).
>
> - Static properties cannot be accessed through the object using the arrow operator ->.


- 物件不需要實體化便能使用;
- 用來定義靜態變數 (也能拿來做Singleton單例模式)
- 用來做延遲靜態綁定(Late Static Bindings)
- 當存取物件方法/屬性/變數時, static::能存取**呼叫時的物件**所屬的方法/屬性/變數
- 指向調用者本身

#### Self

- 相對於static, self存取物件屬性時則是使用當下物件的屬性
- 指向當前定義之處

以下面這個簡單的例子來說, test()裡面第一個 *self::sayMyName()* 會呼叫**Ancestor::sayMyName()**;
接著 static::sayMyName() 才會去執行自己的**Offspring::sayMyName()**.

```php
class Ancestor
{
    public static function sayMyName()
    {
        return "I am Ancestor";
    }

    public static function test()
    {
        echo self::sayMyName();
        echo "\n";
        echo static::sayMyName();
    }
}

class Offspring extends Ancestor
{
    public static function sayMyName()
    {
        return "I am Offspring";
    }
}

Offspring::test();
// I am Ancestor
// I am Offspring
```

另外一個例子:

這個例子可以看到self::class是從定義的地方(**Ancestor**)取得的;
static::class則是通過延遲靜態綁定, 也就是實際呼叫的Offspring的類別名稱.

```php
class Ancestor
{
    public static function sayMyName()
    {
        return self::class;
    }

    public static function sayMyNameStatically()
    {
        return static::class;
    }
}

class Offspring extends Ancestor
{
    //
}

var_dump(Offspring::sayMyName()); // string(8) "Ancestor"
var_dump(Offspring::sayMyNameStatically());string(8) // string(9) "Offspring"
```

PHP官方文件的解說:

::: tip
Static references to the current class like self:: or \__CLASS__ are resolved using the class in **which the function belongs**, as in **where it was defined**
:::



```php {6}
class A {
    public static function who() {
        echo __CLASS__;
    }
    public static function test() {
        self::who();
    }
}

class B extends A {
    public static function who() {
        echo __CLASS__;
    }
}

B::test(); // Output is A
```

在官方文件裡可以看到類似的程式碼, 使用static做靜態綁定;

::: tip
Late static bindings tries to solve that limitation by introducing a keyword that references the class that was initially called at runtime. Basically, a keyword that would allow you to reference B from test() in the previous example. It was decided not to introduce a new keyword but rather use static that was already reserved.
:::

```php {6}
class A {
    public static function who() {
        echo __CLASS__;
    }
    public static function test() {
        static::who(); // Here comes Late Static Bindings
    }
}

class B extends A {
    public static function who() {
        echo __CLASS__;
    }
}

B::test(); // Output is B
?>
```




<br>

## 60 minutes


```php
class Parents
{
    public static function testWithSelf()
    {
        return self::hello();
    }

    public static function testWithStatic()
    {
        return static::hello();
    }

    public static function hello()
    {
        return "It is parent";
    }
}

class Child extends Parents
{
    public static function hello()
    {
        return "It is child";
    }
}

# Parent
var_dump(Parents::testWithSelf()); // string(11) "It is parent"
var_dump(Parents::testWithStatic()); // string(11) "It is parent"
# Child
var_dump(Child::testWithSelf()); // string(11) "It is parent"
var_dump(Child::testWithStatic()); // string(10) "It is child"
```

這個例子中, **Parents**與**Child**各自實踐了一個方法*hello()*, 回傳不同的值;
再利用static call與self call做呼叫.

當**Child**這個繼承了**Parents**的子類別要呼叫test()時,
可以看到**static**呼叫的是**子類別自身的hello()**, **self**則是呼叫了父類別的*hello()*.


<br>

另一個官方的範例, 與屬性的存取有關係.

::: tip
In non-static contexts, the called class will be the class of the object instance. Since *$this->* will try to call private methods from the **same scope**, using static:: may give different results. Another difference is that static:: can only refer to static properties.
:::

```php {7}
class A {
    private function foo() {
        echo "success!\n";
    }
    public function test() {
        $this->foo();
        static::foo();
    }
}

class B extends A {
   /* foo() will be copied to B, hence its scope will still be A and
    * the call be successful */
}

class C extends A {
    private function foo() {
        /* original method is replaced; the scope of the new one is C */
    }
}

$b = new B();
$b->test();
$c = new C();
$c->test();

// success!
// success!
// success!
//
// Fatal error: Uncaught Error: Call to private method C::foo() from context 'A'
```

test()沒辦法存取Class C裡的foo(), 因此回報錯誤.

<br>


>Late Static Bindings
>>A "forwarding call" is a static one that is introduced by *self::*, *parent::*, *static::*, or, if going up in the class hierarchy, *forward_static_call()*.
>
> This feature was named **"late static bindings"** with an internal perspective in mind. "Late binding" comes from the fact that static:: will not be resolved using the class where the method is defined but it will rather be computed **using runtime information**. It was also called a "static binding" as it can be used for (but is not limited to) static method calls.

這個範例則是指出forwarding call與non-forwarding call的差別:

::: tip
Late static bindings' resolution will stop at a fully resolved static call with no fallback. On the other hand, static calls using keywords like *parent::* or *self::* will **forward the calling information**.
:::

```php {13,14,15}
class A {
    public static function foo() {
        static::who();
    }

    public static function who() {
        echo __CLASS__."\n";
    }
}

class B extends A {
    public static function test() {
        A::foo();
        parent::foo();
        self::foo();
    }

    public static function who() {
        echo __CLASS__."\n";
    }
}
class C extends B {
    public static function who() {
        echo "Hola\n"; // Add output to make it more clear
        echo __CLASS__."\n";
    }
}

C::test();

// Output:
// A
// Hola
// C
// Hola
// C
```

**A::foo()** 明確的指出了要呼叫者與呼叫的方法, 所以輸出是A (non-forwarding call);
可是當執行到14與15行時, 使用了forwarding call的關鍵字;
所以真正的呼叫者是Class C, 並執行 **C::test()**,

<br>


### Static variables

::: tip
Another important feature of variable scoping is the static variable. A static variable exists only in a local function scope, but it **does not lose** its value when program execution leaves this scope.
:::

由下面這個範例可以看到靜態變數的特性:

```php
class Calculator
{
    public static $count = 0;
    public $sum = 0;

    public function __construct()
    {
        self::$count++;
        $this->sum++;
    }

    public function countToTen()
    {
        self::$count = 10;
        $this->sum = 10;
    }
}

$a = new Calculator;
$b = new Calculator;
$c = new Calculator;

echo Calculator::$count . "\n"; // 3
echo $a::$count . "\n"; // 3
echo $b::$count . "\n"; // 3
echo $c::$count . "\n"; // 3
echo $a->sum . "\n"; // 1

$a->countToTen();
echo $a::$count . "\n"; // 10
echo $a->sum . "\n"; // 10

echo $b::$count . "\n"; // 10
echo $b->sum . "\n"; // 1
```


### Singleton

這邊直接參考他人寫好的範例([中文][ref#單例模式] / [English][ref#singleton])

```php
final class Singleton
{
    /**
     * @var Singleton
     */
    private static $instance;

    /**
     * gets the instance via lazy initialization (created on first usage)
     */
    public static function getInstance(): Singleton
    {
        if (null === static::$instance) {
            static::$instance = new static();
        }
        return static::$instance;
    }

    /**
     * is not allowed to call from outside to prevent from
     * creating multiple instances, to use the singleton,
     * you have to obtain the instance from Singleton::getInstance() instead
     */
    private function __construct()
    {
    }

    /**
     * prevent the instance from being cloned
     * (which would create a second instance of it)
     */
    private function __clone()
    {
    }

    /**
     * prevent from being unserialized
     * (which would create a second instance of it)
     */
    private function __wakeup()
    {
    }
}
```

可以看到單例模式把所有有可能複製這個類別的方法都封鎖起來, 確保同一時間只能得到一個instance.

::: danger
單例模式被公認為反面模式(Anti-pattern), 需特別注意
:::

另外還有幾篇有關Laravel中資料庫連線與單例模式的問題, 可以看看下面的其他參考資料.

---


## References

[img#01]: /images/folder/file "Image description"

[ref#php manual static]: https://www.php.net/manual/en/language.oop5.static.php "Static Keyword"

[ref#php manual Late Static Bindings]: https://www.php.net/manual/en/language.oop5.late-static-bindings.php "Late Static Bindings"

[ref#php manual variable scope - static]: https://www.php.net/manual/en/language.variables.scope.php#language.variables.scope.static "Using static variables"

[ref#單例模式]: https://learnku.com/docs/php-design-patterns/2018/Singleton/1494 "learnku - 單例模式"

[ref#singleton]: https://github.com/domnikl/DesignPatternsPHP/tree/master/Creational/Singleton "github - DesignPatternsPHP/Singleton"


<br>

#### 其他參考資料

PHP Manual (2019). [Variable scope](https://www.php.net/manual/en/language.variables.scope.php).

PHP Manual (2019). [Late Static Bindings](https://www.php.net/manual/en/language.oop5.late-static-bindings.php).

programmerinterview (2019). [In PHP, what is the difference between self and static?](https://www.programmerinterview.com/index.php/php-questions/php-self-vs-static/).

learnku (2018). [PHP 设计模式全集 2018 - 单例模式（Singleton）](https://learnku.com/docs/php-design-patterns/2018/Singleton/1494).

Liebler, D (2016). [domnikl/DesignPatternsPHP - Creational/Singleton](https://github.com/domnikl/DesignPatternsPHP/tree/master/Creational/Singleton). Github.

lukasgeiter (2014, Dec). [Is the database class in Laravel use the “Singleton Pattern”?](https://stackoverflow.com/a/27619956). StackOverflow.

Raphaelson, J (2008, Oct). [Global or Singleton for database connection?](https://stackoverflow.com/a/219599). StackOverflow.

leoyang (2018). [Laravel Database——数据库服务的启动与连接](https://learnku.com/articles/6087/laravel-database-the-startup-and-connection-of-database-services#reply88402). learnku

leoyang (2018). [Laravel Database——数据库服务的启动与连接 (on GitBook)](https://leoyang90.gitbooks.io/laravel-source-analysis/content/Laravel%20Database%E2%80%94%E2%80%94%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9C%8D%E5%8A%A1%E7%9A%84%E5%90%AF%E5%8A%A8%E4%B8%8E%E8%BF%9E%E6%8E%A5.html). GitBook