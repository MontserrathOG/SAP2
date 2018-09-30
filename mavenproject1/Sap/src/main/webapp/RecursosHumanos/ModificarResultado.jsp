<%-- 
    Document   : ModificarResultado
    Created on : 2/09/2018, 01:27:05 PM
    Author     : Windows 10 Pro
--%>

<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    ArrayList lista = (ArrayList) request.getSession().getAttribute("empleado");
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
    <body onload="regreso();">
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
                                        <a href="../index.jsp" class="nav-link">Cerrar&nbsp;sesi&oacute;n</a>
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
                        <form method="POST" autocomplete="off" action="../ActualizarEmpleado" onsubmit=" return validaM();" id="formModificarEmp" name="formModificarEmp">
                            <table>
                                <tr>
                                    <td>
                                        Empleado
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="idModificarEmp" name="idModificarEmp" required="required" value="<%= lista.get(15) %>" readonly="readonly"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        Lugar&nbsp;de&nbsp;origen
                                    </td>
                                    <td>
                                        <%
                                            if(lista.get(3).toString().equals("Mexicana")){
                                                %>
                                                <input class="form-check-input" type="radio" name="empleadoOrigen" id="origenModMexico" checked="checked" value="mexico"/>
                                                <%
                                            }else{
                                                %>
                                                <input class="form-check-input" type="radio" name="empleadoOrigen" id="origenModMexico" value="mexico"/>
                                                <%
                                            }
                                        %>
                                        <label for="origenModMexico">M&eacute;xico</label>
                                    </td>
                                    <td>
                                        <%
                                            if(!lista.get(3).toString().equals("Mexicana")){
                                                %>
                                                <input class="form-check-input" type="radio" name="empleadoOrigen" id="origenModExtranjero" checked="checked" value="extranjero"/>
                                                <%
                                            }else{
                                                %>
                                                <input class="form-check-input" type="radio" name="empleadoOrigen" id="origenModExtranjero" value="extranjero"/>
                                                <%
                                            }
                                        %>
                                        <label for="origenModExtranjero">Extranjero</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        CURP
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="curpModificarEmp" name="curpModificarEmp" required="required" value="<%= lista.get(4) %>" onblur="datosCurpM();">
                                    </td>
                                    <td>
                                        RFC
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="rfcModificarEmp" name="rfcModificarEmp" required="required" value="<%= lista.get(5) %>"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Nombre
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="nombreModificarEmp" name="nombreModificarEmp" required="required" value="<%= lista.get(0) %>"/>
                                    </td>
                                    <td>
                                        &Aacute;rea
                                    </td>
                                    <td>
                                        <select class="custom-select custom-select-sm" id="areaModificarEmp" name="areaModificarEmp" required="required">
                                            <option value="">Selecciona&nbsp;un&nbsp;&aacute;rea...</option>
                                            <%
                                                if(lista.get(10).toString().equals("1")){
                                                    %>
                                                    <option selected="selected" value="1">Gerencia</option>
                                                    <%
                                                }else{
                                                    %>
                                                    <option value="1">Gerencia</option>
                                                    <%
                                                }
                                                if(lista.get(10).toString().equals("2")){
                                                    %>
                                                    <option selected="selected" value="2">Recursos&nbsp;Humanos</option>
                                                    <%
                                                }else{
                                                    %>
                                                    <option value="2">Recursos&nbsp;Humanos</option>
                                                    <%
                                                }
                                                if(lista.get(10).toString().equals("3")){
                                                    %>
                                                    <option selected="selected" value="3">Contabilidad</option>
                                                    <%
                                                }else{
                                                    %>
                                                    <option value="3">Contabilidad</option>
                                                    <%
                                                }
                                                if(lista.get(10).toString().equals("4")){
                                                    %>
                                                    <option selected="selected" value="4">Ventas</option>
                                                    <%
                                                }else{
                                                    %>
                                                    <option value="4">Ventas</option>
                                                    <%
                                                }
                                                if(lista.get(10).toString().equals("5")){
                                                    %>
                                                    <option selected="selected" value="5">Compras</option>
                                                    <%
                                                }else{
                                                    %>
                                                    <option value="5">Compras</option>
                                                    <%
                                                }
                                                if(lista.get(10).toString().equals("6")){
                                                    %>
                                                    <option selected="selected" value="6">Inventario</option>
                                                    <%
                                                }else{
                                                    %>
                                                    <option value="6">Inventario</option>
                                                    <%
                                                }
                                            %>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Primer&nbsp;apellido
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="paternoModificarEmp" name="paternoModificarEmp" required="required" value="<%= lista.get(1) %>"/>
                                    </td>
                                    <td>
                                        Puesto
                                    </td>
                                    <td>
                                        <select class="custom-select custom-select-sm" id="puestoModificarEmp" name="puestoModificarEmp" required="required">
                                            <option value="">Selecciona&nbsp;un&nbsp;puesto...</option>
                                            <%
                                                if(lista.get(11).toString().equals("1")){
                                                    %>
                                                    <option selected="selected" value="1">Administrador</option>
                                                    <%
                                                }else{
                                                    %>
                                                    <option value="1">Administrador</option>
                                                    <%
                                                }
                                                if(lista.get(11).toString().equals("2")){
                                                    %>
                                                    <option selected="selected" value="2">Empleado&nbsp;de&nbsp;planta</option>
                                                    <%
                                                }else{
                                                    %>
                                                    <option value="2">Empleado&nbsp;de&nbsp;planta</option>
                                                    <%
                                                }
                                                if(lista.get(11).toString().equals("3")){
                                                    %>
                                                    <option selected="selected" value="3">Asistente</option>
                                                    <%
                                                }else{
                                                    %>
                                                    <option value="3">Asistente</option>
                                                    <%
                                                }
                                            %>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Segundo&nbsp;apellido
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="maternoModificarEmp" name="maternoModificarEmp" required="required" value="<%= lista.get(2) %>"/>
                                    </td>
                                    <td>
                                        Tel&eacute;fono
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-sm" id="telModificarEmp" name="telModificarEmp" required="required" value="<%= lista.get(9) %>"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Edad
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-sm" id="edadModificarEmp" name="edadModificarEmp" min="18" max="80" value="<%= lista.get(6) %>" required="required"/>
                                    </td>
                                    <td>
                                        Horario
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="horarioModificarEmp" name="horarioModificarEmp" value="<%= lista.get(12) %>" required="required" readonly="readonly"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Lugar&nbsp;de&nbsp;nacimiento
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="lugarModificarEmp" name="lugarModificarEmp" value="<%= lista.get(7) %>" required="required" readonly="readonly"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Direcci&oacute;n
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="dirModificarEmp" name="dirModificarEmp" value="<%= lista.get(8) %>" required="required"/>
                                    </td>
                                    <td>
                                        Sueldo
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="sueldoModificarEmp" name="sueldoModificarEmp" value="<%= lista.get(13) %>" required="required" readonly="readonly"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Nacionalidad
                                    </td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm" id="nacModificarEmp" name="nacModificarEmp" value="<%= lista.get(3) %>" required="required" readonly="readonly"/>
                                    </td>
                                    <td>
                                        Cuenta&nbsp;bancaria
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-sm" id="cuentaModificarEmp" name="cuentaModificarEmp" value="<%= lista.get(14) %>" maxlength="16" required="required"/>
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