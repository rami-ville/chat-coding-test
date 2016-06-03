
$( document ).ready(function() {
	var user = null;

	if (user == null) {
		// login modal on page load
		$("#loginModal").modal();
		}

	// When login modal is shown, set focus to user name text box
	$('#loginModal').on('shown.bs.modal', function () {

		// set focus to user name text box
		$('#loginUserName').focus();
	})

	// When login modal is hidden, set focus to chat input box
	$('#loginModal').on('hidden.bs.modal', function () {

		// set focus to user name text box
		$('#inputChatMessage').focus();
	})

	$('#btnLogin').click(function(event){
	    event.preventDefault();

	    // Create user object and log in
		user = new User($('#loginUserName').val());

		user.logIn();
		
		//Set logout link to navbar
		$("#userName").html('<i class="fa fa-sign-out" aria-hidden="true"></i>Log out ' + user.getName());

		//Hide login modal
		$("#loginModal").modal('hide');

	});

	$('#btnSend').click(function(event){
		event.preventDefault();

	    // Send message
		user.say( $("#inputChatMessage").val() );

		//Clear message away and set focus to input
		$("#inputChatMessage").val("");
	    $('#inputChatMessage').focus()
	});
	
	$('#userName').click(function(event){
		event.preventDefault();

		// Logout user
		user.logOut();
		
		//Clear logout link from navbar and trigger login modal
    	$("#userName").html("");
		$("#loginModal").modal()
	});
	
	//TODO Add support to send message with enter 
});
