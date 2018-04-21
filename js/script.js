
$.getJSON( "https://en.gravatar.com/kanduganesh.json", function( data ) {

	console.log(JSON.stringify(data, null, 4));
	
});

$(document).ready(function(){
	
	//tooltip
	//==============================================================================
	//==============================================================================
    $('[data-toggle="popover"]').popover();   
	
	// Add smooth scrolling to all links
	//==============================================================================
	//==============================================================================
	$("a").on('click', function(event) {

	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
	  // Prevent default anchor click behavior
	  event.preventDefault();

	  // Store hash
	  var hash = this.hash;

	  // Using jQuery's animate() method to add smooth page scroll
	  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	  $('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 800, function(){

		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
	  });
	} // End if
	});
	
	//scroll
	//==============================================================================
	//==============================================================================
	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};
	
	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("myBtn").style.display = "block";
		} else {
			document.getElementById("myBtn").style.display = "none";
		}
	}

});

function totop(){
	
	var hash = '#section1';
	
	  // Using jQuery's animate() method to add smooth page scroll
	  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	  $('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 800, function(){

		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
	  });
}
