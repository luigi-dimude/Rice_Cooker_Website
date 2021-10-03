// Name: Luigi Ekene Dimude
// Student ID: c0799030
// TERM PROJECT
$(document).ready(function() {
    
   
    // Menu plugin
    $("#navbar").highlightMenu({
        color: '#333',
        fontFamily : 'poppins, serif',
        bgColor : '#DEA56A',
        borderColor : '#DEA56A',
        fontSize : '14px'
    });



    // Flicker
    
    	var searchKey;
		$("#flicker-search-input").on('keypress',function(e) {
			searchKey = "";
			if(e.which == 13) {
				// Set the search term
			
			if ($("#flicker-search-input").val() == "") { 
				var html = "";
				html = "<h1 class='searchError text-center'>You must enter a keyword or tag!</h1>";
				$("#insert-photos").html(html);
			}
			else {
				searchKey = $("#flicker-search-input").val();
				// Build the URL based on the search term
				var url = "https://api.flickr.com/services/feeds/photos_public.gne?" +
	    			  	  "format=json&jsoncallback=?&tags=" + searchKey + "&tagmode=all";
	
				$.getJSON(url, function(data){
					var html = "";
					$.each(data.items, function(i, item){
						
						html += "<div class='col-xl-3 col-lg-4 col-md-6 mb-3'>";
                        html += "<img src=" + item.media.m +">";
                        html += "</div>";
						
					});
					$("#insert-photos").html(html);
				});
			}
			}
		});
			// $("#btnSearch").click(function() {
				
			// 	// Set the search term
			// 	searchKey = "";
			// 	if ($("#flicker-search-input").val() == "") { alert("You must enter one or more tags!"); }
			// 	else {
			// 		searchKey = $("#flicker-search-input").val();
			// 		// Build the URL based on the search term
			// 		var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
			// 			  	  "format=json&jsoncallback=?&tags=" + searchKey + "&tagmode=all";
		
			// 		$.getJSON(url, function(data){
			// 			var html = "";
			// 			$.each(data.items, function(i, item){
							
			// 				html += "<div class='col-xl-3 col-lg-4 col-md-6 mb-3'>";
			//                 html += "<img src=" + item.media.m +">";
			//                 html += "</div>";
							
			// 			});
			// 			$("#insert-photos").html(html);
			// 		});
			// 	}
			// });


    
   
}); // end ready

