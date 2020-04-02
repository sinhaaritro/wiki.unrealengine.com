(window.webpackJsonp=window.webpackJsonp||[]).push([[877],{1391:function(t,e,r){"use strict";r.r(e);var a=r(28),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("Networking 多人在线游戏之如何测试 - Epic Wiki")]),t._v(" "),r("h1",{attrs:{id:"networking-多人在线游戏之如何测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#networking-多人在线游戏之如何测试"}},[t._v("#")]),t._v(" Networking 多人在线游戏之如何测试")]),t._v(" "),r("p",[r("strong",[t._v("Rate this Article:")])]),t._v(" "),r("p",[t._v("4.00")]),t._v(" "),r("p",[r("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),r("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),r("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),r("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),r("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),t._v(" (2 votes)")]),t._v(" "),r("p",[t._v("Approved for Versions:(4.2)")]),t._v(" "),r("p",[t._v("NOTE : WIP, don't delete for this moment, please. Thanks 😃 文档编写过程中")]),t._v(" "),r("h2",{attrs:{id:"contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#.E6.A6.82.E8.BF.B0"}},[t._v("1 概述")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#.E6.9C.8D.E5.8A.A1.E5.99.A8.E7.B1.BB.E5.9E.8B"}},[t._v("2 服务器类型")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#.E6.96.B0.E5.BB.BA.E9.A1.B9.E7.9B.AE.E5.B9.B6.E8.BF.90.E8.A1.8C.E6.B5.8B.E8.AF.95"}},[t._v("3 新建项目并运行测试")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#.E7.BC.96.E8.BE.91.E5.99.A8.28PIE.29.E4.B8.AD.E8.BF.90.E8.A1.8C"}},[t._v("3.1 编辑器(PIE)中运行")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#.E4.BB.A5Launch.E6.96.B9.E5.BC.8F.E8.BF.90.E8.A1.8C"}},[t._v("3.2 以Launch方式运行")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#.E4.BB.A5.E5.8F.91.E5.B8.83.E6.96.B9.E5.BC.8F.E8.BF.90.E8.A1.8C"}},[t._v("3.3 以发布方式运行")])])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#.E6.80.BB.E7.BB.93"}},[t._v("4 总结")])])]),t._v(" "),r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),r("p",[t._v("Unreal Engine中开发网络游戏极为容易，但将C/S同置于一个项目，也许对于很多熟悉编写独立C/S的开发者来说比较不适应。将通过本教程介绍常见的几种多人游戏测试方法。 示例项目：Blueprint Third Person Template")]),t._v(" "),r("h2",{attrs:{id:"服务器类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务器类型"}},[t._v("#")]),t._v(" 服务器类型")]),t._v(" "),r("p",[t._v("在次之前先简单介绍UE4中两种服务器类型：")]),t._v(" "),r("ul",[r("li",[t._v("Listen-Server ：Listen-Server 表示玩家")]),t._v(" "),r("li",[t._v("Dedicated-Server ：与我们常见的无异")])]),t._v(" "),r("h2",{attrs:{id:"新建项目并运行测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新建项目并运行测试"}},[t._v("#")]),t._v(" 新建项目并运行测试")]),t._v(" "),r("p",[r("a",{attrs:{href:"/File:Ue4_network_how_to_test_01.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/7/75/Ue4_network_how_to_test_01.png",alt:"Ue4 network how to test 01.png"}})])]),t._v(" "),r("h3",{attrs:{id:"编辑器-pie-中运行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编辑器-pie-中运行"}},[t._v("#")]),t._v(" 编辑器(PIE)中运行")]),t._v(" "),r("p",[t._v("点击Play右侧的小三角，现在我们主要关注：")]),t._v(" "),r("p",[r("a",{attrs:{href:"/File:Ue4_network_how_to_test_02.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/0/0c/Ue4_network_how_to_test_02.png",alt:"Ue4 network how to test 02.png"}})])]),t._v(" "),r("p",[t._v("Numbers of Clients : 当我们指定的客户端数量超过1个时，就表示我们想运行多人游戏了，这里最大数量是64，也就是最多支持64人。 Run Dedicated Server: 勾选表示运行独立服务器，不选择则运行Listen Server")]),t._v(" "),r("p",[r("a",{attrs:{href:"/File:Ue4_network_how_to_test_03.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/1/19/Ue4_network_how_to_test_03.png",alt:"Ue4 network how to test 03.png"}})])]),t._v(" "),r("p",[t._v("点击Play就可以了看到立即实例化两个角色出来了。")]),t._v(" "),r("p",[r("a",{attrs:{href:"/File:Ue4_network_how_to_test_04.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/b/b9/Ue4_network_how_to_test_04.png",alt:"Ue4 network how to test 04.png"}})])]),t._v(" "),r("p",[r("a",{attrs:{href:"/File:Ue4_network_how_to_test_05.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/c/ca/Ue4_network_how_to_test_05.png",alt:"Ue4 network how to test 05.png"}})])]),t._v(" "),r("p",[t._v("其他： 根据需要，可以点击Advanced，模拟客户端的窗口的位置与大小。")]),t._v(" "),r("p",[r("a",{attrs:{href:"/File:Ue4_network_how_to_test_06.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/9/9d/Ue4_network_how_to_test_06.png",alt:"Ue4 network how to test 06.png"}})])]),t._v(" "),r("p",[t._v("虽然PIE测试很简单，但有些情况下PIE并不能满足我们的需求，比如说我们在测试另一个玩家开火的声音，或者看另一个玩家蹲下被爆头的效果等等至少需要两个人才能完成测试的条件下，PIE就难以满足。")]),t._v(" "),r("p",[r("a",{attrs:{href:"/File:Ue4_network_how_to_test_07.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/2/21/Ue4_network_how_to_test_07.png",alt:"Ue4 network how to test 07.png"}})])]),t._v(" "),r("h3",{attrs:{id:"以launch方式运行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#以launch方式运行"}},[t._v("#")]),t._v(" 以Launch方式运行")]),t._v(" "),r("p",[t._v("首先抱歉的是，我不知道该如何命名这个运行方式。")]),t._v(" "),r("p",[t._v("在你的编辑器也就是UE4Editor.exe目录下创建 分别运行客户端、服务端的快捷方式， 右击快捷方式， 加上参数，客户端很简单：127.0.0.1 -game - 示例： C:\\UnrealEngine\\4.2.1\\Engine\\Binaries\\Win64\\UE4Editor.exe D:\\Project\\Unreal\\4.2\\MyTPS\\127.0.0.1 -game")]),t._v(" "),r("p",[t._v("服务端 : Listen Server: Example_Map?listen -game - 示例： C:\\UnrealEngine\\4.2.1\\Engine\\Binaries\\Win64\\UE4Editor.exe D:\\Project\\Unreal\\4.2\\MyTPS\\MyTPS.uproject Example_Map?listen -game")]),t._v(" "),r("p",[t._v("Dedicated Server : "),r("MapName",[t._v(" -server -log - 示例： Map5D -server -log")])],1),t._v(" "),r("p",[t._v("为什么要使用这种方式运行？ 这是最接近编译结果的方式，你可以多人联机测试")]),t._v(" "),r("h3",{attrs:{id:"以发布方式运行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#以发布方式运行"}},[t._v("#")]),t._v(" 以发布方式运行")]),t._v(" "),r("p",[t._v("发布游戏，我们需要打包游戏资源，编译游戏代码。如果你是刚刚开始学习UE4，这边的资料可能 有些繁杂。")]),t._v(" "),r("p",[t._v("UE4是开源的，就目前而言也是不成熟的，大部分情况下我们使用编译过的编辑器来工作， 不成熟导致我们在从编译好的编辑器下打包游戏时，只有DebugGame/Development/Shipping三 个选项，但没有编译客户端还是服务器的概念。")]),t._v(" "),r("p",[t._v("所以想要以发布的方式运行多人游戏，在本文里只介绍使用Listen Server，如果对如何打包 Dedicated Server感兴趣，可以看看我的另外一篇博文： Unreal Engine 4 Packaging与Cooking游戏项目")]),t._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("p",[t._v("联系我："),r("a",{attrs:{href:"/User:Hexcola",title:"User:Hexcola"}},[t._v("hexcola")])]),t._v(" "),r("p",[t._v('Retrieved from "'),r("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Networking_%E5%A4%9A%E4%BA%BA%E5%9C%A8%E7%BA%BF%E6%B8%B8%E6%88%8F%E4%B9%8B%E5%A6%82%E4%BD%95%E6%B5%8B%E8%AF%95&oldid=12752",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Networking_多人在线游戏之如何测试&oldid=12752"),r("OutboundLink")],1),t._v('"')]),t._v(" "),r("p",[r("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[t._v("Categories")]),t._v(":")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[t._v("Tutorials")])]),t._v(" "),r("li",[r("a",{attrs:{href:"/Category:Community_Created_Content",title:"Category:Community Created Content"}},[t._v("Community Created Content")])])]),t._v(" "),r("p",[t._v("Hidden category:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[t._v("Templates")])])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);e.default=_.exports}}]);