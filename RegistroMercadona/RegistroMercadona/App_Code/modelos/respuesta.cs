using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RegistroMercadona.App_Code.modelos
{
    public class respuesta
    {
        private string _codigo;
        private string _texto;
        private string _vista;

        public string codigo
        {
            get { return _codigo; }
            set { _codigo = value; }
        }

        public string texto
        {
            get { return _texto; }
            set { _texto = value; }
        }

        public string vista
        {
            get { return _vista; }
            set { _vista = value; }
        }
        public respuesta() { }
    }
}