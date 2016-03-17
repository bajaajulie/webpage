
$(document).ready(function() {
	
				//temp
				$('#width').on('click',function(){
				var width = $( window ).width();	
				$('#seewidth').html(width);	
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
					$("img.lazy").lazyload({
						effect : "fadeIn"
					});
					});
				});
				
				//handle toogle in menu
				$('.root-name').click(function(){
					$(this).addClass('clicked');
					$(this).next('.submenu').slideToggle(function(){
						$("#navside").mouseenter();
				});
				});
				
				//open first page
				//$("#nav .active").trigger("click");
				
				//Nicescroll
				$("#navside").mouseenter(function(){
					$(this).getNiceScroll().resize();
				});
				$("html,body").on('scroll', function(){ 
					$(window).resize() 
				});
				
	//fancybox handler	
		$(".fancybox").fancybox();
	/* Apply fancybox to multiple items */
	
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
		prevEffect		: 'none',
		nextEffect		: 'none',
		helpers	: {
			   overlay: {
				locked: false,
				}
		},
		padding:"0",
		    tpl: {
        closeBtn: '<a title="Close" class="fancybox-item fancybox-close myClose" href="javascript:;"></a>'
    }
	});


});
				