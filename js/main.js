/*
Christopher Carter
MIU Project Week 4
Term 0212
*/

$(document).ready(function(){

	var gameform = $('#addgameform');
	
	gameform.validate({
		invalidHandler: function(form, validator){
		
		},
		submitHandler: function(){
			var data = gameform.serializeArray();
			localStorage.setItem()
		}
	
	
	});
});