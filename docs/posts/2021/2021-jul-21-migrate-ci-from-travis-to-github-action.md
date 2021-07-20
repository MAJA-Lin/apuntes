---
title: Migrate Continuous Integration From Travis CI to GitHub Action
lang: zh-TW
date: 2021-07-21
categories: [2021]
tags: [Web, CI, Travis, GitHub Action]
---


# Migrate Continuous Integration From Travis CI to GitHub Action

##### Date: 2021/July/21

<br>

---

在這個筆記荒廢了很長一段時間以後，看著 *GitHub dependabot* 滿滿的 *Pull Request* 通知，

深深覺得該好好更新一下相依套件了，才發現原本透過 Travis 串好的 CI 壞掉啦。

![][img#01]

原本以為是更新套件的問題，不過詳細看了錯誤訊息是授權失敗。

![][img#02]

看了字面上的意思，以及想到 GitHub 在今年5月份的時候有[對 Authentication token 進行更新][ref#01]，
於是我也跑去刷新了一下 *Personal Access Token* (確保 Travis CI 有權限可以部署)，結果還是失敗......

後來發現原來是因應之前的[計費模式調整][ref#02]，要先去後台選擇好方案後才能繼續跑部署腳本。

原本的設定頁面大大的紅字沒有截到圖，不過基本上就是要你選方案：

![][img#03]

要注意的是點數用完就沒了，不會再生，只能透過付費取得。

![][img#04]

調整到這裡，部落格的自動發版復活了，但我也開始想將 CI 轉換到曾在公司使用的 GitHub Action 上了。

![][img#05]



相較於 Travis 的終生額度制， GitHub Action 目前採用[每月分鐘數的額度][ref#03]，新的一個月會刷新額度看起來比較誘人。 ~~當然微軟爸爸比較罩也是個原因。~~

![][img#06]

事不宜遲，那就馬上做調整吧。首先第一步是先把Travis CI關掉XD
再來是選擇合適的GitHub Action並修改設定檔，我是使用 [Deploy to GitHub Pages][ref#04]，也是目前星星數相當多的一套。

![][img#07]

點開頁面就可以看到範本，不過下面的說明是說需要同時使用 `actions/checkout` 來確保部署成功，所以改成修改下面的範例：

```yaml
name: GH-Pages Build and Deploy
on:
  push:
    # branches to consider in the event; optional, defaults to all
    branches:
      - master

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2.3.1

      - name: Install and Build
        run: |
          npm install
          npm run docs:build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          branch: gh-pages # The branch the action should deploy to.
          folder: docs/.vuepress/dist # The folder the action should deploy.
```

*Vuepress* 產生的靜態檔案要安置的位置需要調整，除此之外都跟範例差不多。

輕鬆愉快地成功了。

![][img#08]

也能看到中間跑了什麼，方便除錯。

![][img#09]

看來部落格可以繼續放著長草了，可喜可賀、可喜可賀。

---


## References

[img#01]: /images/2021/july/b9e91ac7cb1c9baf46e78a81ad14e748303d13239b58b76ee71fb1de8db89563.png "Full of pull requests made by dependabot"

[img#02]: /images/2021/july/d3092969eb40e1a257c2717e26d3a01cc143ac727cf548334814d9e8c3711438.jpg "Failed builds on travis-ci.com"

[img#03]: /images/2021/july/d9ade7f64ff681cae9282cd0eb6c8dda0c69bd0133a0621faa5a5524f986f3ad.png "Monthly Plans on Travis CI"

[img#04]: /images/2021/july/5bc21b278a08ae2e9575816aa7f278f2215a698f0e57194471efc85588358bf2.png "Free Plan offers 10,000 credits which will not be replenished automatically. Pay amigo, pay."

[img#05]: /images/2021/july/359c3cb9301f2ccfcf6e3bdfc1c519f5b305fda39d6aedfc2b5c2673639f73f9.png "Successful build on Travis CI"

[img#06]: /images/2021/july/eee487c7cb18a105705ff7e1457eb79e91123f05f45bdf33f8937250fa962611.png "GitHub Action plan comparisons"

[img#07]: /images/2021/july/73e86106012312d69d4779183d4a4abda1ead172a0352936d9abbe9aa8371f2b.png "GitHub Action installation sample"

[img#08]: /images/2021/july/bc9bbd9325755da462af43415965e089919c7ab5019d2fd1f1c9354f0abd380e.png "GitHub Action Workflows"

[img#09]: /images/2021/july/9711e219ed00d33f8bebabdd5920222394bce8c5b2f3f4730e1ff57941f4ef38.png "GitHub Action Workflow details"



[ref#01]: https://github.blog/2021-04-05-behind-githubs-new-authentication-token-formats/ "Behind GitHub’s new authentication token formats"

[ref#02]: https://blog.travis-ci.com/2020-11-02-travis-ci-new-billing "The new pricing model for travis-ci.com"

[ref#03]: https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions "About billing for GitHub Actions"

[ref#04]: https://github.com/marketplace/actions/deploy-to-github-pages "Deploy to GitHub Pages"


<br>

#### 其他參考資料

Heather Harvey (2021/Apr/05). [Behind GitHub’s new authentication token formats](https://github.blog/2021-04-05-behind-githubs-new-authentication-token-formats/). GitHub Blog.

Gea-Suan Lin (2020/DEC/13). [Travis CI 停止提供服務給 Open Source 專案](https://blog.gslin.org/archives/2020/12/13/9878/travis-ci-%E5%81%9C%E6%AD%A2%E6%8F%90%E4%BE%9B%E6%9C%8D%E5%8B%99%E7%B5%A6-open-source-%E5%B0%88%E6%A1%88/). Gea-Suan Lin's BLOG.

Jeff Geerling (2020/DEC/05). [Travis CI's new pricing plan threw a wrench in my open source works](https://www.jeffgeerling.com/blog/2020/travis-cis-new-pricing-plan-threw-wrench-my-open-source-works). jeffgeerling Blog.
