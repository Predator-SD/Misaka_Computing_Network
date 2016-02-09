Misaka_Network使用教程
===
1.安装和部署
---
我不会用代码框，所以大家就将就着看吧<br>
首先呢：<br>
`cd "你要安装的目录"`<br>
`mkdir Misaka_Network`<br>
`git clone https://github.com/Predator-SD/Misaka_Computing_Network.git `<br>
`cd Misaka_Computing_Network `<br>
此时我们就已经安装完成了！！！<br>
来试一下吧：<br>
`node Misaka_Network.js` <br>
如果显示出来一堆花里胡哨的东东，那么，恭喜，安装成功了～ <br>
2.服务器的创建
---
现在开始才是重头戏<br>
先进入本程序所在目录<br>
`node Misaka_Network.js -l`<br>
服务器就启动了！！！端口默认为2426，可以自行修改～<br>
关于如何外网访问，请自行度娘：UDP端口映射～<br>
3.客户端提交计算申请
---
先开一个服务器我就不解释了<br>
然后<br>
`node Misaka_Network.js -c 服务器IP(如果是在同一台机子上可以直接填0.0.0.0) 计算内容`<br>
下面主要讲一下这里的计算内容该怎么填：<br>
其实捏 这里的计算内容就是一个函数，举个例子：如果我想让她计算1+1：<br>
`node Misaka_Network.js -c 0.0.0.0 var a=1 e var b=1 e return a+b e`<br>
看懂了吗，其实就是js的语法，只不过分号（；）都用e表示了，return的值就是你想要的计算结果<br>
233记住一点，那个e必须独立出来，两边都要有空格喔！～<br>
4.总结
---
我也懒得说太多了，总之呢，本程序欢迎二次开发～还有就是本程序一大优点，可以直接用脚本执行～<br>
就是这样，88～教程到此结束<br>
5.最后的最后，记得点赞～
---
23333333333333333333333333333333333
