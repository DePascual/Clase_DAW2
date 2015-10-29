using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using logeo_JSON.App_Code.modelo;
using System.Web.Script.Serialization;
using System.IO;

namespace logeo_JSON
{
    public partial class Registro : System.Web.UI.Page
    {

        private StreamWriter __escritorFichero_Registro;
        private StreamWriter __escritorFichero_Usuarios;

        protected void Page_Load(object sender, EventArgs e)
        {
            Usuario usuarioRecibido = new JavaScriptSerializer().Deserialize<Usuario>(this.Request.Params["datosRegistro"]);
            
                        
            __escritorFichero_Registro = new StreamWriter(new FileStream( this.Server.MapPath("ficheros/registros.txt"), FileMode.Append, FileAccess.Write));
            __escritorFichero_Usuarios = new StreamWriter(new FileStream(this.Server.MapPath("ficheros/usuarios.txt"), FileMode.Append, FileAccess.Write));

            string cadena_a_guardar_Registro = usuarioRecibido.Nombre + ":"
                                            + usuarioRecibido.Apellido + ":"
                                            + usuarioRecibido.Direccion + ":"
                                            + usuarioRecibido.NIF + ":"
                                            + usuarioRecibido.CP + ":"
                                            + usuarioRecibido.Provincia + ":"
                                            + usuarioRecibido.Login + ":"
                                            + usuarioRecibido.Password ;

            __escritorFichero_Registro.WriteLine(cadena_a_guardar_Registro);
            __escritorFichero_Registro.Flush();
            __escritorFichero_Registro.Close();

            string cadena_a_guardar_Usuarios = usuarioRecibido.Login + ":"
                                           + usuarioRecibido.Password;

            __escritorFichero_Usuarios.WriteLine(cadena_a_guardar_Usuarios);
            __escritorFichero_Usuarios.Flush();
            __escritorFichero_Usuarios.Close();




        }
    }
}