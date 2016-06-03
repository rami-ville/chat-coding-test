/* 
 * 
 * USER LOGIN MODULE
 * 
 * Uses Singleton design pattern
 * 
 *     Construct
 *         parameter
 *             name - user name (String)
 * 
 *     Implements functions:
 *         logIn() - Log in user 
 *             parameters
 *                 -
 *
 *         logOut() - Log out user
 *             parameters
 *                 -
 *
 *         loggedIn() - Returns true if user is logged in, otherwise false
 *             parameters
 *                 -
 *
 *         getName() - Returns users name
 *             parameters
 *                 -
 *
 *         say(msg) - Sends message to socket
 *             parameters
 *                 msg - Text string to send
 *
 *         hear(msgObj) - Socket received a message and informs user
 *             parameters
 *                 messageObj - Message from socket as JSON
 *
 *
 */

function User(name){

	//Is there a user object already
    if (typeof User.instance === 'object') {
        return User.instance;
    }
   // Add object properties like this
   this.userName = name;
   this.isLoggedIn = false;
   this.socket = null;

   User.instance = this;
   
   this.logIn= function () {
		// Log In user and create WebSocket connection using socket.js
	   this.socket = new Socket(this.userName);
	   
	   this.isLoggedIn = true;
   }

   this.logOut= function () {
		// Log out user
	   this.socket.close();
	   this.userName = "";
	   this.isLoggedIn = false;
	}

   this.LoggedIn = function () {
		// Is user logged in?
	   return this.isLoggedIn;
	}

   this.getName= function () {
		// return user's name
	   return this.userName;
	}
   
   this.say= function (msg) {
		// Send user message to WebSocket
	   this.socket.send(msg);
		$("#chatParagraph").append( "<p>" + this.userName + " > " + msg + "</p>");
		   // TODO handle message and update chat window

	}
   this.hear= function (msg) {
		// User received message from WebSocket
		$("#chatParagraph").append( "<p>" + msg.sender + " > " + msg.message + "</p>");
	}


   return this;
}

