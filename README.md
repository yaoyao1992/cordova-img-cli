
#自动生成cordova 格式的图片

	安装 sudo npm install https://github.com/yaoyao1992/cordova-img-cli.git -g

	version support:nodejs 5.0+

	--help get all the command
	
	base command:

	cordova-img iosIcon (imgPath) 
	cordova-img iosPage (imgPath) (backgroundPath) 	
	cordova-img androidIcon (imgPath) 
	cordova-img androidPage (imgPath) (backgroundPath) 

	args you can choose for page:

	-g  [string] gravity position of img , you can choose: 
	
	[center,centre,north,east,south,west,northeast,southeast,southwest,northwest]   
		
	-l  [number] absolute left of img for the background
	-t  [number] absolute top  of img for the background 

	
	以下参数改变img相对于background的位置，img相对于自身的大小可以在config.js中的layoutW,layoutH调节


