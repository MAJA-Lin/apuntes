---
title: 比較 Pass by Value / Reference / Name
lang: zh-TW
date: 2019-03-28
categories: [2019]
tags: [C, pass-parameters, JAVA, PHP, Scala]
---


# 比較 Pass by Value / Reference / Name

##### Date: 2019/March/28

<br>

---


## 60 seconds

似乎有點難...

<br>

---

## 60 minutes


首先引用一段螞蟻書裡關於**pass by value** 及 **pass by reference**的內容

#### 5.9 Passing Arguments By Value and By Reference

>When arguments are *passed by value*, a *copy* of the argument’s value
is made and passed to the called function.
>
>Changes to the copy do *not* affect an original
variable’s value in the caller.
>
>When an argument is passed by reference, the caller allows the
called function to *modify* the original variable’s value.
>
>Pass-by-value should be used whenever the called function does not need to modify
the value of the caller’s original variable.
>
>This prevents the accidental **side effects** (variable
modifications) that so greatly hinder the development of correct and reliable software systems.
>
>Pass-by-reference should be used only with *trusted* called functions that need to
modify the original variable.
>
>In C, all arguments are passed by value.
>
> As we’ll see in Chapter 7, it’s possible to **simulate** pass-by-reference by using the *address operator* and the *indirection operator*.


#### 傳值(pass by value)

將變數傳送至函式上對應的參數時,
會將值複製再傳進去.

此時對這些變數的修改並不會影響原本變數的值.
最有名的例子應該就是swap了:

```go
func swap(x int, y int) {
    var temp int = x
    x = y
    y = temp
}

func main() {
    var x int = 5
    var y int = 10

    swap(x, y)
    fmt.Println(x, y)
    // output: x = 5;
    // y = 10;
}
```

不管在swap()裡如何對x, y兩個變數做運算, 都**不會**變更到main()裡面x與y的實際值.

<br>

#### 傳參考(pass by reference)

若是以傳參考的方式傳遞變數, 則會允許被呼叫的函式去修改變數的原始值.

```go
func swap(x *int, y *int) {
    temp := *x
    *x = *y
    *y = temp
}

func main() {
    var x int = 5
    var y int = 10

    swap(&x, &y)
    fmt.Println(x, y)
    // output: x = 10;
    // y = 5;
}
```

<br>

#### 傳名(pass by name)

[Scala的文件][ref#pass-by-name05]裡對傳名參數是這麼介紹的:

>By-name parameters are only evaluated when used. They are in contrast to by-value parameters.

這裡透過[Knuth's GPS に関すること - 名前呼びと Jensen's Device][ref#pass-by-name04]的程式碼來說明會比較易懂一些.
(程式碼部份為了上色功能稍做更改)

```go
func foo(by_name x int, by_name cond bool) {
    while (cond) {
        println(x)
        x = x + 1
    }
}

func main() {
    var a int = 5
    foo(a, a < 10)
    println("---")
    println(a)
}


// 執行結果:
5
6
7
8
9
---
10
```

##### Runnable sample in Scala

```scala
def foo(input: => Int, cond: => Boolean) = {
  while (cond) {
    println(i)
    i += 1
  }
}


var i = 5
foo(i, i < 10)
```


以傳值呼叫來說, **a < 10**在被傳送進foo()之前就先算出了值(true), 這段程式碼便會無窮迴圈, 無止盡的執行下去.

而傳名呼叫, 這段條件式foo裡面, 直到開始執行while的時候才去計算 **a < 10**這段條件式, 因此結果會如同上面的輸出結果.

更詳細的中文解說可以看看[sunny_gong(simula)的回答][ref#pass-by-name03]:

>call-by-name 源自於 Algol60 這個
古早的程式語言，它定義了兩種參數傳遞方式，
>call-by-value 與 call-by-name，
>
>其中call-by-name 被定義為 Name Replacement：「參數列中的每個參數，如果未指定以
傳值的方式來傳遞，就必須以實際傳入的參數來取代。」
>
>在 Compilers - Principles, Techniques, and Tools 這本書的 7.5 節中，它被解釋為 **inline-expansion**。
>
>其原因是，以 call-by-name 的方式呼叫函式時，如果在某個參數位置上指定了一個運算式
(expression) 當作參數，那麼這個 expression 會被直接傳入函式裡面進行展開，
>
>所以，這個 expression 是在函式裡面才進行運算的，而不是在參數列中預先計算好它的值再傳
進去。
>
>這就產生了 delayed evaluation (延遲計算) 的效果。
>
>delayed evaluation 的好處是，只有當函式需要某個 expression 參數的值，該 expression 才會被計算，否則就不用了。


至於英文的介紹可以參考Simon Fraser University的教授Robert D. Cameron所寫的這篇[文章][ref#pass-by-name01].

<br>

值得注意的是, 在螞蟻書裡有提到這麼一段:

C **只有** 傳值; 傳參考是靠著*address operator* 與 *indirection operator* 來達成的.

#### 7.4 Passing Arguments to Functions by Reference

> All arguments in C are passed by value.
>In C, you use *pointers* and the *indirection operator* to **simulate** pass-by-reference.
>
>When calling a function with arguments that should be modified, the addresses of the arguments are passed. This is normally accomplished by applying the address operator (**&**) to
the variable (in the caller) whose value will be modified.
>
>As we saw in Chapter 6, arrays are
not passed using operator **&** because C *automatically* passes the starting location in memory
of the array (the name of an array is equivalent to **&arrayName**[0]).
>
>When the address of
a variable is passed to a function, the indirection operator (*) may be used in the function
to modify the value at that location in the caller’s memory.

<br>

---

### PHP裡的pass by reference

了解了這幾種傳遞參數方式的不同以後, 就可以回來看PHP實踐pass-by-reference的部分啦.

程式碼參考自StackOverflow的[問答(Is Java “pass-by-reference” or “pass-by-value”?)][ref#Java - pass-by-reference or pass-by-value].

同時也可以參考這一篇[部落格文章][ref#PHP references EN] (或是[簡中翻譯版][ref#PHP references CN])


```php
/**
 * Simple sample
 */
class Sample
{
    protected $value;

    public function __construct(string $value)
    {
        $this->setValue($value);
    }

    public function setValue(string $value)
    {
        $this->value = $value;
    }

    public function getValue()
    {
        echo $this->value . PHP_EOL;
    }
}

function test(Sample $sample)
{
    $sample->setValue("111"); // AAA
    // 111

    $sample = new Sample("222"); // BBB
    // 222

    $sample->setValue("333"); // CCC
    // 333
}

function main()
{
    $prova = new Sample("000");
    // 000

    test($prova);
    // 111
    // 222
    // 333

    $prova->getValue();
    // 111
}
```

首先創造了一個新的Sample, 設定它的值是000, 並指派給 *prova*.

接著執行test()這個函式, 裡面會把剛剛傳進去的 *prova* 指派給 *sample*這個變數, 在AAA行會把*sample*的值改寫成111.

可是, 當執行到BBB行的時候, 再度創建了一個新的Sample物件, 這時候因為產生了新的記憶體位址, *sample* 會去紀錄這個新的位址, 而不會是原來的 *prova*的位址, 於是test()函式執行完返回至**main()**
後, *prova*的最終結果會是111.

<br>

---


## References

[img#01]: /images/folder/file "Image description"

[ref#pass-by-name01]: http://www.cs.sfu.ca/~cameron/Teaching/383/PassByName.html "Pass-By-Name Parameter Passing by Robert D. Cameron"

[ref#pass-by-name02]: https://stackoverflow.com/questions/838079/what-is-pass-by-name-and-how-does-it-work-exactly "What is “pass-by-name” and how does it work exactly?"

[ref#pass-by-name03]: http://www.programmer-club.com.tw/showSameTitleN/c/20923.html "Programmer Club - call-by-name by sunny_gong(simula)"

[ref#pass-by-name04]: http://metanest.jp/knuths_gps/ "Knuth's GPS に関すること"

[ref#pass-by-name05]: https://docs.scala-lang.org/tour/by-name-parameters.html "Scala Documentation - BY-NAME PARAMETERS"


[ref#PHP references CN]: https://learnku.com/laravel/t/9184/php-reference-is-a-pit-please-use-it-carefully "PHP 引用是个坑，请慎用"

[ref#PHP references EN]: http://schlueters.de/blog/archives/125-Do-not-use-PHP-references.html "Do not use PHP references"

[ref#Java - pass-by-reference or pass-by-value]: https://stackoverflow.com/questions/40480/is-java-pass-by-reference-or-pass-by-value "Is Java “pass-by-reference” or “pass-by-value”?"


<br>

#### 其他參考資料

Deitel, P & Deitel, H (2013). [C How to Program 7th Edition](http://www.deitel.com/Books/C/CHowtoProgram7e/tabid/3635/Default.aspx).

GJLMoTea. (2018). [Call by value, Call by reference (address), Call by name, Call by value and copy restore](https://home.gamer.com.tw/creationDetail.php?sn=4051523). 巴哈姆特.


huli. (2018). [深入探討 JavaScript 中的參數傳遞：call by value 還是 reference？](https://blog.techbridge.cc/2018/06/23/javascript-call-by-value-or-reference/). TechBridge 技術共筆部落格.

阮一峰. (2015). [尾调用优化](http://www.ruanyifeng.com/blog/2015/04/tail-call.html). 阮一峰的网络日志.

Wikipedia. (2019). [Evaluation strategy](https://en.wikipedia.org/wiki/Evaluation_strategy). Wikipedia.


[Title](href link)