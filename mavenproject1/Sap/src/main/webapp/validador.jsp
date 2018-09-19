<%-- 
    Document   : validador
    Created on : 18/03/2018, 06:27:49 PM
    Author     : fgb
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>        
        <%!
            String nombre;
            String passwd;
        %>
    </head>
    <body>
        <%
            nombre=request.getParameter("user");
            passwd=request.getParameter("pass");
            if(nombre.equals("conta")&&passwd.equals("conta"))
            {
                response.sendRedirect("Contabilidad/Contabilidad.html");                
            }
            else if(nombre.equals("rh")&&passwd.equals("rh")){
                response.sendRedirect("RecursosHumanos/rh_index.jsp");
            }         
            else if(nombre.equals("gerencia")&&passwd.equals("gerencia")){
                response.sendRedirect("Gerencia/InicioGerencia.html");
            }
            else{
                response.sendRedirect("index.jsp");
            }
        %>
    </body>
</html>
