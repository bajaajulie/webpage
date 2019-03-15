
$(document).ready(function() {
window.hashG = null;
  			 
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
			
				
				//set up niceScroll
				$("#navside").niceScroll({horizrailenabled:false,cursorcolor:"#f1f0f0"});

				//color menu item after click
				$("#nav .leaf").click(function(){ 
                       $(this).addClass('clicked');  
                });
				location.hash= '#home';	
				$(window).on('hashchange', function(){
					manageHashChange(window.hashG, location.hash);	
				});
				
				//load page after menu item click			
	            $('.leaf').on('click', function (e){
				e.preventDefault();	
					//CV case
				if($(this).attr("id") == "CV"){
					window.open($(this).find('a').attr('href'), '_blank');
				
				}else{
				
				loadPage('#'+$(this).find('a').attr('href'));
				$('.c').show();
				window.hashG = '#'+$(this).find('a').attr('href');
				location.hash = '#'+$(this).find('a').attr('href');
				}
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
	$('.mapping').mouseover(function() {
    $(this).addClass('hoverArea');
}).mouseout(function(){
   $(this).removeClass('hoverArea');   
});



});

function manageHashChange(hashG,currentHash){
if(currentHash == '#home'){
	$('.welcomePage').show();
	$('.c').hide();
	
}else if (hashG == currentHash){
	console.log(hashG);
}else{
	loadPage(currentHash)
}


	
}

function loadPage(pageHash){
				$('.welcomePage').hide();
                var page = pageHash.substring(1);
                $('#container').load(page, function (){
						
						
						
					if ($(window).width() <= 730) {
						$('#navside').hide();
					}
					
					$("img.lazy").lazyload({
						effect : "fadeIn"
					}); 

					
					//scroll to top
					$('*').animate({ scrollTop: 0 }, 0);
					
					
					addFooter = function(){
					//insert foooter
					windowH = $(window).height();
					height2 =  Math.round(windowH - $('#container').offset().top - $('#container').height() - ($(window).height()*0.01));
					height1 = Math.round((windowH/100)*20);
					if($('#container').height() < $(window).height()){
						$('#container').append("<div class=\"fill\"  style=\"height:" + height2 + "px" + "; width:100%;\"></div>"+"<footer style= \"font-size: 0.9em; position: absolute; bottom: 12px; width: 100%;\"><span>&copy; Baja & Julka</span></br></footer>");	
					}else{						
						$('#container').append("<div class=\"fill\"  style=\"height:" + height1 + "px" + "; width:100%;\"></div>"+"<footer style= \"font-size: 0.9em; position: absolute; bottom: 12px; width: 100%;\"><span>&copy; Baja & Julka</span></br></footer>"); 	
					}
					};
					setTimeout(addFooter, 800);
				
					});	
}

