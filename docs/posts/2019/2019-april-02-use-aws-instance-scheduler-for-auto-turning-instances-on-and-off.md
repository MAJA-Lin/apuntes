# 利用AWS Instance Scheduler 達成EC2 & RDS 自動開/關機

##### Date: 2019/April/02

AWS機器上的花費是相當高的, 當專案仍處在開發階段的時候, 這些機器並不需要24小時都維持開啟的狀態.

我們可以透過腳本讓這些EC2或是RDS在指定的時段裡啟動, 下班之後就把機器關掉節省開銷.

<br>


---


## 60 seconds

### AWS幫你準備好了

<br>

- 架構

到[官方頁面][ref#instance-schedule-page], 可以看到這套懶人包的架構:

![架構圖][img#01]

<br>

>用**AWS CloudWatch Events** (以時間為條件, 類似cronjob, 這邊用來調整觸發**頻率**) 觸發**Lambda**程式 (AWS寫好了, 基於python),
>
>去檢查目標的執行狀態, 再按照**DynamoDB**裡設定的細節執行開關機.

<br>

- 使用CloudFormation佈署基礎服務


一樣是在剛剛的官方頁面, 可以看到 **Launch solution in the AWS Console**的按鈕,
按下去以後就會進到CloudFormation的頁面, 並開始設定細節.

進不去該頁面的同學請先確認你的**IAM**裡有開啟CloudFormation的權限.

![按下下一步][img#02]

<br>

當然, 你也可以用*View/Edit template in Designer*查看接下來AWS會幫你開啟/創建哪些服務.

![CloudFormation template][img#03]

<br>


下一頁會進到Options, 要特別注意權限的設定. 這邊也能設定排程出錯時的處置選項.
之後就等待CloudFormation將整組服務建立起來.

![Parameters][img#04]

※註1: **Instance Scheduler tag name**是之後在EC2/RDS上指定哪些**資源**要套用*自動開關機*時會用到的, 這裡指定的是**key**

<br>

- DynamoDB: 調整時間與排程

現在我們要來調整時間與排程了.


![DynamoDB page][img#07]

<br>

進入到DynamoDB -> Tables -> 選擇ConfigTable (不要**手動修改**StateTable!)-> Items,

能夠看到下面有很多資料. 在這邊我想設定台灣時間09:00到21:00時機器開啟,

首先複製(Actions -> Duplicate)一筆時間資料(period), 再做修改:

![時間區間][img#05]

接著一樣複製一筆排程(schedule)作修改:

![排程][img#06]

這裡的名稱(name)跟上面 **※註1** 提到的tag key有關聯, 等等會提到.

總之, 到這邊整個設定就完成了80%.

<br>

- 啟動排程開關機服務

這裡使用EC2u作為範例,

![EC2 Instances][img#08]

EC2 -> INSTANCES -> 選擇要啟用排程開關機的實例 -> *Add/Edit Tags*

```
Key:Value

$(Instance Scheduler tag name):$(DanamoDB->ConfigTable->Items->schedule->name)
```

右邊的值只能選擇當初DynamoDB裡面是排程(type = schedule)的資料,
如果給的值是區間名稱(type = period)的話會報錯.

![簡單來說就是這麼回事][img#09]


## 60 minutes

### Still building




<br>

---


## References

[img#01]: /images/2019/april/cb70e1deb398f3ce74b74c793de1d7d1a2150f9a7dae33419f792a655bac253e.png "AWS Solution overview"

[img#02]: /images/2019/april/48018e1af8c10f2731359f431c8d7213d9cb731dc7b93fad8217f16e82a03ac5.png "AWS自動填入了Scheduler的模板, 按下Next即可"

[img#03]: /images/2019/april/9627a0853bd495f52df4837eda2b5fd07e12c83089dd3ab8aa091630719f03b6.png "CloudFormation template"

[img#04]: /images/2019/april/2183c72c3c752ce3f4b7e1779bf829d065185f5ba93f3c9d1ea01b1e5818e70b.png "參數說明"

[img#05]: /images/2019/april/6d604a1f57da63aafef62542d6427e8227e5282f2d1d17ca6b429697af137586.png "period"

[img#06]: /images/2019/april/6d604a1f57da63aafef62542d6427e8227e5282f2d1d17ca6b429697af137586.png "schedule"

[img#07]: /images/2019/april/16a696b30864af42938ae92ec669f6e9d7012c4478bbb14c0a4b338de53bdb47.png "DynamoDB"

[img#08]: /images/2019/april/925280d6c0935aad3a992ed66da8307882b8d38c30183c37f73fb28ce20deb80.png "EC2 page"

[img#09]: /images/2019/april/ff9e608382107313f3400f7523d0a1f73d4c879c2e6826eef10dca792e0baa1f.png "Instance Scheduler on the AWS Cloud"


[ref#instance-schedule-page]: https://aws.amazon.com/tw/solutions/instance-scheduler/ "AWS Instance Scheduler"

[ref#01]: link "Link description"


<br>

#### 其他參考資料

Amazon. (2018, Feb. 7). [AWS Instance Scheduler 正式推出](https://aws.amazon.com/tw/about-aws/whats-new/2018/02/introducing-the-aws-instance-scheduler/) Amazon Web Service.

Dulare (20188, Feb. 20). [AWS Instance Scheduler – quick howto](https://handyman.dulare.com/aws-instance-scheduler-quick-howto/) IT HANDYMAN.

Amazon, (2018, October). [AWS Instance Scheduler](https://docs.aws.amazon.com/solutions/latest/instance-scheduler/welcome.html) Amazon Web Service Documentation.