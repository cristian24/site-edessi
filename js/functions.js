$(document).ready(function() {

	$(".ancla").click(function(event) {
		var link = $(this);
        var anchor  = link.attr('name');
         

        /*$(window).scroll(function(){
	    	if($(window).scrollTop() >= altura){
	    		$( anchor ).effect( "slide", 2000 );     
	        }else{
	          	//$( anchor ).hide( "slide", 1000); 
	        }         
		}); */     

        $('html, body').stop().animate({
            scrollTop: jQuery(anchor).offset().top
        }, 1000);
        return false;
	});	

	$(window).scroll(function(){		
		var altura = $(".content").offset().top; 
    	if($(window).scrollTop() >= altura){
    		 $("nav").css({
    		 	background: '#ccc'
    		 });
        }else{
          	 $("nav").css({
    		 	background: 'none'
    		 });
        }         
	});

	
});