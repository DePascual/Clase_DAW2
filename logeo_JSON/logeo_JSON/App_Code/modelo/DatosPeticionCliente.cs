using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace logeo_JSON.App_Code.modelo
{
    public class DatosPeticionCliente
    {
        private string __Login;
        private string __Password;


        public string Login
        {
            get { return this.__Login; }
            set
            {
                this.__Login = value;
            }
        }

        public string Password
        {
            get { return this.__Password; }
            set
            {
                this.__Password = value;
            }
        }
    }
}