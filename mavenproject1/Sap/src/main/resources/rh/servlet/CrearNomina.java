import db.pojo.Conexion;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Windows 10 Pro
 */
@WebServlet(urlPatterns = {"/CrearNomina"})
public class CrearNomina extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, ClassNotFoundException, SQLException {
        response.setContentType("text/html;charset=UTF-8");
        String empleado = request.getParameter("idCrearNomina");
        String cantidad = request.getParameter("cantidadCrearNomina");
        String estado = request.getParameter("estadoCrearNomina");
        String recurso = request.getParameter("recursoCrearNomina");
        String regimen = request.getParameter("regimenCrearNomina");
        String periodicidad = request.getParameter("periodicidadCrearNomina");
        String tipo = request.getParameter("tipoCrearNomina");
        String percepcion = request.getParameter("percepcionCrearNomina");
        Conexion c = new Conexion();
        ArrayList lista = c.consulta("cuenta", "empleado", "id = "+empleado, 1);
        String cuenta = lista.get(0).toString();
        if(!cuenta.isEmpty()){
            c.insertar("empleado,cantidad,cuenta,estado,origen_recurso,regimen,periodicidad,tipo,percepcion,situacion", "nomina",
                    empleado+","+cantidad+",'"+cuenta+"','"+estado+"','"+recurso+"','"+regimen+"','"+periodicidad+"','"+tipo+"','"+percepcion+"',-1");
        }
        response.sendRedirect("RecursosHumanos/CrearNomina.jsp");
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(CrearNomina.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(CrearNomina.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
