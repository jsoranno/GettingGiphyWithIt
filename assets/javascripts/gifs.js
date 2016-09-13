// GLOBAL VARIABLES
	var gifs = ['Will Smith', 'Mase', 'Puff Daddy', 'Sisqo'];
	console.log(gifs);

// ========================================================

	function displayGifs(){
		$("#gifsView").empty();

        var gif = $(this).data('name');
        console.log(this);
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $('<div class="item">')

                    var rating = results[i].rating;

                    var p = $('<p>').text("Rating: " + rating);

                    var artistImage = $('<img>');
                    artistImage.attr('src', results[i].images.fixed_height.url);

                    gifDiv.append(p)
                    gifDiv.append(artistImage)

                    $('#gifsView').prepend(gifDiv);
					}

            	});
        
// ========================================================

	function renderButtons(){ 
		$('#buttonsView').empty();
		for (var i = 0; i < gifs.length; i++){
			// dynamicaly generates buttons for each gif in the array
		    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('gifBtn'); // Added a class 
		    a.attr('data-name', gifs[i]); // Added a data-attribute
		    a.text(gifs[i]); // Provided the initial button text
		    $('#buttonsView').append(a); // Added the button to the HTML
		}
	}
// ========================================================

	$('#addArtist').on('click', function(){
		// This line of code will grab the input from the textbox
		var gifn = $("#gif-input").val().trim();
		console.log(gifn); //this works
		gifs.push(gifn);
		renderButtons();
		return false;
	})

//FUNCTION CALLS
	// ========================================================
	renderButtons();

		//$('document').on('click','.gifBtn',function() {
	
// });
</script>