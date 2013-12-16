$(document).ready(function(){
 	var questions = [
	 		{question: "What is the capital of the India?", choices: ["Chennai", "New Delhi", "Bangalore", "Kolkata"], correct:1, user_answer:-1},
	 		{question: "What is the capital of the United States Of America?", choices: ["Boston", "New York", "Washington D.C","California"], correct:2, user_answer:-1},
	 		{question: "What is the capital of the Germany?", choices: ["Deustcheland", "Berlin","Hamburg", "Frankfurt"], correct:1, user_answer:-1},
	        {question: "What is the capital of the Thailand?", choices: ["Bangkok", "Chai Nuk", "Pattaya","Rangoon"], correct:0, user_answer:-1},
            {question: "What is the capital of the South Africa?", choices: ["Cape Town", "Johannesburg", "Port Elizabeth","Durban"], correct:0, user_answer:-1}
            ];
                     

	var currentQuestion = 0;
	var showResult = false;
	var userScore =0;
	$("#quest").hide();
	$("#result").hide();
	
	$(".startQuiz").click(function(){
		alert("starting a quiz");
		
		//Hide the Start Quiz button
		$(this).hide("slow");
		$('#showResult').hide("slow");
		
		//Show the first question
		showQuestion(currentQuestion);
	});
	$(".choices").click(function(){
		var question = getQuestions(currentQuestion);
		question.user_answer = parseInt($(this).val()); //val() returns string. We need to convert it to integer.
	});
	$("#nextq").click(function(){
		if(currentQuestion >= questions.length){
			alert("End of quiz. Click Show Results to see your results");
			$("#showResult").show("fast");
		}
		else{
			if (questions[currentQuestion].user_answer===-1){
				alert("Please select an answer")
			}
			currentQuestion++;
			showQuestion(currentQuestion);
		}
		
		return false;
	});
	$("#prevq").click(function(){
		currentQuestion--;
		showQuestion(currentQuestion);
		return false;
	});
	$("#showResult").click(function(){
		$(".show").hide('slow');
		showResult = true;
		currentQuestion = 0;
		showQuestion(currentQuestion);
		calculateAndDisplayScore();
	});
	
	
	//This function returns an element from an array of questions	 
	 function getQuestions(n)
	 {
        return questions[n];        
	 }
	
	//This function shows the nth question and its choices
	function showQuestion(n)
	{
		var qnum = (n+1) + ". " + getQuestions(n).question;
		$("#quest h3").text(qnum);
		//show all the choices
		for(i=0; i<getQuestions(n).choices.length; i++){
			var choice_span = "#choice_"+i+" span";	//"#choice_0 span"
			$(choice_span).text(getQuestions(n).choices[i]);
			$(choice_span).css({color:'black', fontWeight:'normal'});
			//If showResult is true then show the correct answer in green color
			if(showResult)
			{
				if(i === getQuestions(n).correct){
					$(choice_span).css({color:'green', fontWeight:'bold'});
				}
				else if(i === getQuestions(n).user_answer && getQuestions(n).correct !== getQuestions(n).user_answer){
					$(choice_span).css({color:'red', fontWeight:'bold'});
				}
			}
		}
		$("#quest").show();
		$(".choices").prop("checked",false);	//uncheck all radio buttons when showing a question
		return false;
	}
	
	//This function will calculate the Total score and displays that
	function calculateAndDisplayScore()
	{
		for(i=0;i<4;i++)
		{
			var question = getQuestions(i);
			if(question.correct === question.user_answer)
			{
				userScore++;
			}
		}
		
		$("#result").text("Your score: " + userScore + " / " + questions.length);
		$("#result").show();
	}
	//$("#showAnswer").click(function(){
		//alert("answers");
		//$("form","#navigate","#end").hide('fast');
						
	//});
	
});
