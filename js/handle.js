
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
				$('.welcomePage').hide();
                e.preventDefault();
                var page = $(this).find('a').attr('href');
                $('#container').load(page, function (){
					
					if ($(window).width() <= 730) {
						$('#navside').hide();
					}
					
					$("img.lazy").lazyload({
						effect : "fadeIn"
					}); 
					
					//scroll to top
					$('html, body').animate({ scrollTop: 0 }, 0);
					
					//insert foooter
					windowH = $(window).height();
					height2 = windowH - $('#container').offset().top - $('#container').height() - ($(window).height()*0.02);
					height1 = (windowH/100)*20;
					if($('#container').height() < $(window).height()){
						$(this).append("<div class=\"fill\"  style=\"height:" + Math.round(height2) + "px" +"; width:100%;\"></div><footer style= \"font-size: 0.9em; position: absolute; bottom: 12px; width: 100%;\"><span>&copy; Baja & Julka</span></br></footer>"); //<span><a href=\"mailto:julia@artmap.cz\">julia@artmap.cz</a></span></br><span><a href=\"mailto:barborazentkova@gmail.com\">barborazentkova@gmail.com</a></span>		
					}else{						
						$(this).append("<div class=\"fill\"  style=\"height:" + Math.round(height1) + "px"+"; width:100%;\"></div><footer style= \"font-size: 0.9em; position: absolute; bottom: 12px; width: 100%;\"><span>&copy; Baja & Julka</span></br></footer>"); //<span><a href=\"mailto:julia@artmap.cz\">julia@artmap.cz</a></span></br><span><a href=\"mailto:barborazentkova@gmail.com\">barborazentkova@gmail.com</a></span>		
					}
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
				