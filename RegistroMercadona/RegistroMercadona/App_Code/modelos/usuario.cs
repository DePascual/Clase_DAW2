using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RegistroMercadona.App_Code.modelos
{
   
    public class usuario
    {
        private string _nombre;
        private string _apellido1;
        private string _apellido2;
        private string _tipoID;
        private string _ID;
        private string _login;
        private string _fechaNacimiento;
        private string _password;
        private string _direcciones;
        private string _telefonos;
        private string _faltaProd;

        public string Nombre
        {
            get { return _nombre; }
            set { _nombre = value; }
        }

        public string Apellido1
        {
            get { return _apellido1; }
            set { _apellido1 = value; }
        }

        public string Apellido2
        {
            get { return _apellido2; }
            set { _apellido2 = value; }
        }

        public string TipoID
        {
            get { return _tipoID; }
            set { _tipoID = value; }
        }

        public string ID
        {
            get { return _ID; }
            set { _ID = value; }
        }

        public string Login
        {
            get { return _login; }
            set { _login = value; }
        }

        public string FechaNacimiento
        {
            get { return _fechaNacimiento; }
            set { _fechaNacimiento = value; }
        }

        public string Password
        {
            get { return _password; }
            set { _password = value; }
        }

        public string Direcciones
        {
            get { return _direcciones; }
            set { _direcciones = value; }
        }

        public string Telefonos
        {
            get { return _telefonos; }
            set { _telefonos = value; }
        }

        public string FaltaProd
        {
            get { return _faltaProd; }
            set { _faltaProd = value; }
        }

        public usuario() { }
    }
}