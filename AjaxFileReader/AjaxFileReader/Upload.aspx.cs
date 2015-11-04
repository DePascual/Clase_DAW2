using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.IO;

namespace AjaxFileReader
{
    public partial class Upload : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //recuperar los datos de tipo FileReader mandados por el cliente...
            // Page.Request.Files <=== coleccion de tipo HttpFileCollection, objetos de tipo HttpPostedFile

            HttpPostedFile fichero = this.Request.Files[0];

            Byte[] contenido = new Byte[fichero.ContentLength];

            fichero.InputStream.Read(contenido, 0, fichero.ContentLength);

            string objetoJSON = "";
            try {
                File.WriteAllBytes(Server.MapPath("~/App_Data/uploads/") + fichero.FileName, contenido);
                objetoJSON = "{'codigo':0,'mensaje':'Upload del fichero OK!!!'}";
            }
            catch
            {
                objetoJSON = "{'codigo':1,'mensaje':'FALLO Upload del fichero OK...'}";
            }
            finally
            {
                this.Response.Write(objetoJSON);
                this.Response.ContentType = "application/json";
                this.Response.End();
            }
        }
    }
}