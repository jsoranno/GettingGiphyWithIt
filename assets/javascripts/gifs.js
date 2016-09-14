// GLOBAL VARIABLES
	var gifs = ['Will Smith', 'Mase', 'Puff Daddy', 'Sisqo', 'Tupac', 'Biggie'];
	//console.log(gifs);
	var siren = new Audio();
	siren.src = "siren.mp3";
// ========================================================
	//function playSound(){
		//siren.play();
	//}
	function displayGifs(){
		$("#gifsView").empty();

        var findGif = $(this).attr('data-name');
        	console.log(this);
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + findGif + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            }) //end ajax
            .done(function(response) {
                var results = response.data;
                console.log(results);
                for (var i = 0; i < results.length; i++) {
                    var rating = results[i].rating;
                    var p = $('<p>').text("Rating: " + rating);
                    var artistImage = $('<img>');
                    artistImage.addClass('clickImage');
                    artistImage.attr('src', results[i].images.fixed_height.url);
                    artistImage.attr('data-still', results[i].images.fixed_height_still.url);
                    artistImage.attr('data-animate', results[i].images.fixed_height.url)
                    artistImage.attr('data-state', 'still');

                    $('#gifsView').append(p);
                    $('#gifsView').append(artistImage);
				} // end for loop
			}); //end .done
} //end displayGifts
// ========================================================

$(document).on('click', ".clickImage", function(){
	var state = $(this).attr('data-state'); 
	if (state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }else{
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    } // end state
}); // end on click           
        
// ========================================================

function renderButtons(){ 
	$('#buttonsView').empty();
	for (var i = 0; i < gifs.length; i++){
	    var a = $('<button>'); 
	    // a.addClass('gifBtn');
	    a.addClass('gifBtn btn btn-info btn-md'); 
	    a.attr('data-name', gifs[i]); 
	    a.text(gifs[i]);
	    $('#buttonsView').append(a);
	} // end for loop
} // end renderButtons
// ========================================================

$('#addArtist').on('click', function(){
	//doesn't render a button if empty
	if($("#gif-input").val() == ""){}
	else{
	// This line of code will grab the input from the textbox
	var gifn = $("#gif-input").val().trim();
	//console.log(gifn); //this works
	gifs.push(gifn);
	renderButtons();
	return false;
		}//ends else
}) //end add artist on click

$(document).on('click', '.gifBtn', displayGifs);
$(".gifBtn").on('click', siren.play());


//end on click

	// ========================================================

renderButtons();