
/*A page can't be manipulated safely until the document is "ready." 
jQuery detects this state of readiness for you. 
Code included inside $( document ).ready() will only run once the page 
Document Object Model (DOM) is ready for JavaScript code to execute. */
$(document).ready(function() {
  //use jQuery to assign the user input to variables once the submit button is clicked
  $("#form").submit(function(event) {
  	var string1 = $("input#userInput1").val();
	var string2 = $("input#userInput2").val();
  
	/*isAnagram removes any whitespaces from the string, turns it into an array of the letters, 
	sorts the letters alphabetically, joins the letters back into a string, 
	and then checks if those two strings are equal*/
	function isAnagram(string1, string2) {
		string1 = string1.toLowerCase().replace(/\s+/g,"");
		string2 = string2.toLowerCase().replace(/\s+/g,"");

		lets1 = string1.split('').sort()
		lets2 = string2.split('').sort()

		return (lets1.join('') === lets2.join(''))

	}

	
	//compares the boolean result from isAnagram and uses jQuery to change the html to the appropriate response
	function compare(isAnagram) {
		if (isAnagram === true) {
			$('#message').text("Yes! Those are anagrams!")
		} else {
			$('#message').text("No, those are not anagrams.")
		}
	}

	//calling the functions
	compare(isAnagram(string1, string2));

	//jQuery shows the hidden results div
	$("#result").show();

	//prevents the page from reloading
	event.preventDefault()
  })
})






