

module.exports={

	pageDir:{
		android:process.env.PWD+"/android/",
		ios    :process.env.PWD+"/ios/splash"
	},
	iconDir:{
		android:process.env.PWD+"/android/",
		ios    :process.env.PWD+"/ios/icons"
	},
	pages:{
		android:[
			{dir:"drawable-land-hdpi"  ,w:800  ,h:480,layoutW:1,layoutH:1},
			{dir:"drawable-land-ldpi"  ,w:320  ,h:200,layoutW:1,layoutH:1},
			{dir:"drawable-land-mdpi"  ,w:480  ,h:320,layoutW:1,layoutH:1},
			{dir:"drawable-land-xhdpi" ,w:1280 ,h:720,layoutW:1,layoutH:1},
			{dir:"drawable-port-hdpi " ,w:480  ,h:800,layoutW:1,layoutH:1},
			{dir:"drawable-port-ldpi"  ,w:200  ,h:320,layoutW:1,layoutH:1},
			{dir:"drawable-port-mdpi"  ,w:320  ,h:480,layoutW:1,layoutH:1},
			{dir:"drawable-port-xhdpi" ,w:720  ,h:1280,layoutW:1,layoutH:1}	
		],
		ios   :[
			{name:"Default-568h@2x~iphone.png"   ,w:640 ,h:1136,layoutW:1,layoutH:1},
			{name:"Default-667h.png"			 ,w:750 ,h:1334,layoutW:1,layoutH:1},
			{name:"Default-736h.png"			 ,w:1242,h:2208,layoutW:1,layoutH:1},
			{name:"Default-Landscape-736h.png"	 ,w:2208,h:1242,layoutW:1,layoutH:1},
			{name:"Default-Landscape@2x~ipad.png",w:2048,h:1536,layoutW:1,layoutH:1},
			{name:"Default-Landscape~ipad.png"	 ,w:1024,h:768 ,layoutW:1,layoutH:1},
			{name:"Default-Portrait@2x~ipad.png" ,w:1536,h:2048,layoutW:1,layoutH:1},
			{name:"Default-Portrait~ipad.png"    ,w:768 ,h:1024,layoutW:1,layoutH:1},
			{name:"Default@2x~iphone.png"		 ,w:640 ,h:960 ,layoutW:1,layoutH:1},
			{name:"Default~iphone.png"   		 ,w:320 ,h:480 ,layoutW:1,layoutH:1}
		]
	},
	icons:{
		android:[
			{dir:"drawable-hdpi",w:72,h:72},
			{dir:"drawable-ldpi",w:36,h:36},
			{dir:"drawable-mdpi",w:48,h:48},
			{dir:"drawable-xhdpi",w:96,h:96}
		],
		ios    :[
			{name:"icon-40.png"   ,w:40,h:40},
			{name:"icon-40@2x.png",w:80,h:80},
			{name:"icon-50.png"   ,w:50,h:50},
			{name:"icon-50@2x.png",w:100,h:100},
			{name:"icon-60.png"   ,w:60,h:60},
			{name:"icon-60@2x.png",w:120,h:120},
			{name:"icon-60@3x.png",w:180,h:180},
			{name:"icon-72.png"   ,w:72,h:72},
			{name:"icon-72@2x.png",w:144,h:144},
			{name:"icon-76.png"   ,w:76,h:76},
			{name:"icon-76@2x.png",w:152,h:152},
			{name:"icon-small.png",w:29 ,h:29},
			{name:"icon-small@2x.png",w:58 ,h:58},
			{name:"icon.png"      ,w:57 ,h:57},
			{name:"icon@2x.png"   ,w:114 ,h:114}
		] 
	}
	

}