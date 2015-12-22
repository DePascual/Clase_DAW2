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
            respuesta resp = new respuesta();

            XmlDocument miDocumentoXML = new XmlDocument();
            miDocumentoXML.Load(HttpContext.Current.Request.MapPath("~/ficheros/loginClientes.xml"));
            XmlNodeList miNodoList = miDocumentoXML.SelectNodes("//cliente[login='" + usuario.Login + "' and password='" + usuario.Password + "']");
            //boolean(//cliente[login='karol_pinilla@hotmail.com' and password='12345678']) => true

            if (miNodoList.Count == 1)
            {
                resp.codigo = "0";
                resp.texto = "cliente ok";
                resp.vista = "login";
            }
            else if (miNodoList.Count == 0)
            {
                resp.codigo = "1";
                resp.texto = "cliente no existe";
                resp.vista = "login";
            }

            return new JavaScriptSerializer().Serialize(resp);
        }

        [WebMethod]
        public string respuestaNuevoUsuario(usuario usuario)
        {
            respuesta resp = new respuesta();
            XmlDocument miDocumentoXML = new XmlDocument();
            miDocumentoXML.Load(HttpContext.Current.Request.MapPath("~/ficheros/loginClientes.xml"));

            XmlElement clienteNuevo = miDocumentoXML.CreateElement("cliente");
            XmlElement nombre = miDocumentoXML.CreateElement("nombre");
            XmlElement apellido1 = miDocumentoXML.CreateElement("apellido1");
            XmlElement apellido2 = miDocumentoXML.CreateElement("apellido2");
            XmlElement tipoID = miDocumentoXML.CreateElement("tipoID");
            XmlElement ID = miDocumentoXML.CreateElement("ID");
            XmlElement login = miDocumentoXML.CreateElement("login");
            XmlElement fechaNacimiento = miDocumentoXML.CreateElement("fechaNacimiento");
            XmlElement password = miDocumentoXML.CreateElement("password");
            XmlElement direcciones = miDocumentoXML.CreateElement("direcciones");        
            XmlElement telefonos = miDocumentoXML.CreateElement("telefonos");           
            XmlElement faltaProd = miDocumentoXML.CreateElement("faltaProd");

            nombre.InnerText = usuario.Nombre;
            apellido1.InnerText = usuario.Apellido1;
            apellido2.InnerText = usuario.Apellido2;
            tipoID.InnerText = usuario.TipoID;
            ID.InnerText = usuario.ID;
            login.InnerText = usuario.Login;
            fechaNacimiento.InnerText = usuario.FechaNacimiento;
            password.InnerText = usuario.Password;
            faltaProd.InnerText = usuario.FaltaProd;

            clienteNuevo.AppendChild(nombre);
            clienteNuevo.AppendChild(apellido1);
            clienteNuevo.AppendChild(apellido2);
            clienteNuevo.AppendChild(tipoID);
            clienteNuevo.AppendChild(ID);
            clienteNuevo.AppendChild(login);
            clienteNuevo.AppendChild(fechaNacimiento);
            clienteNuevo.AppendChild(password);
            clienteNuevo.AppendChild(direcciones);
            clienteNuevo.AppendChild(telefonos);
            clienteNuevo.AppendChild(faltaProd);

            List<string> direccionesList = usuario.Direcciones.Split(new char[] { ':' }).ToList();
            foreach (string dir in direccionesList)
            {
                if (dir != "")
                {
                    XmlElement direccion = miDocumentoXML.CreateElement("direccion");
                    direccion.InnerText = dir;
                    direcciones.AppendChild(direccion);
                }

            };

            List<string> telefonosList = usuario.Telefonos.Split(new char[] { ':' }).ToList();
            foreach (string telef in telefonosList)
            {
                if (telef != "")
                {
                    XmlElement telefono = miDocumentoXML.CreateElement("telefono");
                    telefono.InnerText = telef;
                    telefonos.AppendChild(telefono);
                }
            };

            miDocumentoXML.DocumentElement.AppendChild(clienteNuevo);

            try {
                miDocumentoXML.Save(HttpContext.Current.Request.MapPath("~/ficheros/loginClientes.xml"));

                resp.codigo = "0";
                resp.texto = "usuario registrado correctamente";
                resp.vista = "registro_cliente";
            }
            catch (XmlException ex)
            {                
                resp.codigo = "1";
                resp.texto = "fallo en registro";
                resp.vista = "registro_cliente";
            }
            return new JavaScriptSerializer().Serialize(resp);
        }
    }
}
