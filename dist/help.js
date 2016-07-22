var fs=require('fs');
var path=require('path');
var events=require('events');
var sharp = require('sharp');
var sizeOf = require('image-size');
var message=require("./message");

events.defaultMaxListeners=20;

var help={

	mkdirs:function(dirpath, mode, cb) {

		var This=this;
	
	    fs.exists(dirpath, function(exists) {

	        if(exists) {
	            cb && cb(dirpath);
	        } else {
	            //尝试创建父目录，然后再创建当前目录
	            This.mkdirs(path.dirname(dirpath), mode, function(){
	                
	                fs.mkdir(dirpath, mode, cb );
					
	            })
	        }
	    })
	
	},
	resizeAsync:function(img, item, dir ,option) {

		return option?
		img.resize(item.w, item.h).overlayWith(option[0],option[1]).toFile(dir+item.name):
	    img.resize(item.w, item.h).toFile(dir+item.name);

	},
	test:function(context,type){


		if(!context.imgPath){
			this.throwError(0);
		}

		if(type===1){
			
			var gravityOptions=["center","centre","north","east","south","west","northeast","southeast","southwest","northwest"]

			!context.backgroundPath?this.throwError(1):

			context.left && typeof context.left!=="number"?this.throwError(2):

			context.top  && typeof context.top !=="number"?this.throwError(3):

			context.gravity && gravityOptions.some((item,i)=>{

			 	if(context.gravity===item) return true;
			 	
				if(i===9) this.throwError(4);
			 
			})

		}
	},
	throwError:function(errorType){
		
		console.error(message.errors[errorType]);
		process.exit(0);

	},
	getSharp:function(context,type){

		var ret={};

		if(type===0){

			ret.originalImg=sharp(context.imgPath);
			
		}
		else if(type===1){

			var originalImg  = sharp(context.backgroundPath),
				overlayData  = sizeOf(context.imgPath),
			    overlayOption= {},
				option       = [null,overlayOption],
				left         = context.left,
				top 	     = context.top,
				gravity      = context.gravity||"center";
		
				
			if(left) 	 overlayOption.left=left;
			if(top) 	 overlayOption.top =top;
			if(gravity)  overlayOption.gravity=sharp.gravity[gravity];

			ret.originalImg=originalImg;
			ret.option=option;
			ret.overlay={
				overlayImg:sharp(context.imgPath),
				width     :overlayData.width,
				height 	  :overlayData.height
			};
			
		}

		return ret;


	}



}





module.exports=help