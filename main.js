let theme = 'light';
let scrollStyle = document.styleSheets[0];

$('.header_themeChanger').click(function(){
    if(theme == 'light'){
        $('.header_themeChanger').css('justify-content', 'flex-end')
        $('.wrap').css('background-color', '#000')
        scrollStyle.insertRule('::-webkit-scrollbar-track { background: #333; }', scrollStyle.cssRules.length);
        $('select').css('background-color', '#000');
        $('.screen').css('color', '#d0dbd7')
        $('a').css('color', '#d0dbd7')
        $('select').css('color', '#d0dbd7')
        $('.header_activeLi').css('background-color', '#d0dbd7');
        $('.header_pages_middleCircle').css('background-color', '#d0dbd7');
        $('.contacts_title').css('color', '#d0dbd7')
        $('.contacts_socialMedia').hover(
            function() {
                $(this).css('color', '#000');
            },
            function() {
                $(this).css('color', '');
            }
        );
        $('#telegram').css('color', '#638074');
        $('#gitHub').css('color', '#62AC8D');
        $('#instagram').css('color', '#7CD3AE');
        $('#phone').css('color', '#87B2A0');
        $('#gmail').css('color', '#9CE5C6');
        $('.header_themeChanger_Circle').css('background-color', '#000')
        theme = 'dark';
    }else{
        $('.header_themeChanger').css('justify-content', 'flex-start')
        $('.wrap').css('background-color', '#fff')
        scrollStyle.insertRule('::-webkit-scrollbar-track { background: #F0F0F0; }', scrollStyle.cssRules.length);
        $('select').css('background-color', '#fff');
        $('.screen').css('color', '#333')
        $('a').css('color', '#333')
        $('select').css('color', '#333')
        $('.header_activeLi').css('background-color', '#333');
        $('.header_pages_middleCircle').css('background-color', '#333');
        $('.contacts_title').css('color', '#333')
        $('.contacts_socialMedia').hover(
            function() {
                $(this).css('color', '#fff');
            },
            function() {
                $(this).css('color', ''); 
            }
        );
        $('#telegram').css('color', '#638074');
        $('#gitHub').css('color', '#62AC8D');
        $('#instagram').css('color', '#7CD3AE');
        $('#phone').css('color', '#87B2A0');
        $('#gmail').css('color', '#9CE5C6');
        $('.header_themeChanger_Circle').css('background-color', '#fff')

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

$('.skillsPage_skill').click(function(){
    $('.skillsPage_popupContainer').css('display', 'flex')
    $(this).removeClass('skillsPage_skill_hover');
})

