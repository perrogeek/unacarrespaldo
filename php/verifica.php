<!DOCTYPE HTML>
<html lang="es">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    
</head>

<style type="text/css">
.result_fail{
    width: 50%;
    background: none repeat scroll 0 0 #BC1010;
    border-radius: 20px 20px 20px 20px;
    color: white;
    font-weight: bold;
    padding: 10px 20px;
    text-align: center;
    margin: auto;
}
.result_ok{
    width: 50%;
    background: none repeat scroll 0 0 #1EA700;
    border-radius: 20px 20px 20px 20px;
    color: white;
    font-weight: bold;
    padding: 10px 20px;
    text-align: center;
    margin: auto;
}
</style>
<?php
$errors = array( 
    '<span class="error">Ingrese su nombre</span>',
    '<span class="error">Ingrese un Correo Electronico Valido</span>',
    '<span class="error">Ingrese un Celular</span>',
    '<span class="error">Ingrese una Ciudad</span>',
    '<span class="error">Ingrese un Estado</span>',
    '<span class="error">Ingrese un Asunto</span>',
    '<span class="error">Ingrese un Comentario</span>',


    ); 
$expresion = '/^[0-9]{8}$/'; 
    
        if ($_POST['nombre'] == '') {
                    printf($errors[0]);                      
                    }else if($_POST['email'] == '' or !preg_match("/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/",$_POST['email'])){
                        printf($errors[1]);  
                    // }else if($_POST['tel'] == '' ){
                    //     echo'c';
                            }else if($_POST['celular'] == ''){
                                        printf($errors[2]);
                                            }else if($_POST['ciudad'] == ''){
                                              printf($errors[3]);                         
                                                 }else if($_POST['estado'] == ''){
                                                     printf($errors[4]);
                                                        }else if($_POST['asunto'] == ''){
                                                            printf($errors[5]);
                                                                }else if($_POST['comentario'] == ''){
                                                                    printf($errors[6]);
        }else{
             // $dest = "jisquierdo@delfin.unacar.mx"; //Email de destino
             $nombre = $_POST['nombre'];
             $email = $_POST['email']; 
             $tel = $_POST['tel'];
             $celular = $_POST['celular'];
             $ciudad = $_POST['ciudad'];
             $estado = $_POST['estado'];              
             $asunto = $_POST['asunto'];
             $comentario = $_POST['comentario'];


             include_once("class.phpmailer.php");
             include_once("class.smtp.php");
             $mail = new PHPMailer();
             $mail->Mailer = "smtp";
             $mail->IsSMTP();
             $mail->STMPAuth = true;
             $mail->STMPSecure="ssl";
             $mail->STMPAuth=true;
             $mail->Host="delfin.unacar.mx";
             $mail->Port=25;/*el puerto debe ser 25 no 425 ojo con esto*/
             $mail->From=$email;
             $mail->FromName =($nombre);
             $mail->AddAddress($dest);
             $mail->Username="unacarvirtual@delfin.unacar.mx";
             $mail->Password="uvir3084";
             $mail->Subject=$asunto;
             $body  ="Nombre Completo: ".$nombre."<br>";             
             $body .="Telefono de Casa: ".$tel."<br>";
             $body .="Celular: ".$celular."<br>";
             $body .="Ciudad: ".$ciudad."<br>";
             $body .="Estado: ".$estado."<br>";
             $body .="Comentario: ".$comentario."<br>";
             $mail->Body = $body;
             $mail->WordWrap=70;
             $mail->CharSet = "UTF-8";
             $mail->MsgHTML($body);                 
            
 
             if($mail->Send()){
                echo "<p class='result_ok'> Solicitud enviada correctamente  </p>";
               
               
                 //$result = '<div class="result_ok">Email enviado correctamente </div>';
                // si el envio fue exitoso reseteamos lo que el usuario escribio:
                 
                
             }else{
                    //printf('hubo un error al enviar el mensaje');
          
                echo "<p class='result_fail'>hubo un error al enviar la Solicitud inténtelo de nuevo</p>";

                //"Error: ".$mail->ErrorInfo; 
                 
             }
        }
    
?>
</html>