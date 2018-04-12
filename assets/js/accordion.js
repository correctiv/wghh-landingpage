
jQuery(".toggle .toggle-title").click(function(){
    jQuery('html, body').animate({
        scrollTop: $(this).offset().top - 50
    }, 1000);
});