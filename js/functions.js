$(document).ready(function() {

	/**
	 * Evento de scroll suave, cuando se presiona
	 * sobre un elemento del menú.
	 * @param  {Event} event [Evento generado]
	 * @return {boolean} [Evita que el evento se siga
	 * ejecutando.]
	 */
	$(".ancla").click(function(event) {
		var link = $(this);
        var anchor  = link.attr('name');
        $('html, body').stop().animate({
            scrollTop: jQuery(anchor).offset().top
        }, 1000);
        return false;
	});	

	/**
	 * Evento que responde al movimiento del scroll
	 * agregando una clase al nav.	 
	 */
	$(window).scroll(function(){		
		var altura = $("#content").offset().top; 
    	if($(window).scrollTop() >= altura){
    		$("nav").addClass('background-nav');
    		 /*$("nav").css({
    		 	background: '#ccc'
    		 });*/
        }else{
        	$("nav").removeClass('background-nav');
          	 /*$("nav").css({
    		 	background: 'none'
    		 });*/
        }         
	});

	
});