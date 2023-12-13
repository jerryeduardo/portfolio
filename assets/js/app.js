// Scroll suave para link interno
if($(window).width() > 992){
	// Animação da Navbar
	$(window).scroll(function(){
		if($(this).scrollTop() > 60){
			$('.navbar').css('borderBottom', '0.5px solid rgb(245, 245, 245)');
			$('.navbar').css('height', '60px');
			$('.logo').css('marginTop', '20px');
			$('.page').css('marginTop', '1px');
		} else {
			$('.navbar').css('borderBottom', 'none');
			$('.navbar').css('height', '80px');
			$('.logo').css('marginTop', '29px');
			$('.page').css('marginTop', '11px');	
		}
	});

	$(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $('.scroll-to').fadeIn();
        } else {
            $('.scroll-to').fadeOut();
        }
	});
	
	$('.logo a.inpage, .menu-desktop a.inpage, .scroll-to a.inpage').click(function(e){
		e.preventDefault();
		
		/*
		$('a').each(function () {
            $(this).removeClass('active-link');
        })
		$(this).addClass('active-link');
		*/
		
		var id = $(this).attr('href'),
				menuHeight = $('nav').innerHeight(),
				targetOffset = $(id).offset().top;
		$('html, body').animate({
			scrollTop: targetOffset - 80
		}, 700);
	});
} else {
	// Animação da Navbar
	$(window).scroll(function(){
		if($(this).scrollTop() > 20){
			$('.navbar').css('borderBottom', '0.5px solid rgb(245, 245, 245)');
			$('.navbar').css('height', '55px');
			$('.logo').css('marginTop', '17px');
			$('.menu-mobile').css('top', '55px');
			$('.bars').css('marginTop', '17px');
		} else {
			$('.navbar').css('borderBottom', 'none');
			$('.navbar').css('height', '75px');
			$('.logo').css('marginTop', '27px');
			$('.menu-mobile').css('top', '75px');
			$('.bars').css('marginTop', '27px');
		}
	});

	$(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $('.scroll-to').fadeIn();
        } else {
            $('.scroll-to').fadeOut();
        }
	});
	
	$('.logo a.inpage, .menu-mobile a.inpage, .scroll-to a.inpage').click(function(e){
		e.preventDefault();
		var id = $(this).attr('href'),
				menuHeight = $('nav').innerHeight(),
				targetOffset = $(id).offset().top;
		$('html, body').animate({
			scrollTop: targetOffset - 75
		}, 700);
	});
}

// Animação do menu mobile
var menuMobile = document.querySelector(".menu-mobile");
var menuItem = document.querySelectorAll(".menu-item");
var btnBars = document.querySelector(".btn-bars");
var iconBars = document.querySelector(".icon-bars");
var iconClose = document.querySelector(".icon-close");

function toggleMenu(){
	if(menuMobile.classList.contains("show-menu")){
		menuMobile.classList.remove("show-menu");
		iconBars.style.display = "block";
		iconClose.style.display = "none";
  	} else {
    menuMobile.classList.add("show-menu");
    iconBars.style.display = "none";
	iconClose.style.display = "block";
	}
}

btnBars.addEventListener("click", toggleMenu);

menuItem.forEach( 
	function(menuItem){ 
		menuItem.addEventListener("click", toggleMenu);
	}
)

btnBars.addEventListener("click", toggleMenu);

// Webp
Modernizr.on('webp', function(result){
    if(result){
        $('.img-webp').each(function(){
            this.src = $(this).data('webp');
        });
    } else {
        $('.img-webp').each(function(){
            this.src = $(this).data('original');
        });
    }
});