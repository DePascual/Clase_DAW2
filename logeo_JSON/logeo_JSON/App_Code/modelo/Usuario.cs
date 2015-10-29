using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace logeo_JSON.App_Code.modelo
{
    public class Usuario
    {
        private string __Nombre;
        private string __Apellido;
        private string __Direccion;
        private string __NIF;
        private string __CP;
        private string __Provincia;

        private string __Login;
        private string __Password;

        public string Nombre
        {
            get
            {
                return __Nombre;
            }

            set
            {
                __Nombre = value;
            }
        }

        public string Apellido
        {
            get
            {
                return __Apellido;
            }

            set
            {
                __Apellido = value;
            }
        }

        public string Direccion
        {
            get
            {
                return __Direccion;
            }

            set
            {
                __Direccion = value;
            }
        }

        public string NIF
        {
            get
            {
                return __NIF;
            }

            set
            {
                __NIF = value;
            }
        }

        public string CP
        {
            get
            {
                return __CP;
            }

            set
            {
                __CP = value;
            }
        }

        public string Provincia
        {
            get
            {
                return __Provincia;
            }

            set
            {
                __Provincia = value;
            }
        }

        public string Login
        {
            get
            {
                return __Login;
            }

            set
            {
                __Login = value;
            }
        }

        public string Password
        {
            get
            {
                return __Password;
            }

            set
            {
                __Password = value;
            }
        }
    }
}