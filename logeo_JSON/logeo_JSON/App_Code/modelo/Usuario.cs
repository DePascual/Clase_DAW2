using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace logeo_JSON.App_Code.modelo
{
    public class Usuario
    {
        private string __nombreUsuario;
        private string __apellidoUsuario;
        private string __direccionUsuario;
        private string __NIFUsuario;
        private string __CPUsuario;
        private string __provinciaUsuario;

        private string __loginUsuario;
        private string __passwordUsuario;

        public string NombreUsuario
        {
            get
            {
                return __nombreUsuario;
            }

            set
            {
                __nombreUsuario = value;
            }
        }

        public string ApellidoUsuario
        {
            get
            {
                return __apellidoUsuario;
            }

            set
            {
                __apellidoUsuario = value;
            }
        }

        public string DireccionUsuario
        {
            get
            {
                return __direccionUsuario;
            }

            set
            {
                __direccionUsuario = value;
            }
        }

        public string NIFUsuario
        {
            get
            {
                return __NIFUsuario;
            }

            set
            {
                __NIFUsuario = value;
            }
        }

        public string CPUsuario
        {
            get
            {
                return __CPUsuario;
            }

            set
            {
                __CPUsuario = value;
            }
        }

        public string ProvinciaUsuario
        {
            get
            {
                return __provinciaUsuario;
            }

            set
            {
                __provinciaUsuario = value;
            }
        }

        public string LoginUsuario
        {
            get
            {
                return __loginUsuario;
            }

            set
            {
                __loginUsuario = value;
            }
        }

        public string PasswordUsuario
        {
            get
            {
                return __passwordUsuario;
            }

            set
            {
                __passwordUsuario = value;
            }
        }
    }
}