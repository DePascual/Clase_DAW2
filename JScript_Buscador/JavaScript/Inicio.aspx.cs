using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;



namespace JavaScript
{
    public partial class Inicio : System.Web.UI.Page
    {



        protected void Page_Load(object sender, EventArgs e)
        {
            mostrar();
        }

        private void mostrar()
        {
            this.seguimientoTextBox.Text = "";

            string mensaje = "";
            foreach (string clave in this.Request.Params.AllKeys)
            {
                mensaje += "clave:_" + clave + " --> valor:_" + this.Request.Params[clave].ToString() + "\n";
            }

            this.seguimientoTextBox.Text = mensaje;
        }        
    }
}