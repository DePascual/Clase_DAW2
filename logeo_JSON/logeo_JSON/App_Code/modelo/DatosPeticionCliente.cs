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
                if (__Login != null && __Login.Length <= 10)
                {
                    this.__Login = value;
                }
                else
                {
                    this.__Login = null;
                }

               
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