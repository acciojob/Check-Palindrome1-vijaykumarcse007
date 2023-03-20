// complete the given function

function palindrome(str){
	var a=str;
	let len=str.length;
	for(var i=0;i<len;i++){
		if(str.charAt[i]==a.charAt[len-1-i]){
			return true;
		}
		else{
			return false;
		}
	}
}
module.exports = palindrome
