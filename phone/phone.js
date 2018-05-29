function PhoneNumber(number){
	this._number = number
}

PhoneNumber.prototype.number = function(){
 res1 = this._number.replace(/[^\w]/g, '');
 res2 = res1.replace(/[()-.]/g, '');
 if(res2.length < 10){
  return null;
 }
 if(res2.length == 11 && res2.charAt(0) != '1'){
  return null;
 }
 return res2;
}

module.exports = PhoneNumber;
