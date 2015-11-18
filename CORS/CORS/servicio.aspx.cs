using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CORS
{
    public partial class servicio : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string respuestaServer = ""; 
            string cliente = (string)this.Request.QueryString["cliente"]; //cojo de la url lo que vale la variable cliente
            if (cliente == "admin")
            {
                respuestaServer = "Bienvenido al site...";
            }
            else
            {
                respuestaServer = "ACCESO DENEGADO";
            }

            this.Response.Write(respuestaServer);
            this.Response.Flush();
            this.Response.End();
        }
    }
}