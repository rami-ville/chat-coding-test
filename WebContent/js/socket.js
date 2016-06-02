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

function Socket(userName) {

	var connected = false;
	// username needs to be URI encoded
	var name = encodeURI(userName);
	var connection = new WebSocket('ws://codingtest.meedoc.com/ws?username=' + name);

	connection.onopen = function(){
		/*Send a small message to the console once the connection is established */
		console.log('Connection open!');
		connected = true;
   		// TODO implement update to user.js that connection is created and user really connected
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
   		// TODO implement update to user.js that connection is closed
	}

	connection.onmessage = function(e){
	   var server_message = e.data;
	   console.log(server_message);
	   // TODO handle message and update chat window
	}

	this.close = function () {
		//Close open connection. Variable connected is changed onclose-event TODO check if there should be close pending state
		if (connected){
			connection.close();
		}
	}

	this.send = function(msg) {
		// Send message to socket if connection is active
		if (connected)
			connection.send(msg);
	}

};

