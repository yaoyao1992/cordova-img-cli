
var help=require('./help');
var Promise=require('sharp/node_modules/bluebird');
var config=require('./config')



module.exports={
	loading_dir:config.pageDir.android,
	loading_png:config.pages.android,
	execute:function(context){

		help.test(context,1); 

		Promise.map(this.loading_png,item =>{

			item.name="icon.png"
			item.createDir=this.loading_dir+item.dir
			item.imgPath  =this.loading_dir+item.dir+"/"

			return new Promise(resolve=>{

				help.mkdirs(item.createDir,{},resolve.bind(this,item));

			})
			

		})
		.then(res =>{

			var sharp=help.getSharp(context,1);

			this.overlayImg   =sharp.overlay.overlayImg;
			this.overlayWith  =sharp.overlay.width;
			this.overlayHeight=sharp.overlay.width;
			this.originalImg  =sharp.originalImg;
			this.option 	  =sharp.option;

			return Promise.map(res, item =>	
				
				this.overlayImg
				.resize(this.overlayWith*item.layoutW,this.overlayHeight*item.layoutH)
				.toBuffer((err,outputBuffer)=>{

					this.option[0]=outputBuffer;
					
					return help.resizeAsync(this.originalImg.clone(),item,item.imgPath,this.option)

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


