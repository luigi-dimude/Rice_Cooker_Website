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

    // Jquery UI accordion - Displays collapsible content panels for presenting information in a limited amount of space.
    $( function() {
       $( "#tabs" ).tabs();
         } );

    // Easing effect - Displays text with easing effect
    var executed = false; 
    $("#video").mouseover( function () {
        if (!executed) {
            $("#display-ease").slideDown(1000, "easeOutBounce");
            executed = true;
        }
 
    });



    
   
}); // end ready

