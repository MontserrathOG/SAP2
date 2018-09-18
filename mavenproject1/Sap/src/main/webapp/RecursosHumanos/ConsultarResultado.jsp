<%-- 
    Document   : ConsultarResultado
    Created on : 15/09/2018, 02:17:43 PM
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
        <title>Consultar&nbsp;N&oacute;mina</title>
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
                <div class="container-fluid">
                    <scroll-container>
                        <table align="center" class="table-bordered pantallaCompleta">
                            <tr>
                                <td>
                                    N&uacute;mero&nbsp;n&oacute;mina
                                </td>
                                <td>
                                    Empleado
                                </td>
                                <td>
                                    Banco
                                </td>
                                <td>
                                    Estado
                                </td>
                                <td>
                                    Origen&nbsp;recurso
                                </td>
                                <td>
                                    Periodicidad
                                <td>
                                    R&eacute;gimen&nbsp;fiscal
                                </td>
                                <td>
                                    Tipo&nbsp;n&oacute;mina
                                </td>
                                <td>
                                    Tipo&nbsp;percepci&oacute;n
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Valor
                                </td>
                                <td>
                                    Valor
                                </td>
                                <td>
                                    Valor
                                </td>
                                <td>
                                    Valor
                                </td>
                                <td>
                                    Valor
                                </td>
                                <td>
                                    Valor
                                </td>
                                <td>
                                    Valor
                                </td>
                                <td>
                                    Valor
                                </td>
                                <td>
                                    Valor
                                </td>
                            </tr>
                        </table>
                    </scroll-container>
                </div>
            </div><!-- FIN DE SECCION PRINCIPAL -->
        </div>
    </body>
</html>
