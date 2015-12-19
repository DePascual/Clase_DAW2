using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using RegistroMercadona.App_Code.modelos;
using System.Web.Script.Serialization;
using System.Xml;
using System.Xml.XPath;

namespace RegistroMercadona
{
    /// <summary>
    /// Descripción breve de Servidor
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [System.Web.Script.Services.ScriptService]

    public class Servidor : System.Web.Services.WebService
    {
        [WebMethod]
        public string respuesta(usuario usuario)
        {
            Boolean existe = false;
            respuestaLogin resp = new respuestaLogin();

            XmlDocument miDocumentoXML = new XmlDocument();
            miDocumentoXML.Load(HttpContext.Current.Request.MapPath("~/ficheros/loginClientes.xml"));
            XmlNodeList miNodoList = miDocumentoXML.SelectNodes("//cliente[login='" + usuario.Login + "' and password='" + usuario.Password + "']");
            //boolean(//cliente[login='karol_pinilla@hotmail.com' and password='12345678']) => true

            if(miNodoList.Count == 1)
            {
                existe = true;
                resp.codigo = "1";
                resp.texto = "Autentificación correcta de " + usuario.Login;

            }else if (miNodoList.Count == 0)
            {
                existe = false;
                resp.codigo = "0";
                resp.texto = "ERROR!! Autentificación incorrecta de " + usuario.Login;
            }

            return new JavaScriptSerializer().Serialize(resp);
        }
    }
}
