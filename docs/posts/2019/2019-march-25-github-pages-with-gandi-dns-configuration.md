---
title: Github pages佈置靜態網站 + 透過DNS服務換成自訂的網域
lang: zh-TW
date: 2019-03-25
categories: [2019]
tags: [github, gh-pages, DNS]
---


# Github pages佈置靜態網站 + 透過DNS服務換成自訂的網域

##### Date: 2019/March/25

<br>

---


## 60 seconds

#### Github官方教學

[官方教學][ref#quick-start-custom-domain]分為4個步驟:

1. 找DNS商買個好聽的網域.

2. 在DNS上面設定custom domain之前, 先去Github上面把想要的custom domain綁定起來.

3. 到DNS設定該設定的東西 (apex domain / www or custom domain, 端看你的架構. [支援的列表在此][ref#github-supported-custom-domains])
![圖片支援][img#04]

4. 在Github上, 移除並重新加入custom domain. 這時會觸發HTTPS的申請流程. 等流程結束之後就OK了.

<br>

## 60 minutes


#### 以Gandi為例

由於還牽扯到DNS上的設定, 下面細分為更多步驟:

1. Build/deploy static websites

    關於如何在github上架設靜態網站, 網路上已經有相當多的資源了.

    可以參考[官方網站][ref#github-pages]的教學, 或是直接到Google搜尋中文教學.


2. Setup custom domain in Github

    此處有兩種方法:

    ```md
    A. 在repository的根目錄裡放入CNAME檔(裡面寫入要使用的subdomain)即可.

    B. 直接在Settings操作, Custom domain裡填入你的網域並儲存.
    ```

    ![Github pages settings][img#05]

    不論如何, 你的repository 根目錄底下都會多出一個CNAME檔.

3. Config your DNS - A Records

    這邊我們以Gandi為例, 進到DNS Records進行設定.

    Github的[幫助][ref#troubleshooting-dns-configuration-errors]有特別提到, 要先將Github server的ip加進我們的DNS Records裡面

    ![DNS Records in Gandi][img#01]

    值得注意的是, 有些網路上的教學所使用的IP已經不支援了( *207.97.227.245* and *204.232.175.78*)

    *192.30.252.153* 跟 *192.30.252.154* 這兩組則是要自行申請HTTPS憑證.

    推薦使用以下4組IP

    - 185.199.108.153
    - 185.199.109.153
    - 185.199.110.153
    - 185.199.111.153

    原因如[Github Pages 自訂網域免費升級 https][ref#Github Pages Upgrade to https]以及官方的[trouble shooting][ref#troubleshooting-dns-configuration-errors]、[Resolving problems with mixed content][ref#Resolving problems with mixed content]提到的,

    將A record設定成上列的IP以後, 並把repository裡面的assets都改成https之後,

    github會自動幫你申請HTTPS憑證.

4. Config your DNS - CNAME Records
    這邊要特別注意github gh-pages的[網域命名方式][ref#github-domain-chart], 使用前最好先檢查一下

    ![img#07]

    假設是使用個人帳號mew底下的repository生成網站的話, github上的網站會是:

    ```
    mew.github.io/qq-repo
    ```

    如果想設定成:
    ```
    qq.mydomain.io
    ```

    那我們這邊的CNAME就要填入:
    ```
    qq   CNAME   10800  mew.github.io.
    ```

    記得此處**只能**填 *username.github.io* 或是 *orgname.github.io* !!


5. Check DNS entries

    使用dig指令來確認DNS是否有設定成功:

    ```shell
    dig +nostats +nocmd qq.mydomain.io
    ```

    結果應該會出現:

    ```shell
    qq.mydomain.io.     10800       IN      CNAME       mew.github.io.
    mew.github.io.      3600        IN      A           185.199.110.153
    mew.github.io.      3600        IN      A           185.199.109.153
    mew.github.io.      3600        IN      A           185.199.111.153
    mew.github.io.      3600        IN      A           185.199.108.153
    ```

    如果沒有的話, 可能是DNS還在處理, 或是上面設定有誤

6. HTTPS Configuration

    當然, 最後都設定完以後, 不要忘記開啟 **Enforce HTTPS**.

    (這一步驟就是上面提到的HTTPS的申請流程)

    ![img#02]

    ![img#03]


全部設定都成功的話, 就能連進去自訂的網域啦.


#### 轉址失敗/沒有HTTPS

有時候會遇到轉址失敗或沒有憑證的問題, 此時可能是電腦裡的**DNS Cache**還沒更新,
或是瀏覽器**HSTS設定**的問題.

換一台電腦/瀏覽器便能確認是不是這個問題. 通常清除設定之後便能正常運作.



<br>

---


## References

[img#01]: /images/2019/march/23579eb0296ec5ed2863d5243e033262ca1d819eb80f1e26d8fc6388149ede2d.png "dns-record-on-gandi"

[img#02]: /images/2019/march/ac26fb38f709309473f87886486cc6a54c03ccd90c9f8e1c5a3aae4d600138cf.png "Repo actions settings"

[img#03]: /images/2019/march/42f2577e0497d33ba8885398a57a3fbd9055b1dddb72fed6966bab0e1d7bf90c.png "enforce-https-checkbox"

[img#04]: /images/2019/march/7e5e47280ad25ba92a50d687f483d86359fe0b03086240580830e8322c263fbb.png "supported-custom-domain-examples"

[img#05]: /images/2019/march/6b66546475caabaf392941e0715137fd4332f84bd4b756466ab201a05f4dc58c.png "Specify custom domain in GitHub settings"

[img#06]: /images/2019/march/2e3806602fe0a107a28ea734a8196c24bc16f56b50c243a63962d9a0bfc1144f.png "Github settings after everything done."

[img#07]: /images/2019/march/040ba4824faa2afd3fdf972b2b697489c9890c5db2f87dd1f1c9338caad5f7a3.png "Custom domain redirects for GitHub Pages sites"


[ref#quick-start-custom-domain]: https://help.github.com/en/articles/quick-start-setting-up-a-custom-domain "Github help - quick start"

[ref#github-pages]: https://pages.github.com/ "Github pages official webstie"

[ref#github-domain-chart]: https://help.github.com/en/articles/custom-domain-redirects-for-github-pages-sites "Custom domain redirects for GitHub Pages sites"

[ref#github-supported-custom-domains]: https://help.github.com/en/articles/about-supported-custom-domains "About supported custom domains"

[ref#troubleshooting-custom-domains]: https://help.github.com/en/articles/troubleshooting-custom-domains "Troubleshooting custom domains"

[ref#troubleshooting-dns-configuration-errors]: https://help.github.com/en/articles/troubleshooting-custom-domains#dns-configuration-errors "DNS configuration errors"

[ref#Github Pages Upgrade to https]: https://wcc723.github.io/design/2018/07/27/gh-pages-https/ "Github Pages 自訂網域免費升級 https"

[ref#Resolving problems with mixed content]: https://help.github.com/en/articles/securing-your-github-pages-site-with-https#resolving-problems-with-mixed-content "Resolving problems with mixed content"


<br>

#### 其他參考資料

卡斯伯. (2018). [Github Pages 自訂網域免費升級 https](https://wcc723.github.io/design/2018/07/27/gh-pages-https/). Casper Blog.

rynop. (2019, January 23). [Custom domain for GitHub project pages](https://stackoverflow.com/questions/9082499/custom-domain-for-github-project-pages) StackOverflow

Github. [Quick start: Setting up a custom domain](https://help.github.com/en/articles/quick-start-setting-up-a-custom-domain) Github Help


Veru. (2017). [生成 GitHub Pages + GANDI 域名設定](http://f2e-veru.com/%E5%B7%A5%E5%85%B7%E5%88%86%E4%BA%AB/%E7%94%9F%E6%88%90GitHub%20Pages+GANDI%E5%9F%9F%E5%90%8D%E8%A8%AD%E5%AE%9A/) Blog