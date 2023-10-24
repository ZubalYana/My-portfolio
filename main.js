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