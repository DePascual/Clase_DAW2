using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;

namespace logeo_XPATH
{
    public partial class Servidor : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //string user = (string)this.Request.Params["user"];
            string criterio = (string)this.Request.QueryString["login"];

            XmlDocument miDocumentoXML = new XmlDocument();
            miDocumentoXML.Load(Server.MapPath("ficheros/usuarios.xml"));
            List<XmlNode> listaNodos = miDocumentoXML.GetElementsByTagName("usuario").Cast<XmlNode>().ToList();

            string respuesta = "<usuarios>";
            listaNodos.ForEach(nodo => respuesta += nodo.OuterXml);
            respuesta += "</usuarios>";

            this.Response.Clear();
            this.Response.ContentType = "text/xml";
            this.Response.Write(respuesta);
            this.Response.Flush();
            this.Response.End();

        }
    }
}