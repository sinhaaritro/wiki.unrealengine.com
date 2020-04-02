(window.webpackJsonp=window.webpackJsonp||[]).push([[977],{1491:function(e,t,a){"use strict";a.r(t);var o=a(28),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("ShooterGame exploring - Epic Wiki")]),e._v(" "),a("h1",{attrs:{id:"shootergame-exploring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shootergame-exploring"}},[e._v("#")]),e._v(" ShooterGame exploring")]),e._v(" "),a("p",[a("strong",[e._v("Rate this Article:")])]),e._v(" "),a("p",[e._v("3.00")]),e._v(" "),a("p",[a("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),e._v(" (one vote)")]),e._v(" "),a("p",[e._v("Approved for Versions:(please verify)")]),e._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Exploring_the_functionality_of_the_ShooterGame_example"}},[e._v("1 Exploring the functionality of the ShooterGame example")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Background"}},[e._v("1.1 Background")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Code"}},[e._v("1.2 Code")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Configuration_of_Game_Variables"}},[e._v("1.3 Configuration of Game Variables")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Key_Bindings"}},[e._v("1.4 Key Bindings")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Animation_Code"}},[e._v("1.5 Animation Code")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Starting_the_Level_once_menu_selections_are_made"}},[e._v("1.6 Starting the Level once menu selections are made")])])])])]),e._v(" "),a("h2",{attrs:{id:"exploring-the-functionality-of-the-shootergame-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exploring-the-functionality-of-the-shootergame-example"}},[e._v("#")]),e._v(" Exploring the functionality of the ShooterGame example")]),e._v(" "),a("p",[e._v("The purpose of this page is to collect and present information about the ShooterGame example that comes with the Unreal Engine (see the Marketplace to download it).")]),e._v(" "),a("h3",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),a("p",[e._v("ShooterGame is a C++ based example.")]),e._v(" "),a("p",[e._v("Additonal background can be found in the Official Documentation: "),a("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Resources/SampleGames/ShooterGame/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.unrealengine.com/latest/INT/Resources/SampleGames/ShooterGame/index.html"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[e._v("#")]),e._v(" Code")]),e._v(" "),a("p",[e._v("To generate the MS Visual Studio 2013 project file do the following:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Open windows explorer")])]),e._v(" "),a("li",[a("p",[e._v("Navigate to your ..\\Unreal Projects\\ShooterGame directory")])]),e._v(" "),a("li",[a("p",[e._v("Right-hand click on the ShooterGame.uproject to bring a context menu")])]),e._v(" "),a("li",[a("p",[e._v('Select "Generate Visual Studio Files"')])])]),e._v(" "),a("p",[e._v("You should now see a ShooterGame.sln in the same directory")]),e._v(" "),a("p",[e._v("[thanks goes to Robbie from the UE4 Skype chate for pointing this out]")]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:Vs2013_shootergame.png"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/3/36/Vs2013_shootergame.png",alt:""}})])]),e._v(" "),a("p",[e._v("VS2013 ShooterGame Screenshot")]),e._v(" "),a("h3",{attrs:{id:"configuration-of-game-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-game-variables"}},[e._v("#")]),e._v(" Configuration of Game Variables")]),e._v(" "),a("p",[e._v('The file "/Config/DefaultGame.ini" is referred to by the game for data such as: WarmupTime=15 RoundTime=300 TimeBetweenMatches=15 KillScore=2 DeathScore=-1 DamageSelfScale=0.3 MaxBots=1')]),e._v(" "),a("h3",{attrs:{id:"key-bindings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-bindings"}},[e._v("#")]),e._v(" Key Bindings")]),e._v(" "),a("p",[e._v("Key bindings are found in the file /Config/DefaultInput.ini")]),e._v(" "),a("h3",{attrs:{id:"animation-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animation-code"}},[e._v("#")]),e._v(" Animation Code")]),e._v(" "),a("p",[e._v("The Player's animation code is found mostly in ShooterCharacter.cpp")]),e._v(" "),a("p",[e._v('The Player mesh is set in "ShooterGameMode.cpp" at line 7 where "/Game/Blueprints/Pawms/PlayerPawn" is passed to PlayerPawnOb. This is a Blueprint with additional information from the Editor.')]),e._v(" "),a("h3",{attrs:{id:"starting-the-level-once-menu-selections-are-made"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starting-the-level-once-menu-selections-are-made"}},[e._v("#")]),e._v(" Starting the Level once menu selections are made")]),e._v(" "),a("p",[e._v('The function to be called is "serverTravel()"')]),e._v(" "),a("p",[e._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=ShooterGame_exploring&oldid=8303",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=ShooterGame_exploring&oldid=8303"),a("OutboundLink")],1),e._v('"')]),e._v(" "),a("p",[a("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[e._v("Tutorials")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/Category:Community_Created_Content",title:"Category:Community Created Content"}},[e._v("Community Created Content")])])]),e._v(" "),a("p",[e._v("Hidden category:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[e._v("Templates")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);