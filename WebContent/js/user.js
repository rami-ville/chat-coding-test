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
   
   return this;
}

