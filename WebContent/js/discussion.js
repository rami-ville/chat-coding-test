/* 
 * 
 * DISCUSSION.JS
 * 
 * Handles discussion and updates DOM to view messages
 * 
 *     Construct
 *         parameter
 *             name - name for discussion (String)
 * 
 *     Implements functions:
 *         comment(msg) - handles comments from other users 
 *             parameters
 *                 msg - Message object in JSON ( {"sender":NAME, "message":MESSAGE} )
 *
 *         response(msg) - handles comment or response from user 
 *             parameters
 *                 msg - Message string that was send by user
 *
 */

function Discussion(title, name) {

	this.title = title;
	this.name = name;

	// Update chat title
	$("#chatTitle").text( this.title );

	this.comment = function(msg){
		// Add received message to chatParagraph
		$("#chatParagraph").append( "<p>" + msg.sender + " > " + msg.message + "</p>");
	}

	this.response = function(msg){
		// Add send message to chatParagraph
		$("#chatParagraph").append( "<p>" + this.name + " > " + msg + "</p>");
	   // TODO handle message and update chat window
	}
}