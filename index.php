<!doctype html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="Description" content="Information:Pagina Oficial de la Unacar de la Modalidad Educación a Distancia Author: José Isquierdo Aranda,">
	<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0" />
	<link rel="stylesheet" href="css/diseno.css">
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/flexslider.css">
	<title>Educacion a Distancia UNACAR</title>
</head>
<body>
<header class="sombra">

		<figure class="logo_unacar">
	        			<img src="imagenes/logoo.png" alta="descripción"/>
	    </figure>
		<div class="text_head">
				<p class="uni" >UNIVERSIDAD AUTÓNOMA DEL CARMEN</p>
 		       	<p class="uni" >DIRECCIÓN GENERAL ACADÉMICA</p>
 		       	<p class="uni" >DEPARTAMENTO DE EDUCACIÓN A DISTANCIA E INNOVACIÓN EDUCATIVA</p>
 		</div>
 		<figure class="logo_confraternidad">
	        			<img src="imagenes/confraternidad.png" alta="descripción"/>
	    </figure>
	
	
</header>
	<div class="linea_amarilla sombra"></div>
	<div class="linea_azul sombra"></div>
<nav class="posicion sombra">
			<a onclick="mostrarOcultar('menu')" class="icon-menu" ></a><!-- Al dar click aquí se mostrará u ocultará la lista -->
				<ul id="menu" style="display: none;">
				<li><a href="index.php">INICIO</a></li>
				<li><a href="#">EDUCACIÓN A DISTANCIA</a></li>
				<li><a href="plataforma_institucional.html">PLATAFORMA INSTITUCIONAL</a></li>				
				<li><a href="modulos_ead.html">MÓDULOS EAD</a></li>
				<li><a href="oferta_educativa.html">OFERTA EDUCATIVA</a></li>
				<li id="conctacto"><a href="#">CONTACTO</a></li>
				</ul>
</nav>
<section class="posicion sombra">
	<div id="form">
		<form id="formulario"  method="POST"  style="display:none" enctype="multipart/form-data";   onkeypress="return event.keyCode!=13"  >
			<legend>Llene el siguiente Formulario para aclaración de dudas y/o comentarios y la brevedad posible nos Comunicaremos</legend>
			<p>
			<div id="icon_form"><span class="icon-envelope"></span></div>	
			<label for="Name">Nombre Completo</label>
			<input placeholder="Nombre y Apellidos" class="salida" id="nombre" type="text"  name="nombre"> </p>

			<p>
			<label for="correo">Email</label>
			<input placeholder="tucorreo@dominio.com" class="salida" id="email" type="text" name="email"></p>
			<p>

			<p>
			<label for="tel">Teléfono</label>
			<input placeholder="Telefono de casa" class="salida" id="tel" type="text" name="tel"></p>
			<p>
			<p>
			<label for="cel">Celular</label>
			<input placeholder="Celular" class="salida" id="celular" type="text" name="celular"></p>
			<p>
			<p>
			<label for="ciu">Ciudad</label>
			<input  type="text"class="salida"id="ciudad" name="ciudad"></p>
			<p>
			<p>
			<label for="esta">Estado</label>
			<input  type="text" class="salida" id="estado"name="estado"></p>
			<p>
			<p>
			<label for="asunto">Motivo de Asunto</label>
			<input placeholder="Tipo de asunto" type="text" class="salida" id="asunto"name="asunto"></p>
			<p>
			<label for="coment">Comentario</label>
			<textarea name="comentario"placeholder="Escribe tu comentario" wrap="soft"spellcheck="true" class="salida" resize: none; id="comentario"class="span5"></textarea></p>
			<input id="enviar"   type="submit" value="ENVIAR" /></p>
			<p id="leyenda">“Los datos personales recabados serán protegidos, incorporados y tratados en el  Departamento de Educación a Distancia e Innovación Educativa, con fundamento en el artículo 42 de la ley de Transparencia y Acceso a la Información Publica del Estado de Campeche, cuya finalidad es registrar y gestionar las solicitudes de acceso a la información, recurso de revisión y en su caso, se realizaran las transmisiones previstas en la Ley de Protección de Datos Personales para el Estado de Campeche y sus Municipios.
			Los datos son Obligatorios y sin ellos no podrá acceder al servicio o completar el tramite de acceso a la información y acceso, rectificación, cancelación y oposición de datos.
			Asimismo, se le informa que sus datos no podrán ser difundidos sin su consentimiento expreso salvo a las excepciones prevista en la Ley”</p>
		</form>
	</div>
	<div class="title_oferta">
	</div>	
	<div id="maximo">
			<div id="ok"></div>

				<div id="time"class="time_icon">
					<span class="icon-calendar"></span>
					<?php 
					$meses = array("", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
					echo "".date("d")." de ".$meses[date("n")]." de ".date("Y");
					?>
					<span class="icon-calendar"></span>
 				</div>				
		<div class="flexslider">
		<ul class="slides">
	  	    <li>
	    		<a href="oferta_educativa.html"><img src="imagenes/LAE.png" alt="logo de la Universidad Autonoma del Carmen" /></a>
	    		
	    	</li>
	    	
	    	<li>
	    		<a href="oferta_educativa.html"><img src="imagenes/LTI.png" alt="logo de la Universidad Autonoma del Carmen" /></a>
	    	</li>
	    	<li>
	    		<a href="oferta_educativa.html"><img src="imagenes/LC.png" alt="logo de la Universidad Autonoma del Carmen" /></a>
	    	</li>
	    	<li>
	    		<a href="oferta_educativa.html"><img src="imagenes/LAT.png" alt="logo de la Universidad Autonoma del Carmen" /></a>
	    	</li>
	    	<li>
	    		<a href="http://www.unacar.mx/preinscripcion_2015/prein_virtual.html" target="_blank"><img src="imagenes/ins_linea.jpg" alt="logo de la Universidad Autonoma del Carmen" /></a>
	    	</li>
	    </ul>
	</div>
	<section id="section_art">
	<!-- 	<article class="article_main">       
		      <div class="detalles">
		      	<div class="linea_amarilla_art"></div>
			        <h1 class="title_article"> Educación a Distancia  </h1>
			          <figure class="img_article">
	        			<img src="imagenes/educacion_distancia.jpg" alta="descripción"/>
	               </figure>
			        <p class="text_art" >
			          La Universidad Autónoma del Carmen, a través del Departamento de Educación a Distancia e Innovación Educativa, brinda servicios educativos soportados por tecnologías de la información, como una alternativa más, para dar respuesta inmediata a las necesidades de cobertura
			        </p>
			        <a class="article_btn" href="#" ><strong>Más</strong></a>
		      </div>		  
        </article>
        <article class="article_main">       
		      <div class="detalles">
		      	<div class="linea_amarilla_art"></div>
			        <h1 class="title_article"> MED</h1>
			        <figure class="img_article">
	        			<img src="imagenes/img_unidades_academicas.png" alta="descripción"/>
	                </figure>
			        <p class="text_art" >
			          Gracias al apoyo del Gobierno del Estado de Campeche, a partir del 2010 y 2011 la UNACAR cuenta con 4 Módulos de Educación a Distancia (MED), ubicados en áreas remotas de nuestro estado con los que se pretende hacer llegar los beneficios educativos, tecnológicos y asistenciales 
			        </p>
			        <a class="article_btn" href="modulos_ead.html" ><strong>Más</strong></a>
		      </div>		  
        </article>
        <article class="article_main">       
		      <div class="detalles">
		      	<div class="linea_amarilla_art"></div>
			        <h1 class="title_article"> AVA</h1>
			        <figure class="img_article">
	        			<img src="imagenes/alumnos.jpg" alta="descripción"/>
	               	</figure>
			        <p class="text_art" >
			          La Universidad Autónoma del Carmen, a través del Departamento de Educación a Distancia e Innovación Educativa, brinda servicios educativos soportados por tecnologías de la información, como una alternativa más, para dar respuesta inmediata a las necesidades de cobertura
			        </p>
			        <a class="article_btn" href="http://unacar.sined.mx/inicio/" ><strong>Más</strong></a>
		      </div>		  
        </article>
        <article class="article_main">       
		      <div class="detalles">
		      	<div class="linea_amarilla_art"></div>
			        <h1 class="title_article">Oferta Educativa</h1>
			          <figure class="img_article">
	        			<img src="imagenes/oferta.png" alta="descripción"/>
	               </figure>
			        <p class="text_art" >
			          La Universidad Autónoma del Carmen, a través del Departamento de Educación a Distancia e Innovación Educativa, brinda servicios educativos soportados por tecnologías de la información, como una alternativa más, para dar respuesta inmediata a las necesidades de cobertura
			        </p>
			        <a class="article_btn" href="oferta_educativa.html" ><strong>Más</strong></a>
		      </div>		  
        </article> -->
        <div id="banner">
        	<!-- <img src="imagenes/banner_final.png" alt="banner de Educación a Distancia" />-->
        </div>
	</section>
	</div>
</section>
	
	<div class="linea_azul sombra"></div>
	<div class="linea_amarilla sombra"></div>
<footer class="sombra">	
	<div id="contenido_footer">

	<div class="social_network">
		<p class="title_socnet">Redes sociales</p>
		<p class="text_socnet">
			<a href="http://www.facebook.com/UNACARvirtual" target="_blank" class="F"></a>
			<a href="http://www.youtube.com/UNACARvirtual" target="_blank" class="Y"></a> 
			<a href="http://www.twitter.com/UNACARvirtual" target="_blank" class="T"></a>
		</p>		
	</div>
	<div class="address">
		<p class="title_add">Dirección</p>
		<p class="text_add">
			Avenida 31 S/N esquina con avenida 56
 			C.p. 24118<br>
			Ciudad del Carmen, Campeche, México.
		</p>
		
		
	</div>
	<div class="info">
		<p class="title_info">Información</p>
		<div class="text_info">
			(52) 938 381 1018 Ext 1526
			unacarvirtual@delfin.unacar.mx
			blagarda@delfin.unacar.mx 
		</div>
				
	</div>
	<figure class="logo_ead">
		<img src="imagenes/ead.png" alt="logo de Educación a Distancia de la Unacar"/>
	</figure>

		
</div>
		<div class="line_footer">
			<img src="imagenes/fondo.png" alt="logo de Educación a Distancia de la Unacar"/>
		</div>
	
</footer>
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="js/main.js"></script>
<script src="js/jquery.validate.min.js"></script>
<script type="text/javascript">
      $(document).ready(function() {
      $("#ok").hide();

        $("#formulario").validate({
        rules: {
            nombre: { required: true, minlength: 10},
            email: { required:true, email: true},
            tel: { digits:true},
            celular: { required: true,digits:true,minlength: 10},
            ciudad: { required: true, minlength: 5},
            estado: { required: true, minlength: 5},
            asunto: { required: true, minlength: 4},
            comentario: { required:true, minlength: 10}
        },
        messages: {
            nombre: {
                  required:"Debe introducir su nombre.", 
                  minlength: "Por favor Anexar sus Apellidos ",

              },

            email : {
                  required:"Debe introducir un email ",
                  email:"Debe introducir un email válido.",
            },
            tel : {
                  digits:"Solo se permiten  caracteres numéricos ",
              },
            celular : {
                  required:"Debe introducir un celular ",
                  digits:"Solo se permiten  caracteres numéricos ",
                  minlength: "Datos de  Celular no valido",
              },
            ciudad : {
                   required:"Agregue su Ciudad ",
                   minlength: "ciudad no valida",
              },
            estado: {
                   required:"Agregue su Estado ",
                   minlength: "Estado no valido",
              },
            asunto: {
                   required:"Debe introducir un Asunto ",
                   minlength: "Asunto no valido",
              },
            comentario : {
                  required:"El campo Comentario es obligatorio.",
                  minlength: "Comentario no valido",


                  },

        },
        submitHandler: function(form){
          var dataString = 'nombre='+$('#nombre').val()+'&email='+$('#email').val()+'&tel='+$('#tel').val()+'&celular='+$('#celular').val()+'&ciudad='+$('#ciudad').val()+'&estado='+$('#estado').val()+'&asunto='+$('#asunto').val()+'&comentario='+$('#comentario').val();
            $.ajax({
                type: "POST",
                url:"php/verifica.php",
                data: dataString,
                success: function(data){
                    $("#ok").html(data);
                    $("#ok").show();
                    $("#formulario").hide();
                    $("#nombre,#email,#tel,#celular,#ciudad,#estado,#asunto,#comentario").each(function(){
                    $(this).val('');

                       });
                    setTimeout(function() {$('#ok').fadeOut('fast');}, 3000);

                }
            });
        }
    });
});
</script>
</body>	
</html>