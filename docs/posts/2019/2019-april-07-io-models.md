---
title: IO Models
lang: zh-TW
date: 2019-04-07
categories: [2019]
tags: [Unix, IO]
---


# IO Models

##### Date: 2019/04/07

<br>

---


## 60 seconds

#### Subtitle#1


<br>




## 60 minutes

### UNIX networking I/O models

首先來看一下UNIX這本書上對I/O模型的介紹:

>There are normally two distinct phases for
an input operation:
>
>1. Waiting for the data to be ready
>
>2. Copying the data from the kernel to the process

IO發生時通常會有兩個階段, **等待資料準備好** 及 **將資料從核心(kernel)中複製到行程中(process)**.

以socket上的IO來說, 第一步是等待資料抵達; 當封包抵達以後, 把它複製到核心裡的緩衝區(kernel buffer).
第二步才是再把資料從核心緩衝區複製到應用程式的緩衝區裡.

因為這兩階段中的不同情況, 於是有了下列的5種I/O模型:

<br>

- Blocking I/O 阻塞式IO

![blocking][img#02]

書上有特別提到使用UDP當作範例的原因:

>We use UDP for this example instead of TCP because with UDP,
>
>the concept of data being
"ready" to read is simple: either an entire datagram has been received or it has not. With
TCP it gets more complicated, as additional variables such as the socket's low-water mark
come into play.

相較於TCP, UDP在 **資料準備好被讀取**的概念比較簡單, 只要考慮資料接受與否即可;
TCP比較複雜, 還會牽扯到一些額外的變數等等.

在表中,可以看到這個行程呼叫了 **recvfrom** 並執行了系統呼叫 (system call);
可是一直到資料傳送跟複製資料到緩衝區的動作完成之前, 或是錯誤發生, kernel才會回傳結果,
這個行程才會解除阻塞狀態, 繼續運行下去.

> We say that our process is blocked the entire time from when it calls recvfrom until it
returns.
>
>When recvfrom returns successfully, our application processes the datagram.

整個行程在 **recvfrom**回傳成功之前都是阻塞的狀態, 只有**recvfrom**回傳成功, 應用程式才會繼續處理資料.

<br>

- Nonblocking I/O

![non-blocking][img#03]

- I/O multiplexing (select and poll)

![I/O multiplexing (select and poll)][img#04]


- Signal-Driven I/O (SIGIO)

![Signal driven I/O][img#05]

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

- Asynchronous I/O (the POSIX aio_functions)

![Asynchronous I/O][img#06]

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


一次5種IO模型的比較

![comparison][img#07]





首先來看一下恐龍本裡面, 對上列4個IO模型的說明:

<br>

![Operating System Concepts 10e - 3.6.2 Synchronization][img#01]


<br>

---


## References

[img#01]: /images/2019/april/3e9d19e1edb50b83f1c5ff8fffab1113cadaea87c7dd657b3522d0af6cbe4ee7.png "Operating System Concepts 10e - 3.6.2 Synchronization"

[img#02]: /images/2019/april/2d17e41441c8e68ca4a6821001854913e331c54133df21edd496523c6075cd27.png "Blocking I/O model"

[img#03]: /images/2019/april/64f94a916b338d380d953ee7f144a1694252abe87e3e62b07e14301cd1e7825d.png

[img#04]: /images/2019/april/a524eac80b80ffc018295d5d0a635068bd7fae111c6e7f0c1f0006f50f4205cd.png "I/O multiplexing"

[img#05]: /images/2019/april/0476506e7b93e82d3f6c05f13ecab2d174ab6c33234d9b35c477b0b16a1c92dc.png "Signal driven I/O"

[img#06]: /images/2019/april/9a725fe7d43dfdeda3e49c72a9d28332624c9ef43cf7c85dea3a0c871b66f8d4.png "Asynchronous I/O"

[img#07]: /images/2019/april/1a308013c3e7b257a863e230ca51b8adc49bda8ef6360181bf97943de914961b.png "Comparison"

[ref#01]: link "Link description"


<br>

#### 其他參考資料

Carl. (2018, Jan 31). [淺談I/O Model](https://medium.com/@clu1022/%E6%B7%BA%E8%AB%87i-o-model-32da09c619e6). Medium.

xianyunyh. (2018, Dec 29). [PHP-Interview - LinuxIO模型.md](https://github.com/xianyunyh/PHP-Interview/blob/master/Linux/LinuxIO%E6%A8%A1%E5%9E%8B.md). xianyunyh/PHP-Interview.

calidion. (2016, Jul 8). [同步，异步，阻塞，非阻塞等关系轻松理解 #40](https://github.com/calidion/calidion.github.io/issues/40). calidion/calidion.github.io.

Stevens, R & Fenner, B & Rudoff, A (2003, Nov 21). [UNIX Network Programming Volume 1, Third Edition: The Sockets Networking API](https://www.amazon.com/Unix-Network-Programming-Sockets-Networking/dp/0131411551). Amazon.

Silberschatz, A & Galvin, P (2018, May 2). [Operating System Concepts 10e](https://www.amazon.com/Operating-System-Concepts-Abridged-Companion/dp/1119456339/ref=sr_1_fkmrnull_1?keywords=Operating+System+Concepts+10e&qid=1554626354&s=books&sr=1-1-fkmrnull). Amazon.



[Title](href link)

