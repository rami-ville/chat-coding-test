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
		$("#chatParagraph").append( '<div class="row"><div class="col-xs-2"><p class="chat-name">' + msg.sender + '</p></div><div class="col-xs-1"><p class="chat-sign"><i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i></p></div><div class="col-xs-6"><p class="chat-message">' + msg.message + '</p></div></div></div>');
	}

	this.response = function(msg){
		// Add send message to chatParagraph
		$("#chatParagraph").append( '<div class="row"><div class="col-xs-offset-3 col-xs-6"><p class="chat-message">' + msg + '</p></div><div class="col-xs-1"><p class="chat-sign"><i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i></p></div><div class="col-xs-2"><p class="chat-name">' + this.name + '</p></div></div></div>');
	}
}
