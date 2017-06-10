$( document ).ready(function() {
  mostrarOcultar('menu');

  var t=setInterval(function(){avanzar();},3000);

	$('#btnAnt').click(function()
	{
		var size = $('.slider').find('.s_element').size();
		$('.slider').find('.s_element').each(
			function(index,value){
				if($(value).hasClass('s_visible'))
				{
					$(value).slideUp();
					$(value).removeClass('s_visible');
					
					if(index==0)
					{
						$($('.slider').find('.s_element').get(size-1)).slideDown();
						$($('.slider').find('.s_element').get(size-1)).addClass('s_visible');
						return false;
					}
					else
					{
						$($('.slider').find('.s_element').get(index-1)).slideDown();
						$($('.slider').find('.s_element').get(index-1)).addClass('s_visible');	
						return false;
					}
				}
		});
	});
	$('#btnSig').click(function()
	{
		var size = $('.slider').find('.s_element').size();
		$('.slider').find('.s_element').each(
			function(index,value){
				if($(value).hasClass('s_visible'))
				{
					$(value).slideUp();
					$(value).removeClass('s_visible');
					
					if(index+1<size)
					{
						$($('.slider').find('.s_element').get(index+1)).slideDown();
						$($('.slider').find('.s_element').get(index+1)).addClass('s_visible');
						return false;
					}
					else
					{
						$($('.slider').find('.s_element').get(0)).slideDown();
						$($('.slider').find('.s_element').get(0)).addClass('s_visible');	
						return false;
					}
				}
		});
	});
	
});


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

function avanzar()
{
	var size = $('.slider').find('.s_element').size();
		$('.slider').find('.s_element').each(
			function(index,value){
				if($(value).hasClass('s_visible'))
				{
					$(value).slideUp();
					$(value).removeClass('s_visible');
					if(index+1<size)
					{
						$($('.slider').find('.s_element').get(index+1)).slideDown();
						$($('.slider').find('.s_element').get(index+1)).addClass('s_visible');
						return false;
					}
					else
					{
						$($('.slider').find('.s_element').get(0)).slideDown();
						$($('.slider').find('.s_element').get(0)).addClass('s_visible');
						return false;
					}
				}
		});
}