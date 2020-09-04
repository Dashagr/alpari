//toggle menu

$(".navbar-links").hide();
$(".toggle-button").on("click", function () {
    $(".toggle-button").toggleClass(' active');
    $(".navbar-links").slideToggle(500);
});

//easy scroll content

var headerHeight = $(".navbar").outerHeight();
$(".scroll").click(function (e) {
    var linkHref = $(this).attr("href");
    $('.navbar-links, .navbar-links').hide();
    $(".toggle-button").toggleClass(' active');
    $("html, body").animate({
            scrollTop: $(linkHref).offset().top - headerHeight,
        },
        1000
    );
    e.preventDefault();
});

//scroll to top

$('.top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
    return false;
})

//popup open
$('.popup-btn').click(function (e) {
    e.preventDefault();
    $('section').css('filter', 'blur(4px)');
    $('.overlay').fadeIn();
    $('.overlay').addClass(' disabled');
});

//cross closing
$('.close').click(function () {
    $('.overlay').fadeOut();
    $('section').css('filter', 'none');
})

$(document).mouseup(function (e) {
    var popup = $('.popup');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.overlay').fadeOut();
        $('section').css('filter', 'none');
    }
});

$('button').click(function (e) {
    $('.overlay').fadeOut();
    $('section').css('filter', 'none');
    e.preventDefault();
    alert('Спасибо!');
})