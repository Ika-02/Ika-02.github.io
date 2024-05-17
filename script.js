function LazyLoad(){
    $('section').each(function(){
        let windowHeight = $(window).height();
        let windowScroll = $(window).scrollTop();
        let elementHeight = $(this).outerHeight();
        let elementPosition = $(this).offset().top;
        if (windowScroll > elementPosition - windowHeight + (elementHeight/4)) {
            $(this).removeClass('invisible');
            $(this).addClass('apparition');
        } else {
            $(this).removeClass('apparition');
            $(this).addClass('invisible');
        }
    });
}


$(document).ready(function(){
    // Background animation
    VANTA.FOG({
        el: "#background",
        mouseControls: true,
        touchControls: true,
        highlightColor: 0x787878,
        midtoneColor: 0x925ac7,
        lowlightColor: 0x5e12b8,
        baseColor: 0x252525,
        speed: 1.40,
        zoom: 1.20
    });

    // Typewriter
    $('#me').empty();
    var typerwriter = new TypeIt("#me", {speed: 110, loop: true})
    if ($('html').attr('lang') == 'en'){
        typerwriter
        .type("IT Student", {delay: 2500})
        .delete('*')
        .type("In search of an <strong>internship</strong> abroad")
        .pause(2500)
        .go();
    } else {
        typerwriter
        .type("Étudiant en Informatique", {delay: 2500})
        .delete('*')
        .type("À la recherche d'un <strong>stage</strong> à l'étranger")
        .pause(2500)
        .go();
    }

    // Lazy loading
    $('section').toggleClass('apparition invisible');
    LazyLoad();
    $(window).scroll(function(){LazyLoad();});
});