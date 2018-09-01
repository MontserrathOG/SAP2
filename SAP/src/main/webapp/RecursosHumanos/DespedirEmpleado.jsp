<%-- 
    Document   : DespedirEmpleado
    Created on : 31/08/2018, 01:30:05 PM
    Author     : Windows 10 Pro
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="../Recursos/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <script src="../Recursos/bootstrap/librerias/jquery-3.3.1.min.js" type="text/javascript"></script>
        <script src="../Recursos/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="../Recursos/bootstrap/librerias/popper.min.js" type="text/javascript"></script>
        <link href="../CSS/RecursosHumanos.css" rel="stylesheet" type="text/css"/>
        <script src="../JS/RecursosHumanos.js" type="text/javascript"></script>
        <title>Despedir&nbsp;Empleado</title>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row"><!-- INICIO DE NAVBAR -->
                <div class="container-fluid">
                    <header>
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a href="#" class="navbar-brand text-black">Recursos&nbsp;Humanos</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#rh_navbar" aria-controls="rh_navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="rh_navbar">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item dropdown">
                                        <a href="#" class="nav-link dropdown-toggle" id="empleado" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Empleado</a>
                                        <div class="dropdown-menu" aria-labelledby="empleado">
                                            <a class="nav-link" href="ContratarEmpleado.jsp">Contrataci&oacute;n</a>
                                            <a class="nav-link" href="ActividadEmpleado.jsp">Asignar&nbsp;actividad</a>
                                            <a class="nav-link" href="DespedirEmpleado.jsp">Despido</a>
                                            <a class="nav-link" href="BuscarEmpleado.jsp">Buscar</a>
                                            <a class="nav-link" href="ModificarEmpleado.jsp">Modificar&nbsp;informaci&oacute;n</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a href="#" class="nav-link dropdown-toggle" id="nomina" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">N&oacute;mina</a>
                                        <div class="dropdown-menu" aria-labelledby="nomina">
                                            <a class="nav-link" href="CrearNomina.jsp">Crear</a>
                                            <a class="nav-link" href="EliminarNomina.jsp">Eliminar</a>
                                            <a class="nav-link" href="ConsultarNomina.jsp">Consultar</a>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Cerrar&nbsp;sesi&oacute;n</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                </div>
            </div><!-- FIN DE NAVBAR -->
            <div class="row"><!-- INICIO DE SECCION PRINCIPAL -->
                <div class="container-fluid"></div>
            </div><!-- FIN DE SECCION PRINCIPAL -->
        </div>
    </body>
</html>