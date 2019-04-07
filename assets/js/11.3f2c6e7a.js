(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{225:function(t,e,a){"use strict";a.r(e);var r=a(2),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"github-pages佈置靜態網站-透過dns服務換成自訂的網域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-pages佈置靜態網站-透過dns服務換成自訂的網域","aria-hidden":"true"}},[t._v("#")]),t._v(" Github pages佈置靜態網站 + 透過DNS服務換成自訂的網域")]),t._v(" "),a("h5",{attrs:{id:"date-2019-march-25"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-2019-march-25","aria-hidden":"true"}},[t._v("#")]),t._v(" Date: 2019/March/25")]),t._v(" "),a("br"),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_60-seconds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_60-seconds","aria-hidden":"true"}},[t._v("#")]),t._v(" 60 seconds")]),t._v(" "),a("h4",{attrs:{id:"github官方教學"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github官方教學","aria-hidden":"true"}},[t._v("#")]),t._v(" Github官方教學")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://help.github.com/en/articles/quick-start-setting-up-a-custom-domain",title:"Github help - quick start",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方教學"),a("OutboundLink")],1),t._v("分為4個步驟:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("找DNS商買個好聽的網域.")])]),t._v(" "),a("li",[a("p",[t._v("在DNS上面設定custom domain之前, 先去Github上面把想要的custom domain綁定起來.")])]),t._v(" "),a("li",[a("p",[t._v("到DNS設定該設定的東西 (apex domain / www or custom domain, 端看你的架構. "),a("a",{attrs:{href:"https://help.github.com/en/articles/about-supported-custom-domains",title:"About supported custom domains",target:"_blank",rel:"noopener noreferrer"}},[t._v("支援的列表在此"),a("OutboundLink")],1),t._v(")"),a("br"),t._v(" "),a("img",{attrs:{src:"/images/2019/march/7e5e47280ad25ba92a50d687f483d86359fe0b03086240580830e8322c263fbb.png",alt:"圖片支援",title:"supported-custom-domain-examples"}})])]),t._v(" "),a("li",[a("p",[t._v("在Github上, 移除並重新加入custom domain. 這時會觸發HTTPS的申請流程. 等流程結束之後就OK了.")])])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_60-minutes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_60-minutes","aria-hidden":"true"}},[t._v("#")]),t._v(" 60 minutes")]),t._v(" "),a("h4",{attrs:{id:"以gandi為例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以gandi為例","aria-hidden":"true"}},[t._v("#")]),t._v(" 以Gandi為例")]),t._v(" "),a("p",[t._v("由於還牽扯到DNS上的設定, 下面細分為更多步驟:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Build/deploy static websites")]),t._v(" "),a("p",[t._v("關於如何在github上架設靜態網站, 網路上已經有相當多的資源了.")]),t._v(" "),a("p",[t._v("可以參考"),a("a",{attrs:{href:"https://pages.github.com/",title:"Github pages official webstie",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方網站"),a("OutboundLink")],1),t._v("的教學, 或是直接到Google搜尋中文教學.")])]),t._v(" "),a("li",[a("p",[t._v("Setup custom domain in Github")]),t._v(" "),a("p",[t._v("此處有兩種方法:")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("A. 在repository的根目錄裡放入CNAME檔(裡面寫入要使用的subdomain)即可.\n\nB. 直接在Settings操作, Custom domain裡填入你的網域並儲存.\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"/images/2019/march/6b66546475caabaf392941e0715137fd4332f84bd4b756466ab201a05f4dc58c.png",alt:"Github pages settings",title:"Specify custom domain in GitHub settings"}})]),t._v(" "),a("p",[t._v("不論如何, 你的repository 根目錄底下都會多出一個CNAME檔.")])]),t._v(" "),a("li",[a("p",[t._v("Config your DNS - A Records")]),t._v(" "),a("p",[t._v("這邊我們以Gandi為例, 進到DNS Records進行設定.")]),t._v(" "),a("p",[t._v("Github的"),a("a",{attrs:{href:"https://help.github.com/en/articles/troubleshooting-custom-domains#dns-configuration-errors",title:"DNS configuration errors",target:"_blank",rel:"noopener noreferrer"}},[t._v("幫助"),a("OutboundLink")],1),t._v("有特別提到, 要先將Github server的ip加進我們的DNS Records裡面")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/2019/march/23579eb0296ec5ed2863d5243e033262ca1d819eb80f1e26d8fc6388149ede2d.png",alt:"DNS Records in Gandi",title:"dns-record-on-gandi"}})]),t._v(" "),a("p",[t._v("值得注意的是, 有些網路上的教學所使用的IP已經不支援了( "),a("em",[t._v("207.97.227.245")]),t._v(" and "),a("em",[t._v("204.232.175.78")]),t._v(")")]),t._v(" "),a("p",[a("em",[t._v("192.30.252.153")]),t._v(" 跟 "),a("em",[t._v("192.30.252.154")]),t._v(" 這兩組則是要自行申請HTTPS憑證.")]),t._v(" "),a("p",[t._v("推薦使用以下4組IP")]),t._v(" "),a("ul",[a("li",[t._v("185.199.108.153")]),t._v(" "),a("li",[t._v("185.199.109.153")]),t._v(" "),a("li",[t._v("185.199.110.153")]),t._v(" "),a("li",[t._v("185.199.111.153")])]),t._v(" "),a("p",[t._v("原因如"),a("a",{attrs:{href:"https://wcc723.github.io/design/2018/07/27/gh-pages-https/",title:"Github Pages 自訂網域免費升級 https",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Pages 自訂網域免費升級 https"),a("OutboundLink")],1),t._v("以及官方的"),a("a",{attrs:{href:"https://help.github.com/en/articles/troubleshooting-custom-domains#dns-configuration-errors",title:"DNS configuration errors",target:"_blank",rel:"noopener noreferrer"}},[t._v("trouble shooting"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://help.github.com/en/articles/securing-your-github-pages-site-with-https#resolving-problems-with-mixed-content",title:"Resolving problems with mixed content",target:"_blank",rel:"noopener noreferrer"}},[t._v("Resolving problems with mixed content"),a("OutboundLink")],1),t._v("提到的,")]),t._v(" "),a("p",[t._v("將A record設定成上列的IP以後, 並把repository裡面的assets都改成https之後,")]),t._v(" "),a("p",[t._v("github會自動幫你申請HTTPS憑證.")])]),t._v(" "),a("li",[a("p",[t._v("Config your DNS - CNAME Records"),a("br"),t._v("\n這邊要特別注意github gh-pages的"),a("a",{attrs:{href:"https://help.github.com/en/articles/custom-domain-redirects-for-github-pages-sites",title:"Custom domain redirects for GitHub Pages sites",target:"_blank",rel:"noopener noreferrer"}},[t._v("網域命名方式"),a("OutboundLink")],1),t._v(", 使用前最好先檢查一下")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/2019/march/040ba4824faa2afd3fdf972b2b697489c9890c5db2f87dd1f1c9338caad5f7a3.png",alt:"img#07",title:"Custom domain redirects for GitHub Pages sites"}})]),t._v(" "),a("p",[t._v("假設是使用個人帳號mew底下的repository生成網站的話, github上的網站會是:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mew.github.io/qq-repo\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果想設定成:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("qq.mydomain.io\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("那我們這邊的CNAME就要填入:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("qq   CNAME   10800  mew.github.io.\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("記得此處"),a("strong",[t._v("只能")]),t._v("填 "),a("em",[t._v("username.github.io")]),t._v(" 或是 "),a("em",[t._v("orgname.github.io")]),t._v(" !!")])]),t._v(" "),a("li",[a("p",[t._v("Check DNS entries")]),t._v(" "),a("p",[t._v("使用dig指令來確認DNS是否有設定成功:")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dig +nostats +nocmd qq.mydomain.io\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("結果應該會出現:")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("qq.mydomain.io.     10800       IN      CNAME       mew.github.io.\nmew.github.io.      3600        IN      A           185.199.110.153\nmew.github.io.      3600        IN      A           185.199.109.153\nmew.github.io.      3600        IN      A           185.199.111.153\nmew.github.io.      3600        IN      A           185.199.108.153\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("如果沒有的話, 可能是DNS還在處理, 或是上面設定有誤")])]),t._v(" "),a("li",[a("p",[t._v("HTTPS Configuration")]),t._v(" "),a("p",[t._v("當然, 最後都設定完以後, 不要忘記開啟 "),a("strong",[t._v("Enforce HTTPS")]),t._v(".")]),t._v(" "),a("p",[t._v("(這一步驟就是上面提到的HTTPS的申請流程)")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/2019/march/ac26fb38f709309473f87886486cc6a54c03ccd90c9f8e1c5a3aae4d600138cf.png",alt:"img#02",title:"Repo actions settings"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/2019/march/42f2577e0497d33ba8885398a57a3fbd9055b1dddb72fed6966bab0e1d7bf90c.png",alt:"img#03",title:"enforce-https-checkbox"}})])])]),t._v(" "),a("p",[t._v("全部設定都成功的話, 就能連進去自訂的網域啦.")]),t._v(" "),a("h4",{attrs:{id:"轉址失敗-沒有https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#轉址失敗-沒有https","aria-hidden":"true"}},[t._v("#")]),t._v(" 轉址失敗/沒有HTTPS")]),t._v(" "),a("p",[t._v("有時候會遇到轉址失敗或沒有憑證的問題, 此時可能是電腦裡的"),a("strong",[t._v("DNS Cache")]),t._v("還沒更新,"),a("br"),t._v("\n或是瀏覽器"),a("strong",[t._v("HSTS設定")]),t._v("的問題.")]),t._v(" "),a("p",[t._v("換一台電腦/瀏覽器便能確認是不是這個問題. 通常清除設定之後便能正常運作.")]),t._v(" "),a("br"),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[t._v("#")]),t._v(" References")]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"其他參考資料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他參考資料","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他參考資料")]),t._v(" "),a("p",[t._v("卡斯伯. (2018). "),a("a",{attrs:{href:"https://wcc723.github.io/design/2018/07/27/gh-pages-https/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Pages 自訂網域免費升級 https"),a("OutboundLink")],1),t._v(". Casper Blog.")]),t._v(" "),a("p",[t._v("rynop. (2019, January 23). "),a("a",{attrs:{href:"https://stackoverflow.com/questions/9082499/custom-domain-for-github-project-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("Custom domain for GitHub project pages"),a("OutboundLink")],1),t._v(" StackOverflow")]),t._v(" "),a("p",[t._v("Github. "),a("a",{attrs:{href:"https://help.github.com/en/articles/quick-start-setting-up-a-custom-domain",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quick start: Setting up a custom domain"),a("OutboundLink")],1),t._v(" Github Help")]),t._v(" "),a("p",[t._v("Veru. (2017). "),a("a",{attrs:{href:"http://f2e-veru.com/%E5%B7%A5%E5%85%B7%E5%88%86%E4%BA%AB/%E7%94%9F%E6%88%90GitHub%20Pages+GANDI%E5%9F%9F%E5%90%8D%E8%A8%AD%E5%AE%9A/",target:"_blank",rel:"noopener noreferrer"}},[t._v("生成 GitHub Pages + GANDI 域名設定"),a("OutboundLink")],1),t._v(" Blog")])])},[],!1,null,null,null);e.default=s.exports}}]);