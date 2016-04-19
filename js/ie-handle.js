$(document).ready(function() {
	
				//resize css shift
				$(window).resize(function() {
					if ($(window).width() > 1400){
					$("#size-stylesheet").attr("href", "styles/ie/1400.css");			
				}else
				if ($(window).width() <= 1400 && $(window).width() > 950){
					$("#size-stylesheet").attr("href", "styles/ie/950.css");
					
					
				}else if ($(window).width() <= 950 && $(window).width() > 730) {
				$("#size-stylesheet").attr("href", "styles/ie/730.css");
				}else if($(window).width() <= 730){
					$("#size-stylesheet").attr("href", "styles/ie/0.css");
				}
				});
});