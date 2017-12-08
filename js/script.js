var element = document.getElementById('sidebar');
var trigger = document.getElementById('js-toggle-sidebar');

var linkNav = document.querySelectorAll('[href^="#"]'),
    V = 1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) {
        e.preventDefault();
        element.classList.toggle('open');
        var w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}

trigger.addEventListener('click', function(e) {
    e.preventDefault();
    element.classList.toggle('open');
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