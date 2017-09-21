function main()
{
	// math problem generation
	$(".n1").text(math.wholeAndPart());
	$(".n2").text(math.num2);
	var sign = math.operator();
	$(".opSign").text(math.numToSign(sign));
	//$(".ans").text(math.calculate(sign));


		// modulus() testing
		/* $("#whole").text(math.modulus()[0]);
		$("#remainder").text(math.modulus()[1]); */
	
	 
	// user io
	// io.processUserAnswer accepts jquery selectors as parameters
		//io.processUserAnswer("#userValue",".userInput");
		io.CheckUserAnswer(math.calculate(sign),"#userValue","#test");
}		io.nextProblem();

$(document).ready(main);


