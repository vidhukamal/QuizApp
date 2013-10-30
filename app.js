$(document).ready(function(){
	var currentQuestion = 0;
	$("#quest").hide();
	
	$(".startQuiz").click(function(){
		alert("starting a quiz");
		
		//Hide the Start Quiz button
		$(this).hide("slow");
		
		//Show the first question
		showQuestion(currentQuestion);
	});
	
	$("#nextq").click(function(){
		currentQuestion++;
		showQuestion(currentQuestion);
		return false;
	});
	
	//This function returns an element from an array of questions	 
	 function getQuestions(n)
	 {
	 	var questions = [
	 		{question: "What is the capital of the India?", choices: ["Chennai", "New Delhi", "Bangalore", "Kolkata"], correct:1, user_answer:""},
	 		{question: "What is the capital of the United States Of America?", choices: ["Boston", "New York", "Washington D.C","California"], correct:2, user_answer:""},
	 		{question: "What is the capital of the Germany?", choices: ["Deustcheland", "Munich","Hamburg", "Frankfurt"], correct:3, user_answer:""},
	        {question: "What is the capital of the Thailand?", choices: ["Bangkok", "Chai Nuk", "Pattaya","Rangoon"], correct:0, user_answer:""},
            {question: "What is the capital of the South Africa?", choices: ["Cape Town", "Johannesburg", "Port Elizabeth","Durban"], correct:1, user_answer:""}
            ];
        
        return questions[n];
	 }
	
	//This function shows the nth question and its choices
	function showQuestion(n)
	{
		$("#quest h3").text(getQuestions(n).question);
		for(i=0; i<4; i++){
			var choice_id = "#choice_"+i+" span";	//"#choice_0 span"
			$(choice_id).text(getQuestions(n).choices[i]);	
		}		
		$("#quest").show();
		return false;
	}
});
