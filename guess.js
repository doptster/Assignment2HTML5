//initialization
var number_of_guess = 0;
var minimum_number = 0;
var maximum_number = 100;
var true_number = Math.floor(Math.random()*99+1);

function user_guess(){
	var number_entered = document.getElementById("guess_input").value;
	if(number_range_check(number_entered)){
	//function proceed only if the user enter the number in range value
		if(number_entered != true_number){
		number_of_guess++;
		//user guess wrong! but user have minimize the range of numbers
			if(number_entered < true_number && number_entered > 0){
			//the minimum number has increased closer to the true number
				minimum_number = number_entered;
				//change the content of html min value
				document.getElementById("min_value").innerHTML = minimum_number;
			} else if(number_entered > true_number && number_entered < 100){
			//the maximum number has increased closer to the true number
				maximum_number = number_entered;
				//change the content of html max value
				document.getElementById("max_value").innerHTML = maximum_number;
			}
		} else {
		//user won!
			alert("You won!\n You have guess "+number_of_guess+" times!");
		}
	}

}
function number_range_check(number){
	if(number <= minimum_number || number >= maximum_number){
		//the number is not in range, therefore request the user to enter one more time
		alert("Sorry, the number you entered is out of the range!\nPlease try again\nThe range is in between "+minimum_number+" and "+maximum_number+"\nAnd your number is "+number);
		return false;
	} else {
		return true;
	}
}