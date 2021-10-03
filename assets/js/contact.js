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

     // Contact form
    // Moves the focus to the first name text box when the form is first displayed
    $("#fName").focus();

    //  Jquery date picker - only allows for the current date
     $("#date").datepicker({
        minDate: "0d",
        maxDate: "0d"
    });

    
   

    // Utilizes the validate jquery plugin
    $("#ontake-form").validate({
        rules: {
            fName: {
                // Validates if user does not enter a value
                required: true,
                minlength: 2,
                pattern: /^[A-Za-z]+$/
                // Regex pattern, assumes dates for 2000s. Date format : MM/DD/YYYY
                // pattern: /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](20)\d\d$/

            },
            lName: {
                required: true,
                minlength: 2,
                pattern: /^[A-Za-z]+$/
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                pattern: /^\d{9}$/
            },
            message: {
                required: true,
                minlength: 25
            },
            date: {
                required: true
            }
        },
        // Custom error messages
        messages: {
            fName: {
                required: "Please enter your first name."
            },
            lName: {
                required: "Please enter your last name."
            },
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email."
            },
            phone: {
                required: "Please enter your phone number.",
                pattern: "Please enter your 9 digits phone number."
            },
            message: {
                required: "Please enter your message."
            },
            date: {
                required: "Please enter the message date."
            }

        }
    });

    // Make input's border-bottom to be red for invalid entry
    $(".field").blur(function() {
        var eachInput = $(this); 

        if (eachInput.hasClass("error")) {
            eachInput.addClass("border-error");
        }
        else if (eachInput.hasClass("valid")) {
            eachInput.removeClass("border-error");
        }

    });
 

   
    
   
}); // end ready

