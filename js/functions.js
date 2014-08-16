$(document).ready(function() {

	var sections = new Array();
	var altura_sections = new Array();
	llenarVectores();

	/**
	 * Evento de scroll suave, cuando se presiona
	 * sobre un elemento del menú.
	 * @param  {Event} event [Evento generado]
	 * @return {boolean} [Evita que el evento se siga
	 * ejecutando, tiene como dependencia jquery-easing.js.]
	 */
	$(".ancla").on("click", function(event) {
		var link = $(this);
        var section  = link.attr('name');
        $('html, body').stop().animate({
            scrollTop: $(section).offset().top
        }, 1500, 'easeInOutExpo');
        return false;
	});	

	function llenarVectores(){
		$('#content').children().each(function (i) { 
			var child = "#"+$(this).attr("id");
			var child_altura = $(child).offset().top; 
			
			sections[i] = child;
			altura_sections[i] = child_altura;
		});
	}

	/**
	 * Funcion encargada de activar el item del menu, que
	 * corresponde a la seccion actual que el usuario esta
	 * observando.
	 * @param  {int} scroll    Valor de la altura del scroll.
	 * @param  {int} Aitem     Valor de la altura de la seccion. 
	 * @param  {String} id     Valor del identificador de la seccion.
	 * @param  {int} AitemNext Valor de la proxima seccion.
	 */
	function activeItemMenu(scroll, Aitem, id, AitemNext){
		if(AitemNext == null){
			if(scroll >= Aitem){
				$("#menu>ul>li[name|='#"+id+"']").addClass('section-active');			
			}else{
				$("#menu>ul>li[name|='#"+id+"']").removeClass('section-active');
			}
		}else{
			if((scroll >= Aitem) && (scroll < AitemNext)){
				$("#menu>ul>li[name|='#"+id+"']").addClass('section-active');			
			}else{
				$("#menu>ul>li[name|='#"+id+"']").removeClass('section-active');
			}
		}
		
	}

	/**
	 * Evento que responde al movimiento del scroll
	 * agregando una clase al nav.	 
	 */
	$(window).scroll(function(){		
		var altura = $("#content").offset().top;
		var altura_scrl_page = $(window).scrollTop()+50;

		var altura_section_conoce = $("#conoce").offset().top;
		var altura_section_service = $("#service").offset().top;
		var altura_section_portafolio = $("#portafolio").offset().top;
		var altura_section_contacto = $("#contacto").offset().top;

		activeItemMenu(altura_scrl_page, altura_section_conoce, "conoce", altura_section_service);
		activeItemMenu(altura_scrl_page, altura_section_service, "service", altura_section_portafolio);
		activeItemMenu(altura_scrl_page, altura_section_portafolio, "portafolio", altura_section_contacto);
		activeItemMenu(altura_scrl_page, altura_section_contacto, "contacto", null);

		/*for(var i in sections){
			if(($(window).scrollTop() >= altura_sections[i]) && ($(window).scrollTop() < altura_sections[i+1])){
				$("#menu>ul>li[name|='"+sections[i]+"']").addClass('section-active');
				console.log(sections[i]);
			}else{
				$("#menu>ul>li[name|='"+sections[i]+"']").removeClass('section-active');
				console.log(sections[i+1]);
			}
		}	*/	
		
    	if((altura_scrl_page+100) >= altura){
    		$("nav").addClass('background-nav');    		 
        }else{
        	$("nav").removeClass('background-nav');          	 
        }         
	});
	
});