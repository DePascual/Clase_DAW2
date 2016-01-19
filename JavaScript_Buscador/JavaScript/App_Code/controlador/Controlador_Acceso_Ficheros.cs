using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Collections;

namespace Agapea.App_Code.controlador
{
    public class Controlador_Acceso_Ficheros
    {

        private StreamReader __lectorFichero;
        private StreamWriter __escritorFichero;
        private string __strFichero;
        private FileStream fichero;



        public string RutaFichero
        {
            get { return __strFichero; }
            set { __strFichero = HttpContext.Current.Request.MapPath(value); }
        }


        //public string RutaFichero { get; set;  }

        public Boolean AbrirFichero(string ruta, string accion)
        {
            try
            {

                switch (accion)
                {
                    case "escribir":
                        __escritorFichero = new StreamWriter(new FileStream(RutaFichero, FileMode.Append, FileAccess.Write));
                        break;

                    case "leer":
                        __lectorFichero = new StreamReader(new FileStream(RutaFichero, FileMode.Open, FileAccess.Read));
                        break;

                }
                return true;
            }
            catch (Exception e)
            {

                return false;
            }

        }


        public ArrayList RecuperarDatos()
        {
            string datoRecuperado="";

            ArrayList datosArchivo = new ArrayList();

            try
            {
               while(datoRecuperado != null)
                {
                    datoRecuperado = __lectorFichero.ReadLine();
                    if(datoRecuperado != null)
                    {
                        datosArchivo.Add(datoRecuperado);
                    }
                }
                __lectorFichero.Close();              
                return datosArchivo;
            }
            catch (IOException e)
            {
                return datosArchivo;
            }
        }

  

    }
}