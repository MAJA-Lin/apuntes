(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{382:function(t,a,e){"use strict";e.r(a);var s=e(27),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"migrate-continuous-integration-from-travis-ci-to-github-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migrate-continuous-integration-from-travis-ci-to-github-action"}},[t._v("#")]),t._v(" Migrate Continuous Integration From Travis CI to GitHub Action")]),t._v(" "),e("h5",{attrs:{id:"date-2021-july-21"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#date-2021-july-21"}},[t._v("#")]),t._v(" Date: 2021/July/21")]),t._v(" "),e("br"),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("在這個筆記荒廢了很長一段時間以後，看著 "),e("em",[t._v("GitHub dependabot")]),t._v(" 滿滿的 "),e("em",[t._v("Pull Request")]),t._v(" 通知，")]),t._v(" "),e("p",[t._v("深深覺得該好好更新一下相依套件了，才發現原本透過 Travis 串好的 CI 壞掉啦。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/2021/july/b9e91ac7cb1c9baf46e78a81ad14e748303d13239b58b76ee71fb1de8db89563.png",alt:"",title:"Full of pull requests made by dependabot"}})]),t._v(" "),e("p",[t._v("原本以為是更新套件的問題，不過詳細看了錯誤訊息是授權失敗。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/2021/july/d3092969eb40e1a257c2717e26d3a01cc143ac727cf548334814d9e8c3711438.jpg",alt:"",title:"Failed builds on travis-ci.com"}})]),t._v(" "),e("p",[t._v("看了字面上的意思，以及想到 GitHub 在今年5月份的時候有"),e("a",{attrs:{href:"https://github.blog/2021-04-05-behind-githubs-new-authentication-token-formats/",title:"Behind GitHub’s new authentication token formats",target:"_blank",rel:"noopener noreferrer"}},[t._v("對 Authentication token 進行更新"),e("OutboundLink")],1),t._v("，"),e("br"),t._v("\n於是我也跑去刷新了一下 "),e("em",[t._v("Personal Access Token")]),t._v(" (確保 Travis CI 有權限可以部署)，結果還是失敗......")]),t._v(" "),e("p",[t._v("後來發現原來是因應之前的"),e("a",{attrs:{href:"https://blog.travis-ci.com/2020-11-02-travis-ci-new-billing",title:"The new pricing model for travis-ci.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("計費模式調整"),e("OutboundLink")],1),t._v("，要先去後台選擇好方案後才能繼續跑部署腳本。")]),t._v(" "),e("p",[t._v("原本的設定頁面大大的紅字沒有截到圖，不過基本上就是要你選方案：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/2021/july/d9ade7f64ff681cae9282cd0eb6c8dda0c69bd0133a0621faa5a5524f986f3ad.png",alt:"",title:"Monthly Plans on Travis CI"}})]),t._v(" "),e("p",[t._v("要注意的是點數用完就沒了，不會再生，只能透過付費取得。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/2021/july/5bc21b278a08ae2e9575816aa7f278f2215a698f0e57194471efc85588358bf2.png",alt:"",title:"Free Plan offers 10,000 credits which will not be replenished automatically. Pay amigo, pay."}})]),t._v(" "),e("p",[t._v("調整到這裡，部落格的自動發版復活了，但我也開始想將 CI 轉換到曾在公司使用的 GitHub Action 上了。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/2021/july/359c3cb9301f2ccfcf6e3bdfc1c519f5b305fda39d6aedfc2b5c2673639f73f9.png",alt:"",title:"Successful build on Travis CI"}})]),t._v(" "),e("p",[t._v("相較於 Travis 的終生額度制， GitHub Action 目前採用"),e("a",{attrs:{href:"https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions",title:"About billing for GitHub Actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("每月分鐘數的額度"),e("OutboundLink")],1),t._v("，新的一個月會刷新額度看起來比較誘人。 "),e("s",[t._v("當然微軟爸爸比較罩也是個原因。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/2021/july/eee487c7cb18a105705ff7e1457eb79e91123f05f45bdf33f8937250fa962611.png",alt:"",title:"GitHub Action plan comparisons"}})]),t._v(" "),e("p",[t._v("事不宜遲，那就馬上做調整吧。首先第一步是先把Travis CI關掉XD"),e("br"),t._v("\n再來是選擇合適的GitHub Action並修改設定檔，我是使用 "),e("a",{attrs:{href:"https://github.com/marketplace/actions/deploy-to-github-pages",title:"Deploy to GitHub Pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("Deploy to GitHub Pages"),e("OutboundLink")],1),t._v("，也是目前星星數相當多的一套。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/2021/july/73e86106012312d69d4779183d4a4abda1ead172a0352936d9abbe9aa8371f2b.png",alt:"",title:"GitHub Action installation sample"}})]),t._v(" "),e("p",[t._v("點開頁面就可以看到範本，不過下面的說明是說需要同時使用 "),e("code",[t._v("actions/checkout")]),t._v(" 來確保部署成功，所以改成修改下面的範例：")]),t._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" GH"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Pages Build and Deploy\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# branches to consider in the event; optional, defaults to all")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2.3.1\n\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install and Build\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n          npm install\n          npm run docs:build")]),t._v("\n\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@4.1.4\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The branch the action should deploy to.")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("folder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The folder the action should deploy.")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br")])]),e("p",[e("em",[t._v("Vuepress")]),t._v(" 產生的靜態檔案要安置的位置需要調整，除此之外都跟範例差不多。")]),t._v(" "),e("p",[t._v("輕鬆愉快地成功了。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/2021/july/bc9bbd9325755da462af43415965e089919c7ab5019d2fd1f1c9354f0abd380e.png",alt:"",title:"GitHub Action Workflows"}})]),t._v(" "),e("p",[t._v("也能看到中間跑了什麼，方便除錯。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/2021/july/9711e219ed00d33f8bebabdd5920222394bce8c5b2f3f4730e1ff57941f4ef38.png",alt:"",title:"GitHub Action Workflow details"}})]),t._v(" "),e("p",[t._v("看來部落格可以繼續放著長草了，可喜可賀、可喜可賀。")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),e("br"),t._v(" "),e("h4",{attrs:{id:"其他參考資料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他參考資料"}},[t._v("#")]),t._v(" 其他參考資料")]),t._v(" "),e("p",[t._v("Heather Harvey (2021/Apr/05). "),e("a",{attrs:{href:"https://github.blog/2021-04-05-behind-githubs-new-authentication-token-formats/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Behind GitHub’s new authentication token formats"),e("OutboundLink")],1),t._v(". GitHub Blog.")]),t._v(" "),e("p",[t._v("Gea-Suan Lin (2020/DEC/13). "),e("a",{attrs:{href:"https://blog.gslin.org/archives/2020/12/13/9878/travis-ci-%E5%81%9C%E6%AD%A2%E6%8F%90%E4%BE%9B%E6%9C%8D%E5%8B%99%E7%B5%A6-open-source-%E5%B0%88%E6%A1%88/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis CI 停止提供服務給 Open Source 專案"),e("OutboundLink")],1),t._v(". Gea-Suan Lin's BLOG.")]),t._v(" "),e("p",[t._v("Jeff Geerling (2020/DEC/05). "),e("a",{attrs:{href:"https://www.jeffgeerling.com/blog/2020/travis-cis-new-pricing-plan-threw-wrench-my-open-source-works",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis CI's new pricing plan threw a wrench in my open source works"),e("OutboundLink")],1),t._v(". jeffgeerling Blog.")])])}),[],!1,null,null,null);a.default=n.exports}}]);