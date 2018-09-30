<%-- 
    Document   : ModificarResultado
    Created on : 2/09/2018, 01:27:05 PM
    Author     : Windows 10 Pro
--%>

<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    ArrayList lista = (ArrayList) request.getAttribute("empleado");
%>
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
        <title>Modificar&nbsp;Empleado</title>
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
                    <center>
                        <form method="POST" autocomplete="off" action="ActualizarEmpleado" id="formModificarEmp" name="formModificarEmp">
                            <table>
                                <tr>
                                    <td>
                                        Empleado
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="idModificarEmp" disabled="disabled" required="required" value="<% lista.get(16); %>"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        Lugar&nbsp;de&nbsp;origen
                                    </td>
                                    <td>
                                        <input class="form-check-input" type="radio" name="empleadoModOrigen" id="origenModMexico" checked="checked" value="mexico"/>
                                        <label for="origenMexico">M&eacute;xico</label>
                                    </td>
                                    <td>
                                        <input class="form-check-input" type="radio" name="empleadoModOrigen" id="origenModExtranjero" value="extranjero"/>
                                        <label for="origenExtranjero">Extranjero</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        CURP
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="curpModificarEmp" required="required" value="<% lista.get(4); %>"/>
                                    </td>
                                    <td>
                                        RFC
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="rfcModificarEmp" required="required" value="<% lista.get(5); %>"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Nombre
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="nombreModificarEmp" required="required" value="<% lista.get(0); %>"/>
                                    </td>
                                    <td>
                                        &Aacute;rea
                                    </td>
                                    <td>
                                        <select class="custom-select custom-select-sm" id="areaModificarEmp" required="required" value="<% lista.get(10); %>">
                                            <option selected="selected" value="">Selecciona&nbsp;un&nbsp;&aacute;rea...</option>
                                            <option value="1">Recursos&nbsp;Humanos</option>
                                            <option value="2">Ventas</option>
                                            <option value="3">Compras</option>
                                            <option value="4">Invetario</option>
                                            <option value="5">Gerencia</option>
                                            <option value="6">Contabilidad</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Primer&nbsp;apellido
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="paternoModificarEmp" required="required" value="<% lista.get(1); %>"/>
                                    </td>
                                    <td>
                                        Puesto
                                    </td>
                                    <td>
                                        <select class="custom-select custom-select-sm" id="puestoModificarEmp" required="required" value="<% lista.get(11); %>">
                                            <option selected="selected" value="">Selecciona&nbsp;un&nbsp;puesto...</option>
                                            <option value="1">Administrador</option>
                                            <option value="2">Empleado&nbsp;de&nbsp;planta</option>
                                            <option value="3">Asistente</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Segundo&nbsp;apellido
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="maternoModificarEmp" required="required" value="<% lista.get(2); %>"/>
                                    </td>
                                    <td>
                                        Tel&eacute;fono
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-sm" id="telModificarEmp" required="required" value="<% lista.get(9); %>"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Edad
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-sm" id="edadModificarEmp" disabled="disabled" min="18" max="80" value="<% lista.get(6); %>" required="required"/>
                                    </td>
                                    <td>
                                        Horario
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="horarioModificarEmp" value="<% lista.get(12); %>" disabled="disabled" required="required"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Lugar&nbsp;de&nbsp;nacimiento
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="lugarModificarEmp" value="<% lista.get(7); %>" disabled="disabled" required="required"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Direcci&oacute;n
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="dirModificarEmp" value="<% lista.get(8); %>" required="required"/>
                                    </td>
                                    <td>
                                        Sueldo
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="sueldoModificarEmp" value="<% lista.get(14); %>" disabled="disabled" required="required"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Nacionalidad
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="nacModificarEmp" value="<% lista.get(3); %>" disabled="disabled" required="required"/>
                                    </td>
                                    <td>
                                        Cuenta&nbsp;bancaria
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-sm" id="cuentaModificarEmp" value="<% lista.get(15); %>" maxlength="16" required="required"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4" align="center">
                                        <input type="submit" value="Registrar" class="btn btn-success"/>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </center>
                </div>
            </div><!-- FIN DE SECCION PRINCIPAL -->
        </div>
    </body>
</html>