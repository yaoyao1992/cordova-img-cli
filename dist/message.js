
var colors = require('colors');  
  
  
colors.setTheme({   
    error: 'yellow',
    primary:'cyan'  
}); 



module.exports={
	
	help    :	
			" 				  \n"+
			"all the command: \n".primary+
			" 				  \n"+
			"	base command: \n".primary+
			" 				  \n"+
			"	cordova-img iosIcon (imgPath) \n"+
			"	cordova-img iosPage (imgPath) (backgroundPath) \n"+			
			"	cordova-img androidIcon (imgPath) \n"+	
			"	cordova-img androidPage (imgPath) (backgroundPath) \n"+
			" 				  \n"+
			" 	argvs for create page: \n".primary+
			" 				  \n"+
			"   	-g  [string] gravity position of img , you can choose: \n"+ 
			" 				  \n"+
			" 		center,centre,north,east,south,west,northeast,southeast,southwest, northwest   \n"+
			" 				  \n"+
			"   	-l  [number] absolute left of img for the background \n"+
			"   	-t  [number] absolute top  of img for the background \n",
	
	defaults:
			" 				  \n"+
			"Should print usage instructions,please print 'cordova-img' --help to see all the commands "+		
			" 				  \n",
	
	errors  :{
		0:'\n imgPath must be defined \n'.error,
		1:'\n backgroundPath must be defined \n'.error,
		2:'\n -l [args] must be type number \n'.error,
		3:'\n -t [args] must be type number \n'.error,
		4:'\n -g [args] must be defined in ["center","centre","north","east","south","west","northeast","southeast","southwest","northwest"]  \n'.error
	}	
	

}