$(document).ready(function(){
 mostrarOcultar('menu');
 var auto_slider=setInterval(slider_auto,5000);
 var auto_slider1=setInterval(slider_auto1,5000);
 var auto_slider2=setInterval(slider_auto2,5000);
 var auto_slider3=setInterval(slider_auto3,5000);
});
$('#btn_p_h').click(previous_image_h);
$('#btn_n_h').click(next_image_h);
$('#btn_p_p').click(previous_image_p);
$('#btn_n_p').click(next_image_p);
$('#btn_p_s').click(previous_image_s);
$('#btn_n_s').click(next_image_s);
$('#btn_p_x').click(previous_image_x);
$('#btn_n_x').click(next_image_x);

function mostrarOcultar(id) {
	var menu = document.getElementById(id);
	menu.style.display = (menu.style.display == 'none') ? 'block' : 'none'; 
/*  A veces se desea establecer el valor de una variable dependiendo de cierta condición. Para hacerlo se puede utilizar una declaración if/else, sin embargo en muchos casos es más conveniente utilizar el operador ternario. [Definición: El operador ternario evalúa una condición; si la condición es verdadera, devuelve cierto valor, caso contrario devuelve un valor diferente.]

El operador ternario

establecer a foo igual a 1 si bar es verdadero;
     caso contrario, establecer a foo igual a 0
    var foo = bar ? 1 : 0;
El operador ternario puede ser utilizado sin devolver un valor a la variable, sin embargo este uso generalmente es desaprobado.*/

}

// -----------------hec--------------------------
function slider_auto(){
	var size = $('.slider_h').find('.s_element').size();
		$('.slider_h').find('.s_element').each(
			function(index,value){
				if($(value).hasClass('s_visible'))
				{
					$(value).slideUp();
					$(value).removeClass('s_visible');
					if(index+1<size)
					{
						$($('.slider_h').find('.s_element').get(index+1)).slideDown();
						$($('.slider_h').find('.s_element').get(index+1)).addClass('s_visible');
						return false;
					}
					else
					{
						$($('.slider_h').find('.s_element').get(0)).slideDown();
						$($('.slider_h').find('.s_element').get(0)).addClass('s_visible');
						return false;
					}
				}
		});
}
function previous_image_h(id) {  
  id.preventDefault();
  id.stopPropagation();
	  var size = $('.slider_h').find('.s_element').size();
			$('.slider_h').find('.s_element').each(
				function(index,value){
					if($(value).hasClass('s_visible'))
					{
						$(value).slideUp();
						$(value).removeClass('s_visible');
						
						if(index==0)
						{
							$($('.slider_h').find('.s_element').get(size-1)).slideDown();
							$($('.slider_h').find('.s_element').get(size-1)).addClass('s_visible');
							return false;
						}
						else
						{
							$($('.slider_h').find('.s_element').get(index-1)).slideDown();
							$($('.slider_h').find('.s_element').get(index-1)).addClass('s_visible');	
							return false;
						}
					}
			});
}
function next_image_h(id) {
  id.preventDefault();
  id.stopPropagation();
  	var size = $('.slider_h').find('.s_element').size();
		$('.slider_h').find('.s_element').each(
			function(index,value){
				if($(value).hasClass('s_visible'))
				{
					$(value).slideUp();
					$(value).removeClass('s_visible');
					
					if(index+1<size)
					{
						$($('.slider_h').find('.s_element').get(index+1)).slideDown();
						$($('.slider_h').find('.s_element').get(index+1)).addClass('s_visible');
						return false;
					}
					else
					{
						$($('.slider_h').find('.s_element').get(0)).slideDown();
						$($('.slider_h').find('.s_element').get(0)).addClass('s_visible');	
						return false;
					}
				}
		});


}

// -----------------hec--------------------------

// -----------------pal--------------------------
function slider_auto1(){
	var size = $('.slider_p').find('.s_element').size();
		$('.slider_p').find('.s_element').each(
			function(index,value){
				if($(value).hasClass('s_visible'))
				{
					$(value).slideUp();
					$(value).removeClass('s_visible');
					if(index+1<size)
					{
						$($('.slider_p').find('.s_element').get(index+1)).slideDown();
						$($('.slider_p').find('.s_element').get(index+1)).addClass('s_visible');
						return false;
					}
					else
					{
						$($('.slider_p').find('.s_element').get(0)).slideDown();
						$($('.slider_p').find('.s_element').get(0)).addClass('s_visible');
						return false;
					}
				}
		});
}
function previous_image_p(id) {  
  id.preventDefault();
  id.stopPropagation();
	  var size = $('.slider_p').find('.s_element').size();
			$('.slider_p').find('.s_element').each(
				function(index,value){
					if($(value).hasClass('s_visible'))
					{
						$(value).slideUp();
						$(value).removeClass('s_visible');
						
						if(index==0)
						{
							$($('.slider_p').find('.s_element').get(size-1)).slideDown();
							$($('.slider_p').find('.s_element').get(size-1)).addClass('s_visible');
							return false;
						}
						else
						{
							$($('.slider_p').find('.s_element').get(index-1)).slideDown();
							$($('.slider_p').find('.s_element').get(index-1)).addClass('s_visible');	
							return false;
						}
					}
			});
}
function next_image_p(id) {
  id.preventDefault();
  id.stopPropagation();
  	var size = $('.slider_p').find('.s_element').size();
		$('.slider_p').find('.s_element').each(
			function(index,value){
				if($(value).hasClass('s_visible'))
				{
					$(value).slideUp();
					$(value).removeClass('s_visible');
					
					if(index+1<size)
					{
						$($('.slider_p').find('.s_element').get(index+1)).slideDown();
						$($('.slider_p').find('.s_element').get(index+1)).addClass('s_visible');
						return false;
					}
					else
					{
						$($('.slider_p').find('.s_element').get(0)).slideDown();
						$($('.slider_p').find('.s_element').get(0)).addClass('s_visible');	
						return false;
					}
				}
		});


}

// -----------------pal--------------------------
// -----------------sab--------------------------
function slider_auto2(){
	var size = $('.slider_s').find('.s_element').size();
		$('.slider_s').find('.s_element').each(
			function(index,value){
				if($(value).hasClass('s_visible'))
				{
					$(value).slideUp();
					$(value).removeClass('s_visible');
					if(index+1<size)
					{
						$($('.slider_s').find('.s_element').get(index+1)).slideDown();
						$($('.slider_s').find('.s_element').get(index+1)).addClass('s_visible');
						return false;
					}
					else
					{
						$($('.slider_s').find('.s_element').get(0)).slideDown();
						$($('.slider_s').find('.s_element').get(0)).addClass('s_visible');
						return false;
					}
				}
		});
}
function previous_image_s(id) {  
  id.preventDefault();
  id.stopPropagation();
	  var size = $('.slider_s').find('.s_element').size();
			$('.slider_s').find('.s_element').each(
				function(index,value){
					if($(value).hasClass('s_visible'))
					{
						$(value).slideUp();
						$(value).removeClass('s_visible');
						
						if(index==0)
						{
							$($('.slider_s').find('.s_element').get(size-1)).slideDown();
							$($('.slider_s').find('.s_element').get(size-1)).addClass('s_visible');
							return false;
						}
						else
						{
							$($('.slider_s').find('.s_element').get(index-1)).slideDown();
							$($('.slider_s').find('.s_element').get(index-1)).addClass('s_visible');	
							return false;
						}
					}
			});
}
function next_image_s(id) {
  id.preventDefault();
  id.stopPropagation();
  	var size = $('.slider_s').find('.s_element').size();
		$('.slider_s').find('.s_element').each(
			function(index,value){
				if($(value).hasClass('s_visible'))
				{
					$(value).slideUp();
					$(value).removeClass('s_visible');
					
					if(index+1<size)
					{
						$($('.slider_s').find('.s_element').get(index+1)).slideDown();
						$($('.slider_s').find('.s_element').get(index+1)).addClass('s_visible');
						return false;
					}
					else
					{
						$($('.slider_s').find('.s_element').get(0)).slideDown();
						$($('.slider_s').find('.s_element').get(0)).addClass('s_visible');	
						return false;
					}
				}
		});


}

// -----------------sab--------------------------
// -----------------xpu--------------------------
function slider_auto3(){
	var size = $('.slider_x').find('.s_element').size();
		$('.slider_x').find('.s_element').each(
			function(index,value){
				if($(value).hasClass('s_visible'))
				{
					$(value).slideUp();
					$(value).removeClass('s_visible');
					if(index+1<size)
					{
						$($('.slider_x').find('.s_element').get(index+1)).slideDown();
						$($('.slider_x').find('.s_element').get(index+1)).addClass('s_visible');
						return false;
					}
					else
					{
						$($('.slider_x').find('.s_element').get(0)).slideDown();
						$($('.slider_x').find('.s_element').get(0)).addClass('s_visible');
						return false;
					}
				}
		});
}
function previous_image_x(id) {  
  id.preventDefault();
  id.stopPropagation();
	  var size = $('.slider_x').find('.s_element').size();
			$('.slider_x').find('.s_element').each(
				function(index,value){
					if($(value).hasClass('s_visible'))
					{
						$(value).slideUp();
						$(value).removeClass('s_visible');
						
						if(index==0)
						{
							$($('.slider_x').find('.s_element').get(size-1)).slideDown();
							$($('.slider_x').find('.s_element').get(size-1)).addClass('s_visible');
							return false;
						}
						else
						{
							$($('.slider_x').find('.s_element').get(index-1)).slideDown();
							$($('.slider_x').find('.s_element').get(index-1)).addClass('s_visible');	
							return false;
						}
					}
			});
}
function next_image_x(id) {
  id.preventDefault();
  id.stopPropagation();
  	var size = $('.slider_x').find('.s_element').size();
		$('.slider_x').find('.s_element').each(
			function(index,value){
				if($(value).hasClass('s_visible'))
				{
					$(value).slideUp();
					$(value).removeClass('s_visible');
					
					if(index+1<size)
					{
						$($('.slider_x').find('.s_element').get(index+1)).slideDown();
						$($('.slider_x').find('.s_element').get(index+1)).addClass('s_visible');
						return false;
					}
					else
					{
						$($('.slider_x').find('.s_element').get(0)).slideDown();
						$($('.slider_x').find('.s_element').get(0)).addClass('s_visible');	
						return false;
					}
				}
		});


}

// -----------------xpu--------------------------


