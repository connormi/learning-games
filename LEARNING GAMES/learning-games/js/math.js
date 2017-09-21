

var math = {
    num1: Math.floor(Math.random() * 100),
    num2: Math.floor((Math.random() * 100)+1),
	
	 wholeAndPart: function(){
		while (this.num1 < this.num2)
			{
				this.num1 = Math.floor(Math.random() * 100) 
    
			}
		
			return this.num1;
    },
	
	operator: function(){
		var signs = Math.floor((Math.random() * 4) +1)
		
		return signs;
	},
	
	numToSign: function(num){
		switch (num){
        case 1: return "+"; break;
        case 2: return "-"; break;
        case 3: return "*"; break;
		case 4: return "/"; break;
        }
	},
	
	calculate: function(op){
		switch (op){
        case 1: return this.num1 + this.num2; break;
        case 2: return this.num1 - this.num2; break;
        case 3: return this.num1 * this.num2; break;
        case 4: return this.modulus(); break;
        }	
	},
	
	modulus: function(){
		
		var intAnswer = Math.floor(this.num1/this.num2);
		var remainder = this.num1%this.num2;
		var answerAndRemainder = [intAnswer,remainder];
		
		if( remainder != 0 /*&& this.num2 !=0*/){
			return answerAndRemainder[0] + " R" + answerAndRemainder[1];
		}
			else 
				return this.num1/this.num2;
	}
};
