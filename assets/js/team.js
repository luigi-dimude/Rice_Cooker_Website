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





    // Display team details by retrieving data from Json file
    $(".team-member li a").click(function(e){
        var str = $(this).parent().index();
        var index = parseInt(str);        

        var html = "";
	

        $.ajax({
            url: 'teamOntake.json',
            beforeSend : function() {
                html = "<h1>Loading...</h1>";
            },
            dataType: 'json',
            type: 'get',
            success: function(data) {
                html = "";
                html += "<img class='team-img' src='images/" + index + ".jpg'></img>";
                html += "<p><span>Name</span>: " + data.employees[index].name + "</p>";
                html += "<p><span>Title</span>: " + data.employees[index].title + "</p>";
                html += "<p><span>Department</span>: " + data.employees[index].department + "</p>";
                html += "<p><span>Bio</span>: " + data.employees[index].bio + "</p>";

                $(".team-details").html(html).hide().fadeIn(300);
            },

            error: function(){

                html += "<h1 class='error'>Error: Somthing went wrong</h1>";

                $(".team-details").html(html);
            }

        });
       e.preventDefault();
    });
    
    // Styling content with Jquery functions
    $(".team-details").css("display", "flex");
    $(".team-details").css("padding", "3em");
    $(".team-details").css("justifyContent", "center");
    $(".team-details").css("alignItems", "center");
    $(".team-details").css("fontFamil", "monospace, Arial");
    $(".team-details").css("flexDirection", "column");

    



    
   
}); // end ready