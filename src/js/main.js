/* =====================================
Template Name: LearnEdu
Author Name: Zahid ulka
Author URI: http://ithemer.com/
Description: LearnEdu is a Education & Courses Template.
Version:	1.0
========================================*/
/*=======================================
[Start Activation Code]
=========================================
* Sticky Header JS
* Mobile Menu JS
* Slider Active JS
* Circle Progress JS
* Testimonial Slider JS
* CounterUp JS
* Faqs JS
* Video Popup JS
* Blog Slider JS
* Masonry JS
* Parallax JS
* Wow JS
* Scroll JS
* Scroll Up JS
* Preloader JS
=========================================
[End Activation Code]
=========================================*/ 
(function ($) {
    "use strict";
	
	// document ready function
	// ============================================
    jQuery(document).ready(function ($) {
        
		/*=========================================
        owl carouse
        =========================================*/
			$('.secend-benner').owlCarousel({
				items:3,
				lazyLoad:true,
				loop:true,
                dots:false,
                nav: true,
                navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"],
				autoplay:false,
				autoplayTimeout:5000,
				margin:30,
				autoplayHoverPause:true,
				responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  320: {
                    items: 2
                  },
                  640: {
                    items: 3
                  },
                  960: {
                    items: 4
                  },
                  1200: {
                    items: 3
                  }
                }
			});
        /*=========================================
        testimonial slider
        =========================================*/
            $('.testimonial-slider').owlCarousel({
				items:2,
				lazyLoad:true,
				loop:true,
	            dots:false,
                nav:true,
				autoplay:true,
				autoplayTimeout:5000,
				margin:25,
				autoplayHoverPause:true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive:{
                    300: {
                        items:1,
                        nav:false,
                    },
                    480: {
                        items:2,
                        nav:false,
                    },
                    768: {
                        items:2,
                        nav:false,
                    },
                    1170: {
                        items:2,
                    },
                }
			});
        /*=========================================
        Event slider
        =========================================*/
            $('.event-slider').owlCarousel({
				items:3,
				lazyLoad:true,
				loop:true,
            	dots:true,
                nav:true,
				autoplay:true,
				autoplayTimeout:5000,
				margin:25,
				autoplayHoverPause:true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive:{
                    300: {
                        items:1,
                        nav:true,
                    },
                    480: {
                        items:2,
                        nav:true,
                    },
                    768: {
                        items:2,
                        nav:true,
                    },
                    1170: {
                        items:3,
                    },
                }
                
                
			});
        /*=========================================
        Slider text animation
        =========================================*/
			$('.top-benner').owlCarousel({
				items: 1,
				loop: true, 
				autoplay: false,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
				dots: true,
				nav: true,
				navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
			});
        
           	
			// homepage slider animation support
			$(".top-benner").on("translate.owl.carousel", function(){
				$(".slider-text h2").removeClass("animated fadeInDownBig").css({'opacity':'0'});
				$(".slider-text p").removeClass("animated fadeInLeft").css({'opacity':'0'});
				$(".slider-text a").removeClass("animated fadeInUpBig").css({'opacity':'0'});
			});
			
			$(".top-benner").on("translated.owl.carousel", function(){
				$(".slider-text h2").addClass("animated fadeInDownBig").css({'opacity':'0'});
				$(".slider-text p").addClass("animated fadeInLeft").css({'opacity':'0'});
				$(".slider-text a").addClass("animated fadeInUpBig").css({'opacity':'0'});
			});

			/* ======= Pre Loader ======= */
			$('#loading').fadeOut();



	        /* ======= Contact Form ======= */
	        $('#contactForm').on('submit',function(e){

	            e.preventDefault();

	            var $action = $(this).prop('action');
	            var $data = $(this).serialize();
	            var $this = $(this);

	            $this.prevAll('.alert').remove();

	            $.post( $action, $data, function( data ) {

	                if( data.response=='error' ){

	                    $this.before( '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <i class="fa fa-times-circle"></i> '+data.message+'</div>' );
	                }

	                if( data.response=='success' ){

	                    $this.before( '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><i class="fa fa-thumbs-o-up"></i> '+data.message+'</div>' );
	                    $this.find('input, textarea').val('');
	                }

	            }, "json");

	        });
        /*====================================
			Circle Progress JS
			======================================*/ 	
			$('.circle').circleProgress({
				fill: {
					color: '#DD4F42'
				}
			});
	        
        
        
        
        
        
		

		
    });

}(jQuery));