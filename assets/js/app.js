$document.ready() {

    $('.js--scroll-to-about').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
     });
     
     $('.js--scroll-to-portfolio').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
     });
    
     $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
     });
     
}
