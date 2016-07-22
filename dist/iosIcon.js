
var help=require("./help");
var Promise = require('sharp/node_modules/bluebird');
var config=require('./config')

module.exports={
	icon_dir:config.iconDir.ios,
	icon_png:config.icons.ios,
	execute:function(context){


		help.test(context,0);

		new Promise(resolve=>{

			help.mkdirs(this.icon_dir,{},resolve);

		})
		.then(()=>{
			

			this.originalImg  = help.getSharp(context,0).originalImg;
			this.imgPath      = this.icon_dir+"/";
			
			return Promise.map(this.icon_png, item =>	

				help.resizeAsync(this.originalImg.clone(), item,this.imgPath)
		
			);

		})
		.then(res => {
		    
		    console.log("\n success build ",res.length,"images \n");

		}).catch(err => {

		    console.log(err);
		
		});	
		

	}

}


