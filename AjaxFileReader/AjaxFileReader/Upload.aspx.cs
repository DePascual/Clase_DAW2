using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.IO;
using AjaxFileReader.App_Code.modelo;
using System.Web.Script.Serialization;

namespace AjaxFileReader
{
    public partial class Upload : System.Web.UI.Page
    {
        private StreamWriter __escritorFichero_Usuarios;

        protected void Page_Load(object sender, EventArgs e)
        {
            //recuperar los datos de tipo FileReader mandados por el cliente...
            // Page.Request.Files <=== coleccion de tipo HttpFileCollection, objetos de tipo HttpPostedFile

            HttpPostedFile fichero = this.Request.Files[0];
            String usuario = this.Request.Form["usuario"];
            Usuario usuarioRecibido = new JavaScriptSerializer().Deserialize<Usuario>(usuario);

            Byte[] contenido = new Byte[fichero.ContentLength];

            fichero.InputStream.Read(contenido, 0, fichero.ContentLength);

            string objetoJSON = "";
            try {
                File.WriteAllBytes(Server.MapPath("~/App_Data/uploads/") + usuarioRecibido.NIF + "$" + fichero.FileName, contenido);

                __escritorFichero_Usuarios = new StreamWriter(new FileStream(this.Server.MapPath("ficheros/usuarios.txt"), FileMode.Append, FileAccess.Write));

                string cadena_a_guardar_Registro = usuarioRecibido.Nombre + ":"
                                                + usuarioRecibido.Apellido + ":"
                                                + usuarioRecibido.Direccion + ":"
                                                + usuarioRecibido.NIF + ":"
                                                + usuarioRecibido.CP + ":"
                                                + usuarioRecibido.Provincia + ":"
                                                + usuarioRecibido.Login + ":"
                                                + usuarioRecibido.Password;

                __escritorFichero_Usuarios.WriteLine(cadena_a_guardar_Registro);
                __escritorFichero_Usuarios.Flush();
                __escritorFichero_Usuarios.Close();

                objetoJSON = "{\"codigo\":0,\"mensaje\":\"Upload del fichero OK!!!\"}";
            }
            catch
            {
                objetoJSON = "{\"codigo\":1,\"mensaje\":\"FALLO Upload del fichero OK...\"}";
            }
            finally
            {
                this.Response.ContentType = "application/json";
                this.Response.Write(objetoJSON);
                this.Response.End();
            }
        }
    }
}