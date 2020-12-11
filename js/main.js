console.log('Hello World');

$('.concepts-list').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#concepts-list").offset().top
    }, 500);    
});

$('.members-list').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#members-list").offset().top
    }, 500);    
});

$('.memories-list').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#memories-list").offset().top
    }, 500);    
});

$('.contacts-list').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#contacts-list").offset().top
    }, 500);    
});
// 最後の数値（500）はmsで目的地まで到達するのに0.3秒かかる

$('.collection-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay:true,
    autoplaySpeed:3000,
    arrows: false,
  });

  $('.to-top').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500, 'swing')
})

