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
 *         isLoggedIn() - Returns true if user is logged in, otherwise false
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
 *         connected() - Called when socket is connected
 *             parameters
 *                 -
 *
 *         disconnected() - Called when socket is closed
 *             parameters
 *                 -
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
	this.loggedIn = false;
	this.socket = null;
	this.discussion = null;

	User.instance = this;

	this.logIn= function () {
		// Log In user and create WebSocket connection using socket.js
		this.socket = new Socket( this );
	}

	this.logOut= function () {
		// Log out user
		this.socket.close();
	}

	this.isLoggedIn = function () {
		// Is user logged in?
		return this.loggedIn;
	}

	this.getName= function () {
		// return user's name
		return this.userName;
	}

	this.say= function (msg) {
		// Send user message to WebSocket and Discussion
		this.socket.send(msg);
		this.discussion.response(msg);
	}

	this.hear= function (msg) {
		// User received message from WebSocket, so send it to Discussion
		this.discussion.comment(msg);
	}

	this.connected= function () {
		// WebSocket is opened, so we are logged in
		//Create new discussion
		this.discussion = new Discussion("My chat", this.userName);

		this.loggedIn = true;
	}

	this.disconnected= function () {
		// WebSocket is closed, clear parameters
		this.discussion = null;
		this.userName = "";
		this.loggedIn = false;
		User.instance = undefined;
	}

   return this;
}

