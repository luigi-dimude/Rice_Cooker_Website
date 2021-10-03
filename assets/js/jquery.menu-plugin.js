// Menu plugin
(function($) {
    // Default options
    $.fn.highlightMenu = function(options) {
       var defaults = $.extend({
        'bgColor' : '#333',
        'color' : 'pink',
        'fontFamily' : 'serif',
        'borderColor' : '#333',
        'fontSize' : '20px'
       }, options);

       return this.each(function() {
        // links
        var items = $("nav li a");
        // button
        var btn = $("nav li a.nav-btn");
        var o = defaults;

        // link style
        items.css('text-decoration', 'none')
             .css('font-weight', 'bold')
             .css('font-family', o.fontFamily)
             .css('font-size', o.fontSize)
             .css('color', o.color);

        // Hover for button
        btn.mouseover(function() {
            $(this).css('background-color', '#FFF')
            .css('color', o.bgColor);
               });
           btn.mouseout(function() {
               $(this).css('background-color', o.bgColor)
               .css('color', '#FFF');
               });
        
        // DButton style
        btn.css('background-color', o.bgColor)
           .css('border-color', o.borderColor)
           .css('color', '#FFF');
        });
        
    }
})(jQuery); 
