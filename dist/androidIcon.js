
var help=require("./help");
var Promise = require('sharp/node_modules/bluebird');
var config=require('./config')

module.exports={
	icon_dir:config.iconDir.android,
	icon_png:config.icons.android,
	execute:function(context){

		help.test(context,0);

	
		Promise.map(this.icon_png,item =>{

			item.name="icon.png"
			item.createDir=this.icon_dir+item.dir
			item.imgPath   =this.icon_dir+item.dir+"/"

			return new Promise(resolve=>{

				help.mkdirs(item.createDir,{},resolve.bind(this,item));

			})
			
		})
		.then(res =>{

			this.originalImg = help.getSharp(context,0).originalImg;
			
			return Promise.map(res,item =>

				help.resizeAsync(this.originalImg.clone(),item,item.imgPath)

			)

		})
		.then(res => {
		    
		    console.log("\n success build ",res.length,"images \n");


		}).catch(err => {

		    console.log(err);
		
		});	


	}

}


