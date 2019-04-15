---
title: Float precision
lang: zh-TW
date: 2019-04-15
categories: [2019]
tags: [PHP, float]
---


# Float Precision

##### Date: 2019/April/15

<br>

---


## 60 seconds

### 問題: 0.1 + 0.2 != 0.3 ?

由於計算機底層使用0與1來代表數字的緣故, 你看見的0.1跟0.2並不是真正的0.1+0.2.
讓電腦實際上去跑一次就知道了:

```php
$a = 0.1 + 0.2;
$b = 0.3;

var_dump(number_format($a, 20, '.', ' '));
var_dump(number_format($b, 20, '.', ' '));
var_dump($a == $b);
```

實際輸出:

```
string(22) "0.30000000000000004441"
string(22) "0.29999999999999998890"
bool(false)
```

### 解決方案

THE FLOATING-POINT GUIDE在[php cheat sheet][ref#02]提到了可以使用 **bcadd()來做運算**,
也可以使用 **number_format()** 來印出資料.


<br>

---

## 60 minutes

### 為什麼?

[THE FLOATING-POINT GUIDE - Binary Fractions][ref#01]有一個非常精美的表格,
解釋了表面上看到的數字, 實際上在電腦裡是怎麼儲存的:

![Binary Fractions - How they work][img#01]

能用二進制表示的不是問題, 可是小數通常都不會是只靠二進制就能解決的.

![Binary Fractions - Problems][img#02]

如圖所示, 可以看到從十進位轉換成二進位時的誤差有多嚴重.


作者提到有三種方式可以解決這種問題:

1. Limited-Precision Decimal

>以PHP來說, 有善心人士寫成的[ext-decimal][ref#03], 可以嘗試使用看看.

2. Arbitrary-Precision Decimal

>在PHP裡面就有BCMath與GMP兩種選擇了. 詳細的比較可以參考這則[StackOverflow][ref#04].

3. Symbolic calculations

>使用符號來表示數據, 而不是算出數字. 一樣有善心人士提供了[套件][ref#05]使用,
>而且還是composer, 最低需求只需要**PHP 7**!

<br>

---


## References

[img#01]: /images/2019/april/9e9c1a4f8b52babdff7655d5e7e7488b7c44303109044e37586faf1e5dfd15c1.png "Binary Fractions - How they work"

[img#02]: /images/2019/april/e66e6655d1ea94181657f3f010605a4ac2d7db29a58c1847889b67d18f025472.png "Binary Fractions - Problems"

[ref#01]: https://floating-point-gui.de/formats/binary/ "Binary Fractions"

[ref#02]: https://floating-point-gui.de/languages/php/ "Floating-point cheat sheet for PHP"

[ref#03]: https://github.com/php-decimal/ext-decimal "php-decimal/ext-decimal"

[ref#04]: https://stackoverflow.com/questions/6961685/arbitrary-precision-math-in-php "Arbitrary-Precision Math in PHP"

[ref#05]: https://github.com/markrogoyski/math-php "markrogoyski/math-php"


<br>

#### 其他參考資料

PHP Manual (2019). [Floating point numbers](https://www.php.net/manual/en/language.types.float.php).

PHP Manual (2019). [BC Math Functions](https://www.php.net/manual/en/ref.bc.php).

PHP Manual (2019). [number_format — Format a number with grouped thousands](https://www.php.net/number-format).

Borgwardt, M. (a.k.a. brazzy) (2010). [Basic Answers](https://floating-point-gui.de/basic/). THE FLOATING-POINT GUIDE.