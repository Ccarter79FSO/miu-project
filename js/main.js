$(document).ready(function(){

	var gameform = $('#addgameform');
	
	gameform.validate({
		invalidHandler: function(form, validator){
		
		},
		submitHandler: function(){
			var data = gameform.serializeArray();
			
		}
	
	
	});
});