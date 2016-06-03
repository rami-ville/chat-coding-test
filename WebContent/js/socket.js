/*
 * 
 * SOCKET.JS
 * 
 * Simple WebSocket implementation for coding test.
 * 
 *     Construct
 *         parameter
 *             userName - user name to used for creating WebSocket connection as query param username
 * 
 *     Implements functions:
 *         send(msg) - send message to socket 
 *             parameters
 *                 msg - message to be send(String)
 *          
 *         close() - close socket
 *             parameters
 *                 -
 *
 *     Handles events for
 *         WebSocket
 *             onopen
 *             onclose
 *             onerror
 *             onmessage
 *
 */

function Socket(userObj) {

	var connected = false;
	// username needs to be URI encoded
	var user = userObj;
	var connection = new WebSocket('ws://codingtest.meedoc.com/ws?username=' + encodeURI(user.getName()));

	connection.onopen = function(){
		/*Send a small message to the console once the connection is established */
		console.log('Connection open!');
		connected = true;
		// Inform user that connection is created and user really connected
		user.connected();
	}

	connection.onerror= function(){
		/*Send a small message to the console on the connection error */
		console.log('Connection error!');
		connected = false;
	}

	connection.onclose= function(){
		/*Send a small message to the console once the connection is closed */
		console.log('Connection close!');
		connected = false;
		// Inform user that user that connection is closed
		user.disconnected();
	}

	connection.onmessage = function(e){
		var server_message = e.data;
		var messageObj;

		console.log(server_message);

		//Parse received message and send it user
		messageObj = jQuery.parseJSON( server_message );
		user.hear(messageObj);
	}

	this.close = function () {
		//Close open connection. Variable connected is changed onclose-event TODO check if there should be close pending state
		if (connected){
			connection.close();
		}
	}

	this.send = function(msg) {
		// Send message to socket if connection is active
		if (connected) {
			connection.send(msg);
		}
	}
};
