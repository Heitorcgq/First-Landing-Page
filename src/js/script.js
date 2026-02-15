$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars');
        $(this).find('i').toggleClass('fa-xmark');
    });
});
