$(document).ready(function(){


var $form  = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#link'),
	$primerPost = $('.item').first(),
	$lista = $("#contenido");

if (localStorage.getItem('autosave')) {
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
}, 1000);

function mostrarOcultarFormulario(tito){
	tito.preventDefault();
	tito.stopPropagation();
	$form.slideToggle();
	$lista.slideToggle();
}

function agregarPost(e){
	e.preventDefault();
	e.stopPropagation();
	var titulo = $titulo.val(),
		url = $url.val(),
		clone = $primerPost.clone();

	clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url)
	
	clone.hide()

	$lista.prepend(clone)
	mostrarOcultarFormulario();
	$titulo.val('');
	$url.val('');
	clone.slideDown();
}




$('#conctacto a').click( mostrarOcultarFormulario );
// $('#formulario').on('submit', agregarPost)
	
        $('.carousel slide').carousel({
            interval: 1000
        });


        


       
    });// JavaScript Document


 // var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;	
	// $(".boton").click(function(){  
	// 	$(".error").fadeOut().remove();
		
 //        if ($(".nombre").val() == "") {  
	// 		$(".nombre").focus().after('<span class="error">Ingrese su nombre</span>');  
	// 		return false;  
	// 	}  
 //        if ($(".email").val() == "" || !emailreg.test($(".email").val())) {
	// 		$(".email").focus().after('<span class="error">Ingrese un email correcto</span>');  
	// 		return false;  
	// 	}  
 //        if ($(".asunto").val() == "") {  
	// 		$(".asunto").focus().after('<span class="error">Ingrese un asunto</span>');  
	// 		return false;  
	// 	}  
 //        if ($(".mensaje").val() == "") {  
	// 		$(".mensaje").focus().after('<span class="error">Ingrese un mensaje</span>');   
	// 		return false;  
	// 	}  
 //    });  
	// $(".nombre, .asunto, .mensaje").bind('blur keyup', function(){  
 //        if ($(this).val() != "") {  			
	// 		$('.error').fadeOut();
	// 		return false;  
	// 	}  
	// });	
	// $(".email").bind('blur keyup', function(){  
 //        if ($(".email").val() != "" && emailreg.test($(".email").val())) {	
	// 		$('.error').fadeOut();  
	// 		return false;  
	// 	}  
	// });