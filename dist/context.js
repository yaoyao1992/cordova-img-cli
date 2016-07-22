

var cliContext={
	
	context:function(argv){
		
		return {
			imgPath:argv._[1],
			backgroundPath:argv._[2],
			left:argv.l,
			top :argv.t,
			gravity:argv.g
		}

	}
}

module.exports=cliContext;

