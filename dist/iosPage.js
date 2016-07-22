
var help=require("./help");
var Promise = require('sharp/node_modules/bluebird');
var config=require('./config')

module.exports={
	loading_dir:config.pageDir.ios,
	loading_png:config.pages.ios,
	execute:function(context){

		help.test(context,1);

		new Promise(resolve=>{

			help.mkdirs(this.loading_dir,{},resolve);

		})
		.then(()=>{

			var sharp=help.getSharp(context,1);
		
			this.overlayImg   =sharp.overlay.overlayImg;
			this.overlayWith  =sharp.overlay.width;
			this.overlayHeight=sharp.overlay.width;
			this.originalImg  =sharp.originalImg;
			this.option 	  =sharp.option;
			this.imgPath      =this.loading_dir+"/";
			
	
			return Promise.map(this.loading_png, item =>	
				
				this.overlayImg
				.resize(this.overlayWith*item.layoutW,this.overlayHeight*item.layoutH)
				.toBuffer((err,outputBuffer)=>{

					this.option[0]=outputBuffer;
					
					return help.resizeAsync(this.originalImg.clone(), item, this.imgPath ,this.option)

				})
			);
		
		})
		.then(res => {
		    
		    console.log("\n success build ",res.length,"images \n");

		}).catch(err => {

		    console.log(err);
		
		});	

	}

}


