/* меню */
$(document).ready(function(){
    $('.js-nav').click(function(e){
        e.preventDefault();
        $('.js-sidebar').removeClass('open');
        var block = $($(this).attr('href'));
        scrollTo = (block.offset().top - 60)+'px';
        console.log(scrollTo - 60);
        $('html').animate({
            scrollTop: scrollTo
        }, 2000);
    });
    $('.js-slide-menu').click(function(e){
        e.preventDefault();
        $('.js-sidebar').toggleClass('open');
    });
});

/* 
	Меняем цвет шрифта неактивного 
	select выбора года рождения 
*/
$(document).ready(function(){
	$('.js-select-year').change(function(){
		currValue = $(this).val();
		if ( currValue == 0 ) {
			$(this).removeClass('active');
		} else if (!$(this).hasClass('active')) {
			$(this).addClass('active');
		}
	});
});

/* range change */
$(document).ready(function(){
    $('.js-range').change(function(){
        currValue = $(this).val();
        $('.js-gradient').css({'width':currValue*25+'%'});
    });
});