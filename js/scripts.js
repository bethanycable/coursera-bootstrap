$(document).ready(function() {
    $('#loginLinkModal').on('click', function() {
        $('#loginModal').modal('show');
    })

    $('#reserveTableBtn').on('click', function() {
        $('#reserveTableModal').modal('show');
    })

    $('#myCarousel').carousel({ interval: 2000 })

    $('#carouselButton').on('click', function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#myCarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else if($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#myCarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});