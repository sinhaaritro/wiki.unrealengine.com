(window.webpackJsonp=window.webpackJsonp||[]).push([[1062],{577:function(t,e,a){"use strict";a.r(e);var n=a(28),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("The Easy Way Of Translating Your Game - Epic Wiki")]),t._v(" "),a("h1",{attrs:{id:"the-easy-way-of-translating-your-game"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-easy-way-of-translating-your-game"}},[t._v("#")]),t._v(" The Easy Way Of Translating Your Game")]),t._v(" "),a("p",[t._v("From Epic Wiki")]),t._v(" "),a("p",[t._v("Jump to: "),a("a",{attrs:{href:"#mw-head"}},[t._v("navigation")]),t._v(", "),a("a",{attrs:{href:"#p-search"}},[t._v("search")])]),t._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Overview"}},[t._v("1 Overview")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Requirements"}},[t._v("2 Requirements")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#The_Localization_Dashboard"}},[t._v("3 The Localization Dashboard")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Standard_Interactions"}},[t._v("4 Standard Interactions")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Setting_up_the_native_language"}},[t._v("5 Setting up the native language")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Adding_the_new_language"}},[t._v("6 Adding the new language")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Translating"}},[t._v("7 Translating")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Compiling"}},[t._v("8 Compiling")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Changing_languages_from_within_the_game"}},[t._v("9 Changing languages from within the game")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#End"}},[t._v("10 End")])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("Hey guys to my second wiki page 😃 Today I'm explaining how to create translations for your game, which is pretty easy with the new, but still experimental toolset you can use out-of-the-box.")]),t._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("p",[t._v("To use the features we are using below, you need to enable an experimental feature. As of my current version (4.10.2) you do this by opening the "),a("strong",[t._v("Editor Preferences")]),t._v(", go to the category "),a("strong",[t._v("Experimental")]),t._v(", and check the entry "),a("strong",[t._v("Localization Dashboard")]),t._v(". You don't even need to restart the editor! After this, you can find it under the "),a("strong",[t._v("Window")]),t._v(" menu on the top bar. Another requirement: all the elements you want to translate (for example in an UMG widget) need to be variables of the type "),a("strong",[t._v("Text (FText)")]),t._v(". Strings cannot be translated.")]),t._v(" "),a("h2",{attrs:{id:"the-localization-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-localization-dashboard"}},[t._v("#")]),t._v(" The Localization Dashboard")]),t._v(" "),a("p",[t._v("Lets have a look at the Localization Dashboard first! If you open it, it should look like this:")]),t._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:LocalizationDashboard1.png"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/e/ef/LocalizationDashboard1.png/940px-LocalizationDashboard1.png",alt:""}})])]),t._v(" "),a("p",[t._v("Localization Dashboard")]),t._v(" "),a("p",[t._v("The first entry, the Localization Service Provider can be ignored for now. More down you see the "),a("strong",[t._v("Targets")]),t._v(" section. In here, you'll set up the localizations for different targets (e.g. Game or Editor). You see the five buttons "),a("strong",[t._v("Gather All")]),t._v(", "),a("strong",[t._v("Import All")]),t._v(", "),a("strong",[t._v("Export All")]),t._v(", "),a("strong",[t._v("Count Words All")]),t._v(" and "),a("strong",[t._v("Compile All")]),t._v(". Those are the basic interactions for interacting with localizations. A brief explanation of them is below! Then you can see the first target: "),a("strong",[t._v("Game")]),t._v(". The conflict status displays if yuo have any conflicts with other targets. In your case, it should be an orange exclamation mark. Cultures shows which languages you implement, Word count displays how many words you have translated, and Actions mirrors the standard interactions, but only for this entry (= not all, like the big buttons above).")]),t._v(" "),a("h2",{attrs:{id:"standard-interactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standard-interactions"}},[t._v("#")]),t._v(" Standard Interactions")]),t._v(" "),a("ul",[a("li",[t._v("Gather:\n"),a("ul",[a("li",[t._v('Gathering is another word for "Finding all words". Clicking this will force the engine to search for all words in assets you specify (more below!)')])])]),t._v(" "),a("li",[t._v("Import:\n"),a("ul",[a("li",[t._v("You can import/export translations via a handy file with the extension .po. Importing files will cause the current translation to overwrite.")])])]),t._v(" "),a("li",[t._v("Export:\n"),a("ul",[a("li",[t._v("Should be safe-explaining! You export with this your current translation. This is helpful if you want anyone else to translate your work. There are handy editors (Google Translator Toolbox has this too!) for editing this.")])])]),t._v(" "),a("li",[t._v("Count Words:\n"),a("ul",[a("li",[t._v("Safe-explaining aswell. It basicially counts the words.")])])]),t._v(" "),a("li",[t._v("Compile:\n"),a("ul",[a("li",[t._v("Compiling is the final step when you finished the translation. It basicially puts them in a binary format so the engine can read it.")])])])]),t._v(" "),a("h2",{attrs:{id:"setting-up-the-native-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-native-language"}},[t._v("#")]),t._v(" Setting up the native language")]),t._v(" "),a("p",[t._v("So first, you click on the underlined Game target. This should expand the screen and you have more options below. The relevant category we need to take a look at first is "),a("strong",[t._v("Gather")]),t._v(". Here we basicially specify how and where we want to find Texts which can be translated. Since we only want to translate Variables - for now - we make a check on the entry "),a("strong",[t._v("Gather from Packages")]),t._v(". Then, you expand it, and add one entry to the value "),a("strong",[t._v("Include Path Wildcards")]),t._v(". Then you basicially specify the folder your assets are in which you want to translate. If you want to translate the whole game (which is mostly unnessecary), you just put in your Content/ folder. In my case, I only want to translate my UIs, so I put in the folder where my UMG widgets are in. Now, you should see an culture entry already, this should be "),a("strong",[t._v("English")]),t._v('. We need to set it to be native, so those are the translations you use originally (= no translation = the value you type in in the UMG editor for example). So, to do that, simply click on the not filled radio button in the "Native" slot. It\'ll ask you to confirm that, because changes could be lost. After doing this, you are ready to Gather, so just click the Gather or Gather all button! After a short processing time, you can click "Okay". Now the word count progress bar should have updated with an actual word count (don\'t be afraid if this value is too freaking high!). This language now contains the standard values of your Text variables, so you won\'t need to change anything there.')]),t._v(" "),a("h2",{attrs:{id:"adding-the-new-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-the-new-language"}},[t._v("#")]),t._v(" Adding the new language")]),t._v(" "),a("p",[t._v("Okay, after all that stuff, lets get to the new language. In my case, I wan't to add german. Click on the fat "),a("strong",[t._v("Add new Culture")]),t._v(' button, and select the language you want (in my case its "German (Germany)"). It\'ll add a new culture slot there, and the word count is set to zero. You can now gather here aswell, but from my tests, this is currently bugged, because it moves everything into the "Untranslated" category, and I\'m not sure how to mark this as translated, so we will use a little but good workaround. However, we need to gather first, so it generates the locale folder for you, so you just click the big '),a("strong",[t._v("Gather")]),t._v(" button or "),a("strong",[t._v("Gather All")]),t._v(". After that, you find the word count bar at your new language still empty. You then need to export the native language to an file! To do this, click on the little "),a("strong",[t._v("Export")]),t._v(" button in the native language's Actions slot. Select an directory and name it something like \"native.po\". After the exporting, you import this to your new language's slot. Same here, click on the little "),a("strong",[t._v("Import")]),t._v(" button in the Actions slot. Select the exported file from the native language, and let it proceed. It should work without errors, and your word count bar should be full orange after this!")]),t._v(" "),a("h2",{attrs:{id:"translating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#translating"}},[t._v("#")]),t._v(" Translating")]),t._v(" "),a("p",[t._v("Now, because you just imported the native's file, this will have the same translations as before. To edit them, you click the little "),a("strong",[t._v("Edit Translations")]),t._v(" button in the Actions slot. You'll see new window coming up, containing all words and the translations. The "),a("strong",[t._v("Preview")]),t._v(" tab can be closed, since I think this is unnessecary. You'll see the big list, on the left the original names (= the values you typed in in UMG for example) and on the right the translation. Now, you can start from the top and edit the values so they fit to what you want to have there. Pressing enter will automaticially bring you to the next line, so you can stay in the flow. Once your done, don't forget to hit the Save button in the toolbar!")]),t._v(" "),a("h2",{attrs:{id:"compiling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiling"}},[t._v("#")]),t._v(" Compiling")]),t._v(" "),a("p",[t._v("Okay, your translations are done, now you only need them to be in the game. To do that, just hit the big "),a("strong",[t._v("Compile All")]),t._v(" button in the Targets section in your Localization Dashboard. It should run without errors!")]),t._v(" "),a("h2",{attrs:{id:"changing-languages-from-within-the-game"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-languages-from-within-the-game"}},[t._v("#")]),t._v(" Changing languages from within the game")]),t._v(" "),a("p",[t._v("Fine, we got translations and shit, but how do we want to change the languages inside the game? There's currently no built-in blueprint node, but I'll show you how to do this with simple C++. To add Blueprint nodes, you go to "),a("strong",[t._v("File -> New C++ class")]),t._v(" and choose the parent class to be a "),a("strong",[t._v("Blueprint Function Library")]),t._v(". Give it a filename, set it to public, and click Create Class. Will take some time, generate Visual Studio project files (yes, you need VS for it!), and after VS is done doing things, you can proceed writing a bit of code. In the header file (.h), we declare the new function as the following:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('/\\* Change Localization at Runtime. \\*/\nUFUNCTION(BlueprintCallable, meta \\= (DisplayName \\= "Change Localization"), Category \\= "Locale")\nstatic void changeLocalization(FString target);\n')])])]),a("p",[t._v("So the whole file looks like this (without the includes):")]),t._v(" "),a("p",[t._v("UCLASS()\nclass UNIVERSE_API UBlueprintFunctions : public UBlueprintFunctionLibrary\n{\nGENERATED_BODY()")]),t._v(" "),a("p",[t._v('public:\n/* Change Localization at Runtime. */\nUFUNCTION(BlueprintCallable, meta = (DisplayName = "Change Localization"), Category = "Locale")\nstatic void changeLocalization(FString target);\n};')]),t._v(" "),a("p",[t._v("Ok, lets proceed to the .cpp file and write the implementation. It's simple:")]),t._v(" "),a("p",[t._v("void UBlueprintFunctions::changeLocalization(FString target)\n{\nFInternationalization::Get().SetCurrentCulture(target);\n}")]),t._v(" "),a("p",[t._v("You see it sets the current culture to a different, depending on a string you input. I'll get to that later. Once you wrote all the code, jump back into the Unreal Editor and hit the big "),a("strong",[t._v("Compile")]),t._v(" button. It should compile your code, and when it is succeeded, you can use the new Blueprint node! I just hook the node up to an InputAction event for the letter 'G', so if I press it, the language will change to german. Now let's get to the string we need to input. It actually takes up the iso-standard namings of the different languages + regions. An example: german is de-DE (de = language; DE = region). To get the name of your culture, simple hover over it in the localization dashboard. Now, it's time to try it out! In my case, I have a main menu with texts which are going to be translated. "),a("a",{attrs:{href:"/index.php?title=Template:Note&action=edit&redlink=1",title:"Template:Note (page does not exist)"}},[t._v("Template:Note")]),t._v(" See the final result here:")]),t._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:LocalizationFinal.gif"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/e/e6/LocalizationFinal.gif",alt:""}})])]),t._v(" "),a("p",[t._v("Localization works!")]),t._v(" "),a("h2",{attrs:{id:"end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#end"}},[t._v("#")]),t._v(" End")]),t._v(" "),a("p",[t._v("I hope you enjoyed this wiki entry! If you have questions, errors or want to thank me, please to this "),a("a",{attrs:{href:"https://forums.unrealengine.com/showthread.php?99689-Localization-Tutorial&p=467445#post467445",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(". Thanks 😃")]),t._v(" "),a("p",[t._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=The_Easy_Way_Of_Translating_Your_Game&oldid=247",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=The_Easy_Way_Of_Translating_Your_Game&oldid=247"),a("OutboundLink")],1),t._v('"')])])}),[],!1,null,null,null);e.default=o.exports}}]);