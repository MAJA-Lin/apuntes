(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{221:function(e,a,t){"use strict";t.r(a);var r=t(2),s=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"利用aws-instance-scheduler-達成ec2-rds-自動開-關機"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#利用aws-instance-scheduler-達成ec2-rds-自動開-關機","aria-hidden":"true"}},[e._v("#")]),e._v(" 利用AWS Instance Scheduler 達成EC2 & RDS 自動開/關機")]),e._v(" "),t("h5",{attrs:{id:"date-2019-april-02"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#date-2019-april-02","aria-hidden":"true"}},[e._v("#")]),e._v(" Date: 2019/April/02")]),e._v(" "),t("p",[e._v("AWS機器上的花費是相當高的, 當專案仍處在開發階段的時候, 這些機器並不需要24小時都維持開啟的狀態.")]),e._v(" "),t("p",[e._v("我們可以透過腳本讓這些EC2或是RDS在指定的時段裡啟動, 下班之後就把機器關掉節省開銷.")]),e._v(" "),t("br"),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_60-seconds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_60-seconds","aria-hidden":"true"}},[e._v("#")]),e._v(" 60 seconds")]),e._v(" "),t("h3",{attrs:{id:"aws幫你準備好了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws幫你準備好了","aria-hidden":"true"}},[e._v("#")]),e._v(" AWS幫你準備好了")]),e._v(" "),t("br"),e._v(" "),t("ul",[t("li",[e._v("架構")])]),e._v(" "),t("p",[e._v("到"),t("a",{attrs:{href:"https://aws.amazon.com/tw/solutions/instance-scheduler/",title:"AWS Instance Scheduler",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方頁面"),t("OutboundLink")],1),e._v(", 可以看到這套懶人包的架構:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/2019/april/cb70e1deb398f3ce74b74c793de1d7d1a2150f9a7dae33419f792a655bac253e.png",alt:"架構圖",title:"AWS Solution overview"}})]),e._v(" "),t("br"),e._v(" "),t("blockquote",[t("p",[e._v("用"),t("strong",[e._v("AWS CloudWatch Events")]),e._v(" (以時間為條件, 類似cronjob, 這邊用來調整觸發"),t("strong",[e._v("頻率")]),e._v(") 觸發"),t("strong",[e._v("Lambda")]),e._v("程式 (AWS寫好了, 基於python),")]),e._v(" "),t("p",[e._v("去檢查目標的執行狀態, 再按照"),t("strong",[e._v("DynamoDB")]),e._v("裡設定的細節執行開關機.")])]),e._v(" "),t("br"),e._v(" "),t("ul",[t("li",[e._v("使用CloudFormation佈署基礎服務")])]),e._v(" "),t("p",[e._v("一樣是在剛剛的官方頁面, 可以看到 "),t("strong",[e._v("Launch solution in the AWS Console")]),e._v("的按鈕,\n按下去以後就會進到CloudFormation的頁面, 並開始設定細節.")]),e._v(" "),t("p",[e._v("進不去該頁面的同學請先確認你的"),t("strong",[e._v("IAM")]),e._v("裡有開啟CloudFormation的權限.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/2019/april/48018e1af8c10f2731359f431c8d7213d9cb731dc7b93fad8217f16e82a03ac5.png",alt:"按下下一步",title:"AWS自動填入了Scheduler的模板, 按下Next即可"}})]),e._v(" "),t("br"),e._v(" "),t("p",[e._v("當然, 你也可以用"),t("em",[e._v("View/Edit template in Designer")]),e._v("查看接下來AWS會幫你開啟/創建哪些服務.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/2019/april/9627a0853bd495f52df4837eda2b5fd07e12c83089dd3ab8aa091630719f03b6.png",alt:"CloudFormation template",title:"CloudFormation template"}})]),e._v(" "),t("br"),e._v(" "),t("p",[e._v("下一頁會進到Options, 要特別注意權限的設定. 這邊也能設定排程出錯時的處置選項.\n之後就等待CloudFormation將整組服務建立起來.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/2019/april/2183c72c3c752ce3f4b7e1779bf829d065185f5ba93f3c9d1ea01b1e5818e70b.png",alt:"Parameters",title:"參數說明"}})]),e._v(" "),t("p",[e._v("※註1: "),t("strong",[e._v("Instance Scheduler tag name")]),e._v("是之後在EC2/RDS上指定哪些"),t("strong",[e._v("資源")]),e._v("要套用"),t("em",[e._v("自動開關機")]),e._v("時會用到的, 這裡指定的是"),t("strong",[e._v("key")])]),e._v(" "),t("br"),e._v(" "),t("ul",[t("li",[e._v("DynamoDB: 調整時間與排程")])]),e._v(" "),t("p",[e._v("現在我們要來調整時間與排程了.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/2019/april/16a696b30864af42938ae92ec669f6e9d7012c4478bbb14c0a4b338de53bdb47.png",alt:"DynamoDB page",title:"DynamoDB"}})]),e._v(" "),t("br"),e._v(" "),t("p",[e._v("進入到DynamoDB -> Tables -> 選擇ConfigTable (不要"),t("strong",[e._v("手動修改")]),e._v("StateTable!)-> Items,")]),e._v(" "),t("p",[e._v("能夠看到下面有很多資料. 在這邊我想設定台灣時間09:00到21:00時機器開啟,")]),e._v(" "),t("p",[e._v("首先複製(Actions -> Duplicate)一筆時間資料(period), 再做修改:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/2019/april/6d604a1f57da63aafef62542d6427e8227e5282f2d1d17ca6b429697af137586.png",alt:"時間區間",title:"period"}})]),e._v(" "),t("p",[e._v("接著一樣複製一筆排程(schedule)作修改:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/2019/april/6d604a1f57da63aafef62542d6427e8227e5282f2d1d17ca6b429697af137586.png",alt:"排程",title:"schedule"}})]),e._v(" "),t("p",[e._v("這裡的名稱(name)跟上面 "),t("strong",[e._v("※註1")]),e._v(" 提到的tag key有關聯, 等等會提到.")]),e._v(" "),t("p",[e._v("總之, 到這邊整個設定就完成了80%.")]),e._v(" "),t("br"),e._v(" "),t("ul",[t("li",[e._v("啟動排程開關機服務")])]),e._v(" "),t("p",[e._v("這裡使用EC2u作為範例,")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/2019/april/925280d6c0935aad3a992ed66da8307882b8d38c30183c37f73fb28ce20deb80.png",alt:"EC2 Instances",title:"EC2 page"}})]),e._v(" "),t("p",[e._v("EC2 -> INSTANCES -> 選擇要啟用排程開關機的實例 -> "),t("em",[e._v("Add/Edit Tags")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Key:Value\n\n$(Instance Scheduler tag name):$(DanamoDB->ConfigTable->Items->schedule->name)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("右邊的值只能選擇當初DynamoDB裡面是排程(type = schedule)的資料,\n如果給的值是區間名稱(type = period)的話會報錯.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/2019/april/ff9e608382107313f3400f7523d0a1f73d4c879c2e6826eef10dca792e0baa1f.png",alt:"簡單來說就是這麼回事",title:"Instance Scheduler on the AWS Cloud"}})]),e._v(" "),t("h2",{attrs:{id:"_60-minutes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_60-minutes","aria-hidden":"true"}},[e._v("#")]),e._v(" 60 minutes")]),e._v(" "),t("h3",{attrs:{id:"still-building"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#still-building","aria-hidden":"true"}},[e._v("#")]),e._v(" Still building")]),e._v(" "),t("br"),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("br"),e._v(" "),t("h4",{attrs:{id:"其他參考資料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他參考資料","aria-hidden":"true"}},[e._v("#")]),e._v(" 其他參考資料")]),e._v(" "),t("p",[e._v("Amazon. (2018, Feb. 7). "),t("a",{attrs:{href:"https://aws.amazon.com/tw/about-aws/whats-new/2018/02/introducing-the-aws-instance-scheduler/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Instance Scheduler 正式推出"),t("OutboundLink")],1),e._v(" Amazon Web Service.")]),e._v(" "),t("p",[e._v("Dulare (20188, Feb. 20). "),t("a",{attrs:{href:"https://handyman.dulare.com/aws-instance-scheduler-quick-howto/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Instance Scheduler – quick howto"),t("OutboundLink")],1),e._v(" IT HANDYMAN.")]),e._v(" "),t("p",[e._v("Amazon, (2018, October). "),t("a",{attrs:{href:"https://docs.aws.amazon.com/solutions/latest/instance-scheduler/welcome.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Instance Scheduler"),t("OutboundLink")],1),e._v(" Amazon Web Service Documentation.")])])},[],!1,null,null,null);a.default=s.exports}}]);