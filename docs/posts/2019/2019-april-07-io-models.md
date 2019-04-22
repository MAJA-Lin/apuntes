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

### Operating System Concepts



<br>

![Operating System Concepts 10e - 3.6.2 Synchronization][img#01]



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

IO發生時通常會有兩個階段, **等待資料準備好** 及 **將資料從 核心 中複製到 行程 中**.

以socket上的IO來說, 第一步是等待資料抵達; 當封包抵達以後, 把它複製到 核心 裡的緩衝區(kernel buffer).
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

在表中,可以看到這個行程呼叫了 **recvfrom** 並執行了系統呼叫 ;
可是一直到資料傳送跟複製資料到緩衝區的動作完成之前, 或是錯誤發生, 內核 才會回傳結果,
這個行程才會解除阻塞狀態, 繼續運行下去.

> We say that our process is blocked the entire time from when it calls recvfrom until it
returns.
>
>When recvfrom returns successfully, our application processes the datagram.

整個 行程 在 **recvfrom**回傳成功之前都是阻塞的狀態, 只有**recvfrom**回傳成功, 應用程式才會繼續處理資料.

<br>

- Nonblocking I/O 非阻塞IO

![non-blocking][img#03]

>When we set a socket to be nonblocking, we are telling the kernel "when an I/O operation
that I request cannot be completed without putting the process to sleep, do not put the
process to sleep, but return an error instead."

當socket被設為非阻塞IO時, 其實就是告訴內核"當一個IO請求在不讓行程 **sleep** 的情況下便無法完成時, 以回傳錯誤代替讓行程睡眠".

如上圖所示, 可以看到前三次呼叫**recvfrom**時, 資料都還沒準備好, 內核這時候會馬上回傳 **EWOULDBLOCK**.

<br>

✍️ Linux手冊上對EWOULDBLOCK的說明:
| Error name | Meaning |
| --- | --- |
| EAGAIN | Resource temporarily unavailable (may be the same value as EWOULDBLOCK) |
| EWOULDBLOCK | Operation would block (may be same value as EAGAIN) |

<br>

第4次呼叫**recvfrom**時, 資料準備好了並複製到應用程式緩衝區中, 此時**recvfrom**回傳成功, 程式開始處理回傳的資料.
像這種程式一直在迴圈當中等待呼叫成功就叫做 **polling**; 它會不斷地去詢問核心資料好了沒, 極為耗費CPU時間.

應用場景可以參考[這一篇][ref#websocket v.s. polling]的介紹.

<br>

- I/O multiplexing (select and poll)

![I/O multiplexing (select and poll)][img#04]

在I/O複用裡面, 先使用**select()**將行程停下來, 等候任何一個socket變成可讀之後,

將這個**可讀的socket**回傳回來, 呼叫 **recvfrom()** 複製資料並繼續執行.

與Blocking IO做比較的話, 好像沒什麼優點, 甚至還比Blocking IO多做了一次系統呼叫;
可是因為它使用了**select()**, 能夠在多個 描述符 裡有任何一個準備就緒時就處理,
讓它能夠以單一的process/thread處理多個連線.

> SELECT的介紹
>
>> **select** function allows the process to instruct the kernel to wait for any one of multiple eventsto occur and to wake up the process only when one or more of these events occurs or when a specified amount of time has passed.
>
> **select()** 告訴內核在指定的事件發生時, 再喚醒這個行程並繼續執行.
>也就是說, 我們能跟內核說我們有興趣的 描述符 (在這個案例裡就是可讀的socket)以及等待的時間.
>當然, 這些描述符並不僅僅限制於socket.


更詳細的解說可以參考[知乎][ref#io multiplexing] 與 [以Redis為範例的I/O Multiplexing詳盡說明][ref#redis and io multiplexing].

- Signal-Driven I/O (SIGIO)

![Signal driven I/O][img#05]

訊號驅動IO與**SIGIO**關係密切, 可以先到Linux Manual閱讀一下[signal的說明][ref#man SIGNAL]

✍️ Linux手冊上對SIGNAL的說明:

> Term: Default action is to terminate the process.


| Signal | Standard | Action | Comment |
| --- | --- | --- | --- |
| SIGIO | - | Term | I/O now possible (4.2BSD) |
| SIGPOLL | P2001 | Term | Pollable event (Sys V). Synonym for SIGIO |

首先使用**sigaction**來建立一個訊號處理器(singal handler), 並馬上返回, 程式可以不被阻擋繼續執行.
當資料準備好的時候, **SIGIO**訊號便會被拋出.

>Regardless of how we handle the signal, the advantage to this model is that we are not blocked while waiting for the datagram to arrive.
>The main loop can continue executing andjust wait to be notified by the signal handler that either the data is ready to process or thedatagram is ready to be read.

此時我們可以:

1. 呼叫**recvfrom**從訊號處理器讀取資料, 並通知主迴圈資料準備完成, 可被處理
2. 通知主迴圈並讓它自己去讀取資料

此模型的優點就是, 不論我們如何處理資料, 在等待資料抵達的過程中, 程式都是不被阻擋的.
主迴圈可以持續執行並等候訊號通知.

<br>

- Asynchronous I/O (the POSIX aio_functions)

![Asynchronous I/O][img#06]


>Asynchronous I/O is defined by the POSIX specification, and various differences in thereal-time functions that appeared in the various standards which came together to form the current POSIX specification have been reconciled.
>In general, these functions work bytelling the kernel to start the operation and to notify us when the entire operation(including the copy of the data from the kernel to our buffer) is complete. The main difference between this model and the signal-driven I/O model in the previous section is that with signal-driven I/O, the kernel tells us when an I/O operation can be initiated, butwith asynchronous I/O, the kernel tells us when an I/O operation is complete.

大致上來說, asynchoronous告訴內核執行一整個操作(其中也包括了從內核複製資料到緩衝區裡), 並在操作完成之時通知我們.

與signal-driven I/O最大的差別是, signal-driven是內核告訴我們I/O動作可以開始了;
asynchronous是內核告訴我們I/O已經完成了.

>We call **aio_read** (the POSIX asynchronous I/O functions begin with aio_ or lio_) and pass the kernel the **descriptor**, **buffer pointer**, **buffer size** (the same three arguments for read), **file offset** (similar to lseek), and how to notify us when the entire operation is complete.
>This system call returns immediately and our process is not blocked while waiting for the I/O to complete. We assume in this example that we ask the kernel togenerate some signal when the operation is complete.
>This signal is not generated until the data has been copied into our application buffer, which is different from the signal-driven I/O model.

我們呼叫**aio_read()**, 並且傳入descriptor, buffer pointer, buffer size(也就是[read][ref#man read]的三個參數), file offset (與[lseek][ref#man lseek]參數一致), 以及當操作完成時該如何通知.
在這邊我們假設操作完成時, 內核會回傳一個訊號. 此訊號直到資料被複製進入應用程式的緩衝區以後才會被送出.

---

傳給**aio_read()**的參數可以參考[Linux manual][ref#man AIO_READ].

✍️ Linux手冊上對AIO_READ的說明:

```c
#include <aio.h>

int aio_read(struct aiocb *aiocbp);
```

可以注意到AIO_READ接收的參數是一個結構, 在繼續查下去可以看到[AIO的頁面上][ref#man AIO]有這個結構的原始碼

```c
#include <aiocb.h>
struct aiocb {
    /* The order of these fields is implementation-dependent */

    int             aio_fildes;     /* File descriptor */
    off_t           aio_offset;     /* File offset */
    volatile void  *aio_buf;        /* Location of buffer */
    size_t          aio_nbytes;     /* Length of transfer */
    int             aio_reqprio;    /* Request priority */
    struct sigevent aio_sigevent;   /* Notification method */
    int             aio_lio_opcode; /* Operation to be performed;
                                        lio_listio() only */

    /* Various implementation-internal fields not shown */
};

/* Operation codes for 'aio_lio_opcode': */

enum { LIO_READ, LIO_WRITE, LIO_NOP };
```

參數詳細說明:

![Description][img#08]


<br>

---

一次5種IO模型的比較

![comparison][img#07]

#### Synchronous I/O v.s. Asynchronous I/O

>POSIX defines these two terms as follows:
> - A synchronous I/O operation causes the requesting process to be blocked until that I/O operation completes.
> - An asynchronous I/O operation does not cause the requesting process to be blocked.
>
> Using these definitions, the first four I/O models **blocking**, **nonblocking**, **I/O multiplexing**,and **signal-driven I/O** are all synchronous because the actual I/O operation (recvfrom) blocks the process.
> Only the asynchronous I/O model matches the asynchronous I/O definition.

根據POSIX的定義, 最大的差異就是在於**IO operation**到底會不會讓請求被阻擋:

- 同步IO操作會導致請求的程序在IO操作完成之前都被阻擋住.
- 異步IO操作則不會造成請求程序被堵住.

可以搭配這張圖片服用:

![Sync v.s. Async][img#09]

<br>

---


## References

<!-- Images -->
[img#01]: /images/2019/april/3e9d19e1edb50b83f1c5ff8fffab1113cadaea87c7dd657b3522d0af6cbe4ee7.png "Operating System Concepts 10e - 3.6.2 Synchronization"

[img#02]: /images/2019/april/2d17e41441c8e68ca4a6821001854913e331c54133df21edd496523c6075cd27.png "Blocking I/O model"

[img#03]: /images/2019/april/64f94a916b338d380d953ee7f144a1694252abe87e3e62b07e14301cd1e7825d.png

[img#04]: /images/2019/april/a524eac80b80ffc018295d5d0a635068bd7fae111c6e7f0c1f0006f50f4205cd.png "I/O multiplexing"

[img#05]: /images/2019/april/0476506e7b93e82d3f6c05f13ecab2d174ab6c33234d9b35c477b0b16a1c92dc.png "Signal driven I/O"

[img#06]: /images/2019/april/9a725fe7d43dfdeda3e49c72a9d28332624c9ef43cf7c85dea3a0c871b66f8d4.png "Asynchronous I/O"

[img#07]: /images/2019/april/1a308013c3e7b257a863e230ca51b8adc49bda8ef6360181bf97943de914961b.png "Comparison"

[img#08]: /images/2019/april/f2a5572f5c2371b722300ffaa1b25d1a866b96bf34b93b97825de0721c482115.png "aio structure description"

[img#09]: /images/2019/april/21804deb7a6be5de0debaddd9440b81b742706639901b1d1bea51c2cda3d6145.png "OS: Two I/O methods: (a) synchronous and (b) asynchronous"

<!-- Links -->
[ref#websocket v.s. polling]: https://blog.gtwang.org/web-development/websocket-protocol/ "WebSocket 通訊協定簡介：比較 Polling、Long-Polling 與 Streaming 的運作原理"

[ref#io multiplexing]: https://www.zhihu.com/question/28594409 "知乎 - I/O多路复用技术（multiplexing）是什么？"

[ref#redis and io multiplexing]: https://draveness.me/redis-io-multiplexing "Redis 和 I/O 多路复用"

[ref#man SIGNAL]: http://man7.org/linux/man-pages/man7/signal.7.html "Linux Programmer's Manual SIGNAL(7)"

[ref#man AIO_READ]: http://man7.org/linux/man-pages/man3/aio_read.3.html "Linux Programmer's Manual AIO_READ(3)"

[ref#man AIO]: http://man7.org/linux/man-pages/man7/aio.7.html "Linux Programmer's Manual AIO(7)"

[ref#man read]: http://man7.org/linux/man-pages/man2/read.2.html "Linux Programmer's Manual READ(2)"

[ref#man lseek]: http://man7.org/linux/man-pages/man2/lseek.2.html "Linux Programmer's Manual LSEEK(2)"


<!-- Abbreviations -->
*[核心]: Kernel
*[內核]: Kernel
*[行程]: Process
*[sleep]: 使process/thread暫停一段時間
*[描述符]: descriptors


<br>

#### 其他參考資料

Carl. (2018, Jan 31). [淺談I/O Model](https://medium.com/@clu1022/%E6%B7%BA%E8%AB%87i-o-model-32da09c619e6). Medium.

xianyunyh. (2018, Dec 29). [PHP-Interview - LinuxIO模型.md](https://github.com/xianyunyh/PHP-Interview/blob/master/Linux/LinuxIO%E6%A8%A1%E5%9E%8B.md). xianyunyh/PHP-Interview.

findumars (2017, Feb 02). [5种网络IO模型（有图，很清楚）](https://www.cnblogs.com/findumars/p/6361627.html) 博客园.

二毛儿 (2019, Jan 10). [5种网络IO模型（有图，很清楚）(備份)](https://zhuanlan.zhihu.com/p/54580385) 知乎.

calidion. (2016, Jul 8). [同步，异步，阻塞，非阻塞等关系轻松理解 #40](https://github.com/calidion/calidion.github.io/issues/40). calidion/calidion.github.io.

Stevens, R & Fenner, B & Rudoff, A (2003, Nov 21). [UNIX Network Programming Volume 1, Third Edition: The Sockets Networking API](https://www.amazon.com/Unix-Network-Programming-Sockets-Networking/dp/0131411551). Amazon.

Silberschatz, A & Galvin, P (2018, May 2). [Operating System Concepts 10e](https://www.amazon.com/Operating-System-Concepts-Abridged-Companion/dp/1119456339/ref=sr_1_fkmrnull_1?keywords=Operating+System+Concepts+10e&qid=1554626354&s=books&sr=1-1-fkmrnull). Amazon.

Linux Programmer's Manual (2017, Sep 15). [SLEEP(3)](http://man7.org/linux/man-pages/man3/sleep.3.html) Linux Programmer's Manual.

Linux Programmer's Manual (2017, Mar 06). [ERRNO(3)](http://man7.org/linux/man-pages/man3/errno.3.html) Linux Programmer's Manual.

Wang, G. T. (2014, Jan 16). [WebSocket 通訊協定簡介：比較 Polling、Long-Polling 與 Streaming 的運作原理](https://blog.gtwang.org/web-development/websocket-protocol/) G. T. Wang 的個人部落格

知乎用户 (2015, Jun 27). [知乎 - I/O多路复用技术（multiplexing）是什么？](https://www.zhihu.com/question/28594409) 知乎

Draveness (2016, Nov 26). [Redis 和 I/O 多路复用](https://draveness.me/redis-io-multiplexing) Draveness's Blog
