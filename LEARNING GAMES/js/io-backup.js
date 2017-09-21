	var io = {
		
		processUserAnswer: function(selectorIn,selectorOut){
				// user i/o
			$( "#submitButton" ).click(function() {
			var value = $(selectorIn).val();
			$(selectorOut).text(value);
			});
			
			$(selectorIn).keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#submitButton').click();//Trigger search button click event
			}
			});
		},
		
		CheckUserAnswer: function(correctAnswer,selectorIn,selectorOut){
			
			$( "#submitButton" ).click(function() {
				
			var userAnswer = $(selectorIn).val();
			if(userAnswer == correctAnswer)
			{
				// why doesnt this.successMessage() work?
				$(selectorOut).text(io.successMessage());
				$(".workspace").css('backgroundColor','rgba(0, 255, 0, 1)');
				$("#submitButton").attr("disabled", true);
				
			}
			
			else{
				$(selectorOut).text("Sorry, but the answer is: " + correctAnswer);
				$(".workspace").css('backgroundColor','rgba(255, 0, 0, 0.7)');
			}
			});
			
			$(selectorIn).keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#submitButton').click();//Trigger search button click event
			}
			});
			
		},

		nextProblem: function(){
				$('#nextButton').click(function() {
				location.reload();
			});
			
		} ,
		
		successMessage: function(){
			
			var success = Math.floor((Math.random() * 7) +1);
			switch (success){
        case 1: return "awesome sauce!!!!" ; break;
        case 2: return "You Rock!!!"; break;
        case 3: return "Great Job!!!"; break;
        case 4: return "Fantastic!!!!"; break;
		case 5: return "Math Genius!!!"; break;
		case 6: return "Keep it up!!!"; break;
		case 7: return "Groovy You're Right!!!"; break;
        }
		}
};

