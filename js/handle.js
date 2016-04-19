
$(document).ready(function() {
	
				//mobile button handler
				$(window).resize(function() {
				if ($(window).width() <= 730) {
				$('.mobile-menu-button').show();
				$('#navside').hide();
				}else{
				$('.mobile-menu-button').hide();
				$('#navside').show();
				}
				});
				
				$(window).trigger('resize');
				
				$('.mobile-menu-button').click(function(){
				
					$('#navside').fadeToggle();
				});
				
				//get page url
				var page = $(location).attr('href');
				
				//set up niceScroll
				$("#navside").niceScroll({horizrailenabled:false,cursorcolor:"#f1f0f0"});
				
				//color menu item after click
				$("#nav .leaf").click(function(){ 
                       $(this).addClass('clicked');  
                });

				//load page after menu item click
	            $('.leaf').on('click', function (e){
                e.preventDefault();
                var page = $(this).find('a').attr('href');
                $('#container').load(page, function (){
					if ($(window).width() <= 730) {
						$('#navside').hide();
					}
					$("img.lazy").lazyload({
						effect : "fadeIn"
					});
					$(this).append('<div style="height:20%"></div>');
					});
				});
				
				//handle toogle in menu
				$('.root-name').click(function(){
				$(this).nextAll('.submenu:first').slideToggle(function(){
						$("#navside").mouseenter();
				});
					$(this).addClass('clicked');

				});
				
				//open first page
				//$("#nav .active").trigger("click");
				
				//Nicescroll
				$("#navside").mouseenter(function(){
					$(this).getNiceScroll().resize();
				});
				$("html,body").on('scroll', function(){ 
					$(window).resize();
				});
				
	//fancybox handler	
		$(".fancybox").fancybox();
	/* Apply fancybox to multiple items */
	
	$(".fancybox").fancybox({
		tpl: {
			closeBtn: '<a title="Close" class="fancybox-item fancybox-close myClose" href="javascript:;"></a>'
		},
		openEffect	: 'none',
		closeEffect	: 'none',
		prevEffect		: 'none',
		nextEffect		: 'none',
		helpers	: {
			   overlay: {
				locked: false
				}
		},
		padding:"0"

	});


});
				