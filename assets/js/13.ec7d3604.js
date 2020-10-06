(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{367:function(e,t,s){"use strict";s.r(t);var a=s(25),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"使用bitbucket-pipelines-來實做continuous-delivery-deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用bitbucket-pipelines-來實做continuous-delivery-deployment"}},[e._v("#")]),e._v(" 使用Bitbucket Pipelines 來實做Continuous Delivery / Deployment")]),e._v(" "),s("h5",{attrs:{id:"date-2019-march-18"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#date-2019-march-18"}},[e._v("#")]),e._v(" Date: 2019/March/18")]),e._v(" "),s("p",[e._v("環境 & 背景介紹: "),s("br"),e._v("\nBitbucket, AWS EC2 (Ubuntu), Laravel project (with dotenv file)")]),e._v(" "),s("p",[e._v("我們的程式佈署在EC2上, 可是每次做完pull request, 還要自己手動連進機器裡面佈署最新的程式碼.")]),e._v(" "),s("p",[e._v("手動佈署的工作實在太過無趣, 是不是能用什麼工具來節省寶貴的時間呢?")]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"_60-seconds"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_60-seconds"}},[e._v("#")]),e._v(" 60 seconds")]),e._v(" "),s("h4",{attrs:{id:"簡單暴力解-bitbucket-pipelines-ssh-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#簡單暴力解-bitbucket-pipelines-ssh-command"}},[e._v("#")]),e._v(" 簡單暴力解 (bitbucket pipelines & ssh command)")]),e._v(" "),s("p",[e._v("我們需要某種方法, 能讓Bitbucket接收到push的時候, 命令AWS EC2 server自動去執行git pull"),s("br"),e._v("\n(在這個範例是git fetch + git reset), 這樣子便達到了最簡單的自動佈署了!"),s("br"),e._v("\n(保留dot env檔案不進版控, 套件/需要編譯的檔案做最低限度的安裝/更新)")]),e._v(" "),s("br"),e._v("\nStep 1. Set SSH keys & Known hosts\n"),s("p",[s("img",{attrs:{src:"/images/2019/march/d77a8aee8ccba2c72ae554233be02dd55ca97262e6a1abeae6ba9166aba5880c.png",alt:"Step 1. Set SSH keys & Known hosts",title:"Bitbucket ssh settings"}})]),e._v(" "),s("p",[e._v("設定SSH 鑰匙資訊 - Settings > "),s("a",{attrs:{href:"https://confluence.atlassian.com/bitbucket/use-ssh-keys-in-bitbucket-pipelines-847452940.html",title:"Use SSH keys in Bitbucket Pipelines",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSH keys"),s("OutboundLink")],1),e._v(" > 將公鑰私鑰填入適當的位置, 並把server address加進"),s("br"),e._v("\nKnown hosts裡面.")]),e._v(" "),s("br"),e._v("\nStep 2.\n"),s("p",[s("img",{attrs:{src:"/images/2019/march/04d1143f49a7d8920120e93ba7848304b4d1430dcbcd5a5e30e91c53fbbedc84.png",alt:"Step 2. Set AWS security group",title:"AWS Security group"}})]),e._v(" "),s("p",[e._v("通常AWS EC2上會設定security group, 我們會需要將"),s("a",{attrs:{href:"https://confluence.atlassian.com/bitbucket/what-are-the-bitbucket-cloud-ip-addresses-i-should-use-to-configure-my-corporate-firewall-343343385.html",title:"What are the Bitbucket Cloud IP addresses I should use to configure my corporate firewall?",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bitbucket IP list"),s("OutboundLink")],1),e._v("加入清單當中(用以辨認來自Bitbucket的SSH請求)")]),e._v(" "),s("br"),e._v("\nStep 3.\n在**bitbucket-pipelines.yml**裡, 要執行CD的地方加上這行\n"),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" user@your_host "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cd /your/project/path && git fetch - all && git reset - hard origin/your_branch"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("它會自動到你要佈署的資料夾裡做類似 "),s("strong",[e._v("git force pull")]),e._v(" 的動作, 這樣便達到了自動佈署的目的.")]),e._v(" "),s("p",[e._v("當然, 如果有安裝/更新相依性套件的需求, 也能直接加在上面ssh的指令裡, 或是透過 "),s("em",[e._v("git hook")]),e._v(" 觸發")]),e._v(" "),s("br"),e._v(" "),s("hr"),e._v(" "),s("h4",{attrs:{id:"不使用第三方版控工具-git-bare-repository-worktree-on-deployment-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不使用第三方版控工具-git-bare-repository-worktree-on-deployment-server"}},[e._v("#")]),e._v(" 不使用第三方版控工具 (git bare repository & worktree on deployment server)")]),e._v(" "),s("br"),e._v("\n如果是要直接將最新的程式推上目標伺服器的話, 也可以使用 **git bare repository**,\n"),s("p",[e._v("配合git hook一樣能達到簡單的自動佈署 (原文請參照"),s("a",{attrs:{href:"https://gist.github.com/noelboss/3fe13927025b89757f8fb12e9066f2fa",title:"Simple automated GIT Deployment using GIT Hooks",target:"_blank",rel:"noopener noreferrer"}},[e._v("這篇"),s("OutboundLink")],1),e._v(")")]),e._v(" "),s("p",[e._v("首先我們先在要佈署的伺服器建立"),s("strong",[e._v("兩個")]),e._v("資料夾, 一個是"),s("em",[e._v("deploy-folder")]),e._v(", 另一個則是"),s("em",[e._v("bare-repository-folder")])]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" ~/deploy-folder\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" init --bare ~/project.git\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("再來是設定"),s("strong",[e._v("git hook")]),e._v(", 這裡我們使用的是"),s("strong",[e._v("post-receive")])]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/bin/bash")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("TARGET")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/home/webuser/deploy-folder"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GIT_DIR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/home/webuser/project.git"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BRANCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"master"')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("while")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("read")]),e._v(" oldrev newrev ref\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# only checking out the master (or whatever branch you would like to deploy)")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$ref")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" refs/heads/"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BRANCH")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 這邊在我們的機器上用雙[]會報錯, 因此在這裡改為單[]")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("then")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Ref '),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$ref")]),e._v(" received. Deploying "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${BRANCH}")]),e._v(' branch to production..."')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" --work-tree"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$TARGET")]),e._v(" --git-dir"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$GIT_DIR")]),e._v(" checkout -f\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("else")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Ref '),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$ref")]),e._v(" received. Doing nothing: only the "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${BRANCH}")]),e._v(' branch may be deployed on this server."')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("fi")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br")])]),s("p",[e._v("(記得要把執行的權限打開! git hook會使用"),s("em",[e._v("git")]),e._v("這個使用者)")]),e._v(" "),s("p",[e._v("接著在你自己的本地端加上要佈署目標的資訊")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/path/to/working-copy/\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" production demo@yourserver.com:project.git\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("最後, push讓伺服器觸發deploy的"),s("strong",[e._v("git hook")]),e._v("即可.")]),e._v(" "),s("br"),e._v(" "),s("p",[e._v("這個方法是建立一個"),s("a",{attrs:{href:"https://git-scm.com/book/zh-tw/v1/%E4%BC%BA%E6%9C%8D%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E5%9C%A8%E4%BC%BA%E6%9C%8D%E5%99%A8%E4%B8%8A%E9%83%A8%E7%BD%B2-Git",title:".2 伺服器上的 Git - 在伺服器上部署 Git",target:"_blank",rel:"noopener noreferrer"}},[e._v("裸倉庫(bare repository)"),s("OutboundLink")],1),e._v(", 並指定它的"),s("a",{attrs:{href:"https://git-scm.com/docs/git-worktree",title:"git-worktree",target:"_blank",rel:"noopener noreferrer"}},[e._v("worktree"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("當本地端的使用者推送資料到伺服器的時候,"),s("br"),e._v("\ngit hook會將這個裸倉庫worktree的資料夾內的程式, 強制指到最新的版本.")]),e._v(" "),s("p",[e._v("所以如果有編譯/安裝相依套件的需求時, 記得要加上執行相關動作的指令.")]),e._v(" "),s("br"),e._v(" "),s("h2",{attrs:{id:"_60-minutes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_60-minutes"}},[e._v("#")]),e._v(" 60 minutes")]),e._v(" "),s("h4",{attrs:{id:"開發bitbucket-pipelines-遇到的問題"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#開發bitbucket-pipelines-遇到的問題"}},[e._v("#")]),e._v(" 開發Bitbucket pipelines 遇到的問題")]),e._v(" "),s("ul",[s("li",[e._v("Branch workflow")])]),e._v(" "),s("p",[s("img",{attrs:{src:"/images/2019/march/b6a7c6a59e99f93dc619db7e940c51df219a2126ac52e3bd07c888fb557b9987.gif",alt:"Bitbucket branch workflow",title:"Bitbucket pipeline branch workflow"}})]),e._v(" "),s("p",[e._v("在"),s("a",{attrs:{href:"https://confluence.atlassian.com/bitbucket/branch-workflows-856697482.html",title:"pipelines branch workflow",target:"_blank",rel:"noopener noreferrer"}},[e._v("pipelines"),s("OutboundLink")],1),e._v("裡, 可以針對各個commit / branch設定不同的工作.")]),e._v(" "),s("p",[e._v("需要注意的是, 此處的default/branch是類似if-else條件, 也就是說符合branch條件以後是不會去執行default的內容的.")]),e._v(" "),s("br"),e._v(" "),s("ul",[s("li",[e._v("Parallel steps")])]),e._v(" "),s("p",[e._v("Pipelines可以並行處理腳本, 不過有最多同時執行10筆的上限.")]),e._v(" "),s("p",[e._v("另外, 產生檔案發生衝突時會以最後一個parallel step為準.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://confluence.atlassian.com/bitbucket/parallel-steps-946606807.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("詳細資訊"),s("OutboundLink")],1)]),e._v(" "),s("br"),e._v(" "),s("h4",{attrs:{id:"cd-with-git-bare-repository-and-git-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cd-with-git-bare-repository-and-git-hook"}},[e._v("#")]),e._v(" CD with git bare repository and git hook")]),e._v(" "),s("p",[s("a",{attrs:{href:"http://notes.11ten.net/apps-auto-deploy-with-git.html",title:"洛桑扎巴 - 使用 Git Hooks 实现自动项目部署",target:"_blank",rel:"noopener noreferrer"}},[e._v("洛桑扎巴 - 使用 Git Hooks 实现自动项目部署 (http://notes.11ten.net/apps-auto-deploy-with-git.html)"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://gist.github.com/icyleaf/566767",title:"gist - icyleaf/post-receive.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("gist - icyleaf/post-receive.sh"),s("OutboundLink")],1)]),e._v(" "),s("br"),e._v(" "),s("p",[e._v("其實一開始我的作法如下圖所示")]),e._v(" "),s("p",[s("img",{attrs:{src:"/images/2019/march/2fddedba40b507de68983700b62e5ed19686ab808a6c8247d86aa01afca3f2f5.jpg",alt:"original flow",title:"cd-with-bare-repository-git-hook.jpg"}})]),e._v(" "),s("p",[e._v("透過pipeline, git push到server上的裸倉庫後, 再觸發post-receive,"),s("br"),e._v("\n讓deployment資料夾去抓取最新的程式.")]),e._v(" "),s("p",[e._v("不過會遇到git hook沒辦法認得deployment資料夾git 狀態的問題.")]),e._v(" "),s("p",[e._v("這一篇文章的作法有提到使用:")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("env")]),e._v(" -i "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("來替代原本的指令")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git pulll\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("或許可以解決這個問題.")]),e._v(" "),s("br"),e._v(" "),s("p",[e._v("參考: "),s("a",{attrs:{href:"https://unix.stackexchange.com/questions/29608/why-is-it-better-to-use-usr-bin-env-name-instead-of-path-to-name-as-my",title:"Why is it better to use “#!/usr/bin/env NAME” instead of “#!/path/to/NAME” as my shebang?",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why is it better to use “#!/usr/bin/env NAME” instead of “#!/path/to/NAME” as my shebang?"),s("OutboundLink")],1)]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),s("h4",{attrs:{id:"其他參考資料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他參考資料"}},[e._v("#")]),e._v(" 其他參考資料")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://confluence.atlassian.com/bitbucket/build-test-and-deploy-with-pipelines-792496469.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bitbucket Support - Build, test, and deploy with Pipelines"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://confluence.atlassian.com/bitbucket/bitbucket-deployments-940695276.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bitbucket Support - Bitbucket Deployments"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://confluence.atlassian.com/bitbucket/run-pipelines-manually-861242583.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bitbucket Support - Run pipelines manually"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);