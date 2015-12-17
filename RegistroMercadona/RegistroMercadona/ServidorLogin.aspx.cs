using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Script.Serialization;
using RegistroMercadona.App_Code.modelos;
using System.Web.Mvc;

namespace RegistroMercadona
{
    public partial class ServidorLogin : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DatosPeticionCliente recibidos = new JavaScriptSerializer().Deserialize<DatosPeticionCliente>(this.Request.Params["dato"]);

            Boolean encontrado = (from unalinea in new StreamReader(this.Server.MapPath("ficheros/usuarios.txt")).ReadToEnd().Split(new char[] { '\r', '\n' }).Where(una => una.Length > 0)
                                  let campoUsu = unalinea.Split(new char[] { ':' })[0].ToString()
                                  let campoPass = unalinea.Split(new char[] { ':' })[1].ToString()
                                  where recibidos.Login == campoUsu && recibidos.Password == campoPass
                                  select true).SingleOrDefault();

            string respuesta = "";
            if (encontrado)
            {
                respuesta = "{\"codigo\":0,\"mensaje\":\"autentificacion correcta\"}";
            }
            else
            {
                respuesta = "{\"codigo\":1,\"mensaje\":\"no existe usuario o password\"}";
            }

            this.Response.ContentType = "application/json";
            this.Response.Write(respuesta);
            this.Response.Flush();
            this.Response.End();
        }

        public JsonResult Index()
        {

        }
    }
}