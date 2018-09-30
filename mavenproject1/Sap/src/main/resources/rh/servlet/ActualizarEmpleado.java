
import db.pojo.Conexion;
import java.io.IOException;
import java.sql.SQLException;
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
@WebServlet(urlPatterns = {"/ActualizarEmpleado"})
public class ActualizarEmpleado extends HttpServlet {

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
        Conexion c = new Conexion();
        String empleado = request.getParameter("idModificarEmp");
        String curp = request.getParameter("curpModificarEmp");
        String rfc = request.getParameter("rfcModificarEmp");
        String nombre = request.getParameter("nombreModificarEmp");
        String area = request.getParameter("areaModificarEmp");
        String paterno = request.getParameter("paternoModificarEmp");
        String puesto = request.getParameter("puestoModificarEmp");
        String materno = request.getParameter("maternoModificarEmp");
        String tel = request.getParameter("telModificarEmp");
        String edad = request.getParameter("edadModificarEmp");
        String horario = request.getParameter("horarioModificarEmp");
        String lugar = request.getParameter("lugarModificarEmp");
        String dir = request.getParameter("dirModificarEmp");
        String sueldo = request.getParameter("sueldoModificarEmp");
        String nac = request.getParameter("nacModificarEmp");
        String cuenta = request.getParameter("cuentaModificarEmp");
        System.out.println(empleado);
        c.actualizar("curp = '"+curp+"',rfc = '"+rfc+"', nombre = '"+nombre+"',primer_apellido = '"+paterno+"',segundo_apellido = '"+materno+
                "',nacionalidad = '"+nac+"',edad = "+edad+",lugar_nacimiento = '"+lugar+"',direccion = '"+dir+"',telefono = '"+tel+
                "',area = "+area+",puesto = "+puesto+",horario = '"+horario+"',sueldo = "+sueldo+",cuenta = '"+cuenta+"'"
                , "empleado", "id = "+empleado);
        response.sendRedirect("RecursosHumanos/ModificarEmpleado.jsp");
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
            Logger.getLogger(ActualizarEmpleado.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(ActualizarEmpleado.class.getName()).log(Level.SEVERE, null, ex);
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
