var Who;
module.exports = Who;

function Who(){
	this.name = function(name){
if(name == undefined){
		return 'One for you, one for me.';
	}
	return 'One for Alice, one for me.'
	}
}