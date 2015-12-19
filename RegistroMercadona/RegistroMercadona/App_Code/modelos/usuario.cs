using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RegistroMercadona.App_Code.modelos
{
    public class usuario
    {
        private string _login;
        private string _password;

        public string Login
        {
            get { return _login; }
            set { _login = value; }
        }

        public string Password
        {
            get { return _password; }
            set { _password = value; }
        }

        public usuario() { }
    }
}