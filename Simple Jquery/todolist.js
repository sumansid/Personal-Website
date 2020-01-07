$(document).ready(function(){
	$('#additem').click(function(){
		var newListItem = $("#addtolist").val();
		if (newListItem.length != 0){

			$("#todolist").append("<li>"+ newListItem+ "</li>");
			$('#addtolist').val('');

		}



	});

});