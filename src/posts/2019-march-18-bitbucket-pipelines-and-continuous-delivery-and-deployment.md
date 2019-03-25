# 使用Bitbucket Pipelines 來實做Continuous Delivery / Deployment

##### Date: 2019/March/18

環境 & 背景介紹: 
Bitbucket, AWS EC2 (Ubuntu), Laravel project (with dotenv file)

我們的程式佈署在EC2上, 可是每次做完pull request, 還要自己手動連進機器裡面佈署最新的程式碼.

手動佈署的工作實在太過無趣, 是不是能用什麼工具來節省寶貴的時間呢?

---

## 60 seconds


#### 簡單暴力解 (bitbucket pipelines & ssh command)

我們需要某種方法, 能讓Bitbucket接收到push的時候, 命令AWS EC2 server自動去執行git pull
(在這個範例是git fetch + git reset), 這樣子便達到了最簡單的自動佈署了!
(保留dot env檔案不進版控, 套件/需要編譯的檔案做最低限度的安裝/更新)


<br>
Step 1. Set SSH keys & Known hosts


![Step 1. Set SSH keys & Known hosts][img#01]

設定SSH 鑰匙資訊 - Settings > [SSH keys][ref#bitbucket-use-ssh-in-pipelines] > 將公鑰私鑰填入適當的位置, 並把server address加進
Known hosts裡面.

<br>
Step 2.

![Step 2. Set AWS security group][img#02]

通常AWS EC2上會設定security group, 我們會需要將[Bitbucket IP list][ref#bitbucket-ip-list]加入清單當中(用以辨認來自Bitbucket的SSH請求)


<br>
Step 3.
在**bitbucket-pipelines.yml**裡, 要執行CD的地方加上這行

```shell
$ ssh user@your_host "cd /your/project/path && git fetch - all && git reset - hard origin/your_branch"
```

它會自動到你要佈署的資料夾裡做類似 **git force pull** 的動作, 這樣便達到了自動佈署的目的.

當然, 如果有安裝/更新相依性套件的需求, 也能直接加在上面ssh的指令裡, 或是透過 *git hook* 觸發


<br>

---

#### 不使用第三方版控工具 (git bare repository & worktree on deployment server)

<br>
如果是要直接將最新的程式推上目標伺服器的話, 也可以使用 **git bare repository**,

配合git hook一樣能達到簡單的自動佈署 (原文請參照[這篇][ref#gist-simple-automated-git-deployment])


首先我們先在要佈署的伺服器建立**兩個**資料夾, 一個是*deploy-folder*, 另一個則是*bare-repository-folder*

```shell
$ mkdir ~/deploy-folder
$ git init --bare ~/project.git
```

再來是設定**git hook**, 這裡我們使用的是**post-receive**

```shell
#!/bin/bash
TARGET="/home/webuser/deploy-folder"
GIT_DIR="/home/webuser/project.git"
BRANCH="master"

while read oldrev newrev ref
do
    # only checking out the master (or whatever branch you would like to deploy)
    if [ $ref = refs/heads/$BRANCH ];  # 這邊在我們的機器上用雙[]會報錯, 因此在這裡改為單[]
    then
        echo "Ref $ref received. Deploying ${BRANCH} branch to production..."
        git --work-tree=$TARGET --git-dir=$GIT_DIR checkout -f
    else
        echo "Ref $ref received. Doing nothing: only the ${BRANCH} branch may be deployed on this server."
    fi
done
```

(記得要把執行的權限打開! git hook會使用*git*這個使用者)

接著在你自己的本地端加上要佈署目標的資訊

```shell
$ cd ~/path/to/working-copy/
$ git remote add production demo@yourserver.com:project.git
```

最後, push讓伺服器觸發deploy的**git hook**即可.

<br>

這個方法是建立一個[裸倉庫(bare repository)][ref#git-bare-repository], 並指定它的[worktree][ref#git-worktree].

當本地端的使用者推送資料到伺服器的時候,
git hook會將這個裸倉庫worktree的資料夾內的程式, 強制指到最新的版本.

所以如果有編譯/安裝相依套件的需求時, 記得要加上執行相關動作的指令.


<br>

## 60 minutes


#### 開發Bitbucket pipelines 遇到的問題


- Branch workflow

![Bitbucket branch workflow][img#03]

在[pipelines][ref#branch-workflows]裡, 可以針對各個commit / branch設定不同的工作.

需要注意的是, 此處的default/branch是類似if-else條件, 也就是說符合branch條件以後是不會去執行default的內容的.

<br>

- Parallel steps

Pipelines可以並行處理腳本, 不過有最多同時執行10筆的上限.

另外, 產生檔案發生衝突時會以最後一個parallel step為準.

[詳細資訊][ref#pipelines parallel steps]

<br>

#### CD with git bare repository and git hook

[洛桑扎巴 - 使用 Git Hooks 实现自动项目部署 (http://notes.11ten.net/apps-auto-deploy-with-git.html)][ref#use git hooks for CD]

[gist - icyleaf/post-receive.sh][ref#post-receive-to-pull]


<br>

其實一開始我的作法如下圖所示

![original flow][img#04]

透過pipeline, git push到server上的裸倉庫後, 再觸發post-receive,
讓deployment資料夾去抓取最新的程式.

不過會遇到git hook沒辦法認得deployment資料夾git 狀態的問題.

這一篇文章的作法有提到使用:

```shell
env -i git pull
```

來替代原本的指令

```
git pulll
```

或許可以解決這個問題.

<br>

參考: [Why is it better to use “#!/usr/bin/env NAME” instead of “#!/path/to/NAME” as my shebang?][ref#why env -i git pull]


---

## References ##

[ref#bitbucket-ip-list]: https://confluence.atlassian.com/bitbucket/what-are-the-bitbucket-cloud-ip-addresses-i-should-use-to-configure-my-corporate-firewall-343343385.html "What are the Bitbucket Cloud IP addresses I should use to configure my corporate firewall?"

[ref#bitbucket-use-ssh-in-pipelines]: https://confluence.atlassian.com/bitbucket/use-ssh-keys-in-bitbucket-pipelines-847452940.html "Use SSH keys in Bitbucket Pipelines"

[ref#gist-simple-automated-git-deployment]: https://gist.github.com/noelboss/3fe13927025b89757f8fb12e9066f2fa "Simple automated GIT Deployment using GIT Hooks"

[ref#git-bare-repository]: https://git-scm.com/book/zh-tw/v1/%E4%BC%BA%E6%9C%8D%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E5%9C%A8%E4%BC%BA%E6%9C%8D%E5%99%A8%E4%B8%8A%E9%83%A8%E7%BD%B2-Git ".2 伺服器上的 Git - 在伺服器上部署 Git"

[ref#git-worktree]: https://git-scm.com/docs/git-worktree "git-worktree"

[ref#branch-workflows]: https://confluence.atlassian.com/bitbucket/branch-workflows-856697482.html "pipelines branch workflow"

[ref#pipelines parallel steps]: https://confluence.atlassian.com/bitbucket/parallel-steps-946606807.html

[ref#use git hooks for CD]: http://notes.11ten.net/apps-auto-deploy-with-git.html "洛桑扎巴 - 使用 Git Hooks 实现自动项目部署"

[ref#post-receive-to-pull]: https://gist.github.com/icyleaf/566767 "gist - icyleaf/post-receive.sh"

[ref#why env -i git pull]: https://unix.stackexchange.com/questions/29608/why-is-it-better-to-use-usr-bin-env-name-instead-of-path-to-name-as-my "Why is it better to use “#!/usr/bin/env NAME” instead of “#!/path/to/NAME” as my shebang?"


[img#01]: /public/images/2019-march/d77a8aee8ccba2c72ae554233be02dd55ca97262e6a1abeae6ba9166aba5880c.png "Bitbucket ssh settings"

[img#02]: /public/images/2019-march/04d1143f49a7d8920120e93ba7848304b4d1430dcbcd5a5e30e91c53fbbedc84.png "AWS Security group"

[img#03]: /public/images/2019-march/b6a7c6a59e99f93dc619db7e940c51df219a2126ac52e3bd07c888fb557b9987.gif "Bitbucket pipeline branch workflow"

[img#04]: /public/images/2019-march/2fddedba40b507de68983700b62e5ed19686ab808a6c8247d86aa01afca3f2f5.jpg "cd-with-bare-repository-git-hook.jpg"

#### 其他參考資料

[Bitbucket Support - Build, test, and deploy with Pipelines](https://confluence.atlassian.com/bitbucket/build-test-and-deploy-with-pipelines-792496469.html)

[Bitbucket Support - Bitbucket Deployments](https://confluence.atlassian.com/bitbucket/bitbucket-deployments-940695276.html)

[Bitbucket Support - Run pipelines manually](https://confluence.atlassian.com/bitbucket/run-pipelines-manually-861242583.html)
