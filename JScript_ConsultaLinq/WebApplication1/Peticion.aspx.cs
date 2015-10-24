using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;
using System.Xml.Linq;

namespace JavaScript
{
    public partial class Peticion : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string criterio = (string)this.Request.QueryString["filtro"];
            int campo=0;
            switch (criterio)
            {
                case "Titulo": campo = 1; break;
                case "Autor": campo = 3; break;
                case "ISBN": campo = 5; break;
            }

            string valor = (string)this.Request.QueryString["valor"];

            /*------------------para POST--------------------------
            string criterio = (string)this.Request.Params["filtro"];
            */


            XmlDocument miDocumentoXML = new XmlDocument();
            miDocumentoXML.Load(Server.MapPath("ficheros/liberia.xml"));
            List<XmlNode> listaNodos = miDocumentoXML.GetElementsByTagName("Libro").Cast<XmlNode>().ToList();

            var libros = from unlibro in listaNodos
                         where unlibro.ChildNodes[campo].ChildNodes[0].Value == valor
                         select unlibro;

            this.Response.Write(libros);
            this.Response.ContentType = "text/xml";
            this.Response.Flush();
            this.Response.End();

        }
    }
}