using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

namespace Buscador_XPATH
{
    public partial class Servidor : System.Web.UI.Page
    {
        private StreamReader __lectorFichero;
        private string __strFichero;

        protected void Page_Load(object sender, EventArgs e)
        {
            int campoBusqueda = 0;
            string valorBuscado = "";
            StreamReader fichero = new StreamReader(new FileStream(this.Server.MapPath("ficheros/Libros.txt"), FileMode.Open, FileAccess.Read));
            foreach (string clave in this.Request.QueryString.AllKeys)
            {
                switch (clave)
                {
                    case "Titulo":
                        campoBusqueda = 0;
                        valorBuscado = this.Request.QueryString["Titulo"];
                        break;
                    case "ISBN":
                        campoBusqueda = 4;
                        valorBuscado = this.Request.QueryString["ISBN"];
                        break;
                    case "Autor":
                        campoBusqueda = 1;
                        valorBuscado = this.Request.QueryString["Autor"];
                        break;
                    default:
                        campoBusqueda = 0;
                        valorBuscado = null;
                        break;

                }

            }

            try
            {
                string[] lineas = (from unaLinea in fichero.ReadToEnd().Split(new char[] { '\r', '\n' })
                                   where unaLinea.Split(new char[] { ':' })[campoBusqueda] == valorBuscado
                                   select unaLinea).ToArray();

                this.Response.ContentType = "plain/text";
                this.Response.Write(String.Join(System.Environment.NewLine, lineas));
                this.Response.Flush();
                this.Response.End();
            }
            catch (Exception ex)
            {

            }

            fichero.Close();

        }


    }
}