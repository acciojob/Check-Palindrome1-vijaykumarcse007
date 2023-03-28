// complete the given function

function palindrome(str){
	var a=str;
	let len=str.length;
	var count1=0;
	var count2=0;
	for(var i=0;i<len;i++){
		if(str.charAt[i]===str.charAt[len-1-i]){
			count1+=1;
		}
		else{
			count2+=1;
		}
	}
	if(count2>=1){
		return false;
	}
	else{
		return true;
	}
}
module.exports = palindrome
