# 关于学校校网的连接

!!! note "提示"
    你收到浙大通知书的那一刻，你 ~~可能会迫不及待去看浙大的官网~~ ， 然后就看见了...  
    
    ??? general "校官网"
        === "北大"
            ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/pku.png)
        === "清华"
            ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/thu.png)
        === "南大"
            ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/nju.png)
        === "浙大"
            ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/zju.png)

    浙大这个官网...是不是有那么 <span class = "heimu" title = "你知道的太多了">亿点寒碜</span> ？  
    没事，我来告诉你，浙大的网都很寒碜，我们简称 **ZJU 网烂** ( <span class = "heimu" title = "你没看到">ZJUWLAN 谐音梗</span> )。  
    尽管烂，但是说实话， ~~校园网还是挺难用的（×）~~ 。
    下面介绍几种常见的上校园网的方法。  
    
    还是一样啦，不确保下面的内容完全正确。如果有谬误欢迎指正呐。  

## 1 利用校园无线网  

学校内 ~~全覆盖~~ 的无线信号有 `ZJUWLAN` `ZJUWLAN-Secure` `ZJUWLAN-NEW` 。这三个可以分成两大类：  

### 1.1 网页验证 `ZJUWLAN` `ZJUWLAN-NEW`  

这两种无线网是开放网络，连接进去之后会一般会 自动 弹出一个验证 [网页](https://net3.zju.edu.cn) ( https://net3.zju.edu.cn ) 通过输入 浙大通行证 <font class = "heimu" title = "饱受其苦" size = 1>其实我也不知道浙大统一认证认证了个毛线，我改了一个密码之后现在要看情况使用密码</font> 进行登录。之后即可使用校园网资源。  

??? general "校园网认证界面"  
    ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/net3_zju.png)  

### 1.2 通过连接时验证 `ZJUWLAN-Secure`  

这个 所谓的安全 ，应该是指这个网络使用了 `802.1x EAP` 的加密类型。下面分两个主流平台介绍连接方式。  

=== "Windows"  
    在 Windows 下，点击桌面右下方菜单栏的无线网图标，选择 `ZJUWLAN-Secure` 进行连接，之后像网页认证一样输入浙大通行证即可。  
    
    ??? general "操作步骤"  
        === "Step 1"  
            ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/ZJUWLAN-Secure-Windows-0.png)  
        === "Step 2"  
            ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/ZJUWLAN-Secure-Windows-00.png)  
        === "Step 3"  
            ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/ZJUWLAN-Secure-Windows-1.png)  
        === "Step 4"  
            ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/ZJUWLAN-Secure-Windows-2.png)  

=== "Android"  
    由于我实在没有 iphone 所以只能以安卓做演示。 iphone 用户可移步百度。 本当にすみません！ 接下来以 `Magic UI 6.0` 进行演示，其他操作系统大同小异 <font class = "heimu" title = "大概...?" size = 1>大概...?</font> 。  

    ??? general "操作步骤"  
        === "Step 1"  
            进入 `WLAN` 连接页面，选择 `ZJUWLAN-Secure` 。  
            ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/ZJUWLAN-Secure-Android-1.jpg)  

        === "Step 2"  
            `阶段 2 身份认证` 和 `CA 证书` 均选择 **不认证** ，输入用户名和密码，点击连接即可。  
            ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/ZJUWLAN-Secure-Android-2.jpg)  

# 2 有线连接  

宿舍里面有一个网口，用网线怼到电脑上，就可以开始有线连接的奇妙之旅了（×）。  
由于实在比较麻烦，且可能影响其他的 `VPN` ，所以不是特别推荐。  

<hr>

![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/buyao.png)  

对不起，润了润了  

<hr>

又回来了。简单放些 Windows 10 上面的过程吧，按需求使用。  

??? general "操作步骤"  
    === "Step 1"  
        如图所示创建 VPN 连接。其中 用户名 和 密码 可以不写，等 `Step 4` 连接的时候再输入。  
        ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/line-1.png)  
        ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/line-2.png)  

    === "Step 2"  
        修改连接适配器的设置，如图:  
        ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/line-3.png)  
        ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/line-4.png)  
        ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/line-5.png)  

    === "Step 3"  
        按 `Win + R` 输入 `regedit` 打开注册表（也可以通过搜索打开），到下图红色框起来的路径，按下面的内容修改注册表值:  
        ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/line-6.png)  
        ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/line-7.png)  
        ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/line-8.png)  
        ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/line-9.png)  
        ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/line-10.png)  
        ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/line-11.png)  

    === "Step 4"  
        重启电脑，之后进行连接：  
        ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/line-12.png)  
        ![](https://pan.yusux.xyz/source_one/img/others/content/2022turing/line-13.png)  

# 3 VPN 连接校网  

对于不在校内但是想要访问校内资源的情况，可以采用学校提供的 `VPN` 服务。  

## 3.1 软件连接  

这个我...劝大家尽量不用...?  
方法见浙大提供的 [文档](https://zuits.zju.edu.cn/12084/listm.htm) 。  

## 3.2 WebVPN  

通过 [webvpn.zju.edu.cn](https://webvpn.zju.edu.cn) 来访问。  

# 4 一些说明  

## 4.1 费用  

校园网的费用分为：  
- 10 元/月  
- 30 元/月  
- 50 元/月  
通过 ~~办理校园卡~~ 的方式可以免费从 低价位的 升级到 高一级价位的套餐 。资费的详情大致如下：  

|费用(元/月)|带宽(Mbps)|
|----|----|
|10|10|
|30|50|
|50|100|

<font size = 5><b>但是</b></font>10 元/月 的套餐连接 `ZJUWLAN-Secure` `ZJUWLAN-NEW` 可以 ~~白嫖~~ `30 Mbps` 的带宽， ~~可以满足一般来说的需求了~~ 。   

## 4.2 关于网络稳定性  

`ZJUWLAN-Secure` 不算特别稳定，有时候会断连。 `ZJUWLAN-NEW` 覆盖面不算广。  

## 4.3 关于网络运营商  

这个不好说，有时候是 移动 有时候是 电信 。如果使用 `Parsec` 进行远程桌面连接的话注意 移动 网络无法使用 `Parsec` 。  

## 4.4 关于 IPv6  

除了 `ZJUWLAN` 没有 `IPv6` 地址之外，另外 两个无线网络连接 和 有线连接 均会分配 `IPv6` 地址。有需求的话可以注意一下。  
此外，有线上网的时候 `IPv6` 带宽不限速，大概有 `300 ~ 500 Mbps` ，可以拿来用一些稀奇古怪的方法利用这带宽（×）。  

## 4.5 关于路由器上网  

宿舍内的网线接口可以拿来给路由器上网。上面教程内时常出现 `yusuxuans(_5G)` 就是我的路由器（逃）。  
如果没有什么特别的需求，配置不算特别困难。参考 `cc98` （ 校内论坛，需要用内网访问 ） 上的 [帖子](https://www.cc98.org/topic/5213173) ( https://www.cc98.org/topic/5213173 ) 应该可以完成。需要用内网访问。  