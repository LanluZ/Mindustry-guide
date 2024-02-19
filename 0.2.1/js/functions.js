jQuery(function($){ "use strict";


//scroll sections
	$(".scroll").click(function(event){
					
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
});

//active jpushmenu navigation	
$('.push_nav li a').on('click', function(){
    $('.push_nav li a.active').removeClass('active');
    $(this).addClass('active');
});

	// JS circleGraphic File 
	$(".myStat").circliful();
	
	// JS MixITup File 
	$(".gallery").mixItUp();
	
	//JS FancyBox
	$(".fancybox").fancybox();

	//owlCarouseltimeline
  $("#text-demo").owlCarousel({
    autoPlay : 2000,
    stopOnHover : true,
    navigation:true,
    paginationSpeed : 1000,
    singleItem : true,

  });
		
		//Animate
		jQuery('.animate').appear();
			jQuery(document.body).on('appear', '.animate', function(e, $affected) {
				var fadeDelayAttr;
				var fadeDelay;
				jQuery(this).each(function(){
				
	
					if (jQuery(this).data("delay")) {
						fadeDelayAttr = jQuery(this).data("delay")
						fadeDelay = fadeDelayAttr;				
					} else {
						fadeDelay = 0;
					}			
					jQuery(this).delay(fadeDelay).queue(function(){
						jQuery(this).addClass('animated').clearQueue();
					});			
				})			
			});

		//PushMenu on click
	jQuery('.toggle-menu').jPushMenu();
	  jQuery(document).on('click', function () {
        jQuery('.cbp-spmenu-left').removeClass('menu-open');
    });
    jQuery('#menu-toggle').on('click', function (e) {
        e.stopPropagation();
        jQuery('.cbp-spmenu-left').toggleClass('menu-open');
    });

//======================
//      Back to top
//======================


// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	
	if(screen.width <720 ){ 
 $('div, img, input, textarea, button, a').removeClass('animate'); // to remove transition
 }
 
});
