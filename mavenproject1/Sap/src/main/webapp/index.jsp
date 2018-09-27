<%-- 
    Document   : index
    Created on : 18/03/2018, 01:40:17 PM
    Author     : fgb
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>SAPito</title>
        
        <link href="Recursos/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css"/>
        <script src="Recursos/bootstrap/librerias/jquery-3.3.1.min.js" type="text/javascript"></script>
        <script src="Recursos/bootstrap/js/bootstrap.js" type="text/javascript"></script>
        <script src="Recursos/bootstrap/librerias/popper.min.js" type="text/javascript"></script>
        
    </head>
    <body>
        
        <div class="rounded" id="login">
            
            <form class="rounded" id="form-login" action="Login" method="POST" autocomplete="off">
                <fieldset class="rounded" id="campo-login">
                    <legend>Bienvenido</legend>
                    <table id="acceso">
                        <tr>
                            <td>Usuario:</td>
                            <td><p><input type="text" name="user" id="user" required="required" /></p></td>
                        </tr>
                        <tr>
                            <td>Contrase&#241;a:</td>
                            <td><p><input type="password" name="pass" id="pass" required="required" /></p></td>
                        </tr>   
                        <tr>
                            <td class="boton"><p><input type="reset" value="Cancelar"  /></p></td>
                            <td class="boton"><p><input type="submit" name="entrar" id="entrar" value="entrar" /></p></td>
                        </tr>   
                    </table>  
                </fieldset>
            </form>
        </div>
    </body>
</html>
