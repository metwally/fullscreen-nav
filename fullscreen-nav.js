$('document').ready(function(){


    $('.lin-nav-btn-open').click(function(btn){
        var container = $('.lin-nav-container');
        var span = $('.lin-nav-btn-open span');

        if (container.hasClass('translate-negative')) {
            span.html('X');
        }
        else {
            span.html('MENU');
        }

        container.toggleClass('translate-negative');
        span.toggleClass('lin-nav-text-xlarge');
    });

    $('.lin-nav-btn-close').click(function(btn){
        var container = $('.lin-nav-container');
        container.css('display', 'none');
    });

});
