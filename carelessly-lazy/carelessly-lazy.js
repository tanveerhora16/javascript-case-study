
function lazyGuy() {

}

lazyGuy.prototype.hey = function(sentence) {
 reply = 'Whatever.';

if(sentence.slice(-1) == '?'){
  reply = 'Sure.';
 }

if((/^[A-Z!]+$/.test(sentence)) || (/^[A-Z]+$/.test(sentence))){
  reply = 'Whoa, chill out!';
 }
return reply;
}
module.exports = lazyGuy;


