---
counter: True
---

# 校网连接指南

!!! note "提示"
    你收到浙大通知书的那一刻，你 ~~可能会迫不及待去看浙大的官网~~ ， 然后就看见了...  
    
    ??? general "校官网"
        === "北大"
            ![](https://cdn.tonycrane.cc/turing2022/images/pku.png)
        === "清华"
            ![](https://cdn.tonycrane.cc/turing2022/images/thu.png)
        === "南大"
            ![](https://cdn.tonycrane.cc/turing2022/images/nju.png)
        === "浙大"
            ![](https://cdn.tonycrane.cc/turing2022/images/zju.png)

    浙大这个官网...是不是有那么<span class = "heimu" title = "你知道的太多了">亿点寒碜</span>？  
    没事，我来告诉你，除了网站，浙大的网络连接也很寒碜，我们简称 **ZJU 网烂** (<span class = "heimu" title = "你没看到">ZJUWLAN 谐音梗</span>)。  
    尽管烂，但是说实话，~~校园网还是挺难用的（×）~~。
    下面介绍几种常见的上校园网的方法。  

    **但是注意 在看以下内容之前建议先浏览 Q&A 中 “[Q：如何办理校园网络？如何选择校园网络套餐？](/qa/#q_9)” 部分内容。**  
    
    还是一样啦，不确保下面的内容完全正确。如果有谬误欢迎指正呐~

## 利用校园无线网

学校内 ~~全覆盖~~ 的无线信号有 ZJUWLAN、ZJUWLAN-Secure、ZJUWLAN-NEW。这三个可以分成两大类：

### 网页验证 ZJUWLAN、ZJUWLAN-NEW

这两种无线网是开放网络，连接进去之后会一般会 自动 弹出一个验证网页 https://net3.zju.edu.cn，通过输入浙大通行证 <font class = "heimu" title = "饱受其苦" size = 1>其实我也不知道浙大统一认证认证了个毛线，我改了一个密码之后现在要看情况使用密码</font> 进行登录。之后即可使用校园网资源

??? general "校园网认证界面"  
    ![](https://cdn.tonycrane.cc/turing2022/images/net3_zju.png)  

### 通过连接时验证 ZJUWLAN-Secure

这个所谓的安全，应该是指这个网络使用了 802.1x EAP 的加密类型。下面分两个主流平台介绍连接方式：

=== "Windows"  
    在 Windows 下，点击桌面右下方菜单栏的无线网图标，选择 ZJUWLAN-Secure 进行连接，之后像网页认证一样输入浙大通行证即可
    
    ??? general "操作步骤"  
        === "Step 1"  
            ![](https://cdn.tonycrane.cc/turing2022/images/ZJUWLAN-Secure-Windows-0.png)  
        === "Step 2"  
            ![](https://cdn.tonycrane.cc/turing2022/images/ZJUWLAN-Secure-Windows-00.png)  
        === "Step 3"  
            ![](https://cdn.tonycrane.cc/turing2022/images/ZJUWLAN-Secure-Windows-1.png)  
        === "Step 4"  
            ![](https://cdn.tonycrane.cc/turing2022/images/ZJUWLAN-Secure-Windows-2.png)  

=== "Android"  
    由于我实在没有 iPhone 所以只能以安卓做演示。iPhone 用户可移步百度。本当にすみません！接下来以 Magic UI 6.0 进行演示，其他操作系统大同小异 <font class = "heimu" title = "大概...?" size = 1>大概...?</font>

    ??? general "操作步骤"  
        === "Step 1"  
            进入 WLAN 连接页面，选择 ZJUWLAN-Secure  
            ![](https://cdn.tonycrane.cc/turing2022/images/ZJUWLAN-Secure-Android-1.jpg)  

        === "Step 2"  
            阶段 2 身份认证和 CA 证书均选择 **不认证**，输入用户名和密码，点击连接即可  
            ![](https://cdn.tonycrane.cc/turing2022/images/ZJUWLAN-Secure-Android-2.jpg)  

## 有线连接  

宿舍里面有一个网口，用网线怼到电脑上，就可以开始有线连接的奇妙之旅了（×）  
由于实在比较麻烦，且可能影响其他的 VPN，所以不是特别推荐。

![](https://cdn.tonycrane.cc/turing2022/images/buyao.png)  

在这里简单放些 Windows 10 上面的过程，按需求使用。

??? general "操作步骤"  
    === "Step 1"  
        如图所示创建 VPN 连接。其中 用户名 和 密码 可以不写，等 Step 4 连接的时候再输入  
        ![](https://cdn.tonycrane.cc/turing2022/images/line-1.png)  
        ![](https://cdn.tonycrane.cc/turing2022/images/line-2.png)  

    === "Step 2"  
        修改连接适配器的设置，如图:  
        ![](https://cdn.tonycrane.cc/turing2022/images/line-3.png)  
        ![](https://cdn.tonycrane.cc/turing2022/images/line-4.png)  
        ![](https://cdn.tonycrane.cc/turing2022/images/line-5.png)  

    === "Step 3"  
        按 Win + R 输入 regedit 打开注册表（也可以通过搜索打开），到下图红色框起来的路径，按下面的内容修改注册表值:  
        ![](https://cdn.tonycrane.cc/turing2022/images/line-6.png)  
        ![](https://cdn.tonycrane.cc/turing2022/images/line-7.png)  
        ![](https://cdn.tonycrane.cc/turing2022/images/line-8.png)  
        ![](https://cdn.tonycrane.cc/turing2022/images/line-9.png)  
        ![](https://cdn.tonycrane.cc/turing2022/images/line-10.png)  
        ![](https://cdn.tonycrane.cc/turing2022/images/line-11.png)  

    === "Step 4"  
        重启电脑，之后进行连接：  
        ![](https://cdn.tonycrane.cc/turing2022/images/line-12.png)  
        ![](https://cdn.tonycrane.cc/turing2022/images/line-13.png)  
    
老学长写的有线连接指南：

<div class="card file-block" markdown="1">
<div class="file-icon"><img src="https://cdn.tonycrane.cc/turing2022/images/pdf.svg" style="height: 3em;"></div>
<div class="file-body">
<div class="file-title">如何在寝室用有线上网呢</div>
<div class="file-meta">355 KB / 6 P</div>
</div>
<a class="down-button" target="_blank" href="https://cdn.tonycrane.cc/turing2022/files/%E5%A6%82%E4%BD%95%E5%9C%A8%E5%AF%9D%E5%AE%A4%E7%94%A8%E6%9C%89%E7%BA%BF%E4%B8%8A%E7%BD%91%E5%91%A2.pdf" markdown="1">:fontawesome-solid-download: 下载</a>
</div>


## VPN 连接校网  

对于不在校内但是想要访问校内资源的情况，可以采用学校提供的 VPN 服务。

### RVPN  

浙大提供的使用 rvpn 的方法是通过 EasyConnect 软件进行连接。但是这个软件很脏、比较“流氓”，所以不建议使用。

如果要使用 rvpn 来连接校网的话，可以参考 [:material-github: SoraShu/easyconn-socks5-for-HITsz](https://github.com/SoraShu/easyconn-socks5-for-HITsz) 来搭建一个隔离的 EasyConnect 环境提供代理服务（亲测可用）。

此外，还可以使用今年新开发的一个项目 ZJU Connect（[:material-github: Mythologyli/zju-connect](https://github.com/Mythologyli/zju-connect)）。这个软件在 Windows 系统还有方便操作、比较适合小白的 GUI 版本（[:material-github: Mythologyli/zju-connect-for-Windows](https://github.com/Mythologyli/zju-connect-for-Windows)），可以连接校内的 SSH 与远程桌面，以及提供了 ZJU rule 等功能，非常推荐使用。附上[开发者在 CC98 上发的帖子](https://www.cc98.org/topic/5521873)（~~虽然没有 rvpn 大概也看不了~~）。

### WebVPN  

通过 [webvpn.zju.edu.cn](https://webvpn.zju.edu.cn) 来访问  。

## 一些说明  

### 费用  

校园网的费用分为：

- 10 元/月
- 30 元/月
- 50 元/月

通过 ~~办理校园卡~~ 的方式可以免费从 低价位的 升级到 高一级价位的套餐。资费的详情大致如下：  

|费用(元/月)|带宽(Mbps)|
|----|----|
|10|10|
|30|50|
|50|100|

<b>但是</b> 10 元/月的套餐连接 ZJUWLAN-Secure、ZJUWLAN-NEW 可以 ~~白嫖~~ 30 Mbps 的带宽，~~可以满足一般来说的需求了~~。   

### 关于网络稳定性  

ZJUWLAN-Secure 不算特别稳定，有时候会断连。ZJUWLAN-NEW 覆盖面不算广。有线连接极其不稳定。  

### 关于网络运营商  

这个不好说，有时候是 移动 有时候是 电信。如果使用 Parsec 进行远程桌面连接的话注意 移动 网络无法使用 Parsec。  

### 关于 IPv6  

除了 ZJUWLAN 没有 IPv6 地址之外，另外 两个无线网络连接 和 有线连接 均会分配 IPv6 地址。有需求的话可以注意一下。  
此外，有线上网的时候 IPv6 带宽不限速，大概有 300 ~ 500 Mbps，可以拿来用一些稀奇古怪的方法利用这带宽（×）。  

### 关于路由器上网  

宿舍内的网线接口可以拿来给路由器上网。上面教程内时常出现 yusuxuans(_5G) 就是我的路由器（逃）。  
如果没有什么特别的需求，配置不算特别困难。参考 CC98（校内论坛，需要用内网访问）上的[帖子](https://www.cc98.org/topic/5213173)应该可以完成。