using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RegistroMercadona.App_Code.modelos
{
    public class respuestaLogin
    {
        private string _codigo;
        private string _texto;

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


        public respuestaLogin() { }
    }
}