let theme = 'light';
$('.header_themeChanger').click(function(){
    if(theme == 'light'){
        $('.header_themeChanger').css('justify-content', 'flex-end')
        theme = 'dark';
    }else{
        $('.header_themeChanger').css('justify-content', 'flex-start')
        theme = 'light';
    }

})
let photo = 'defolt';

$('#myPhoto').click(function() {
    if (photo === 'defolt') {
        $("#myPhoto").css("opacity", 0.9);
        setTimeout(function() {
            $('#myPhoto').attr('src', './img/My photo 2.png')
            $("#myPhoto").css("opacity", 1);
        }, 200);
        photo = 'secondOne';
    } else if (photo === 'secondOne') {
        $("#myPhoto").css("opacity", 0.9);
        setTimeout(function() {
            $('#myPhoto').attr('src', './img/My photo 3.png')
            $("#myPhoto").css("opacity", 1);
        }, 200);
        photo = 'thirdOne';
    } else if (photo === 'thirdOne') {
        $("#myPhoto").css("opacity", 0.9);
        setTimeout(function() {
            $('#myPhoto').attr('src', './img/My photo.png')
            $("#myPhoto").css("opacity", 1);
        }, 200);
        photo = 'defolt';
    }
});
