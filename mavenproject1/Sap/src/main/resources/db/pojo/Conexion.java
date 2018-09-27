package db.pojo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Properties;

public class Conexion {
    
    Connection conn;
    
    public Conexion() throws ClassNotFoundException, SQLException {
        Class.forName("org.postgresql.Driver");
    }

    /**
     * inicio de conexion de la base de datos con postgres
     * @throws SQLException
     */
    public void openDB() throws SQLException {
        Properties connProp = new Properties();
        connProp.put("user", "postgres");
        connProp.put("password", "root");
        conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/BDSAPPW", connProp);
    }

    /**
    * Cierra la conexión con la base de datos
    * @throws SQLException
    */    
    public void closeDB() throws SQLException {
        conn.close();
    }
    
    public Integer insertar(String campos, String tabla, String valores) throws SQLException {
        openDB();
        PreparedStatement ps;
        ps=conn.prepareStatement("INSERT INTO "+tabla+" ("+campos+") VALUES ("+valores+")");
        Integer rs = ps.executeUpdate();
        closeDB();
        return rs;
    }
    
    public ArrayList consulta(String campos, String tabla, String referencia, String condicion, String extra, int cantidad) throws SQLException {
        openDB();
        if(condicion.equals("")){condicion="is not null";}
        ArrayList r=new ArrayList();
        PreparedStatement ps;
        ps=conn.prepareStatement("SELECT "+campos+" FROM "+tabla+" WHERE "+referencia+" "+condicion+" "+extra);
        ResultSet rs= ps.executeQuery();
        while(rs.next()){
            for(int i = 1 ; i <= cantidad ; i++){r.add(rs.getObject(i));}
        }
        closeDB();        
        return r;
    }
    
    public Integer borrar(String tabla, String referencia, String condicion) throws SQLException {
        openDB();
        if(condicion.equals("")){condicion="is not null";}
        PreparedStatement ps;
        ps=conn.prepareStatement("DELETE FROM "+tabla+" WHERE "+referencia+" "+condicion);
        Integer rs = ps.executeUpdate();
        closeDB();
        return rs;
    }
    /**
     * este metodo permite actualizar datos de cualquier tabla
     * @param campos
     * @param tabla
     * @param referencia
     * @param condicion
     * @return
     * @throws SQLException 
     */
    
    public Integer actualizar(String campos, String tabla, String referencia, String condicion) throws SQLException {
        openDB();
        if(condicion.equals("")){
            condicion="is not null";
        }
        PreparedStatement ps;
        ps=conn.prepareStatement("UPDATE "+tabla+" SET "+campos+" WHERE "+referencia+" "+condicion);
        Integer rs = ps.executeUpdate();
        closeDB();
        return rs;
    }
}
