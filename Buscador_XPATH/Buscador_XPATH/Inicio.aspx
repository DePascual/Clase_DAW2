<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Inicio.aspx.cs" Inherits="Buscador_XPATH.Inicio" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <script>
        function start() {
            try {
                var peticion = new XMLHttpRequest()
            } catch (e) {
                ["MsXML2.XMLHTTP.6.0", "MsXML2.XMLHTTP.5.0", "MsXML2.XMLHTTP.4.0"].forEach(function (el, pos, ar) {
                    var peticion = new ActiveX(el)
                })
            }


            peticion.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("txtBox_RespuestaBusqueda").value = this.responseText()
                }
            }

            peticion.open("GET", "Servidor.aspx?titulo=" + txtBox_Buscador.Text, true)
            peticion.send(null)
        }
        

        document.getElementById("btn_Buscar").addEventListener("click", start, false);
    </script>


    <form id="form1" runat="server">
        <div>
            <table>
                <tr>
                    <td class="auto-style1">Búsqueda Libros:
                       
                    </td>
                    <td>
                        <asp:TextBox ID="txtBox_Buscador" runat="server" Width="179px"></asp:TextBox>
                    </td>
                    <td>
                        <asp:Button ID="btn_Buscar" runat="server" Text="Buscar" />
                    </td>
                    <td>

                        <asp:Label ID="label_seguimiento" runat="server"></asp:Label>

                    </td>
                </tr>
                <tr>
                    <td colspan="3" class="auto-style1">
                        <asp:RadioButton ID="RadioButton_Titulo" runat="server" Checked="True" Text="Titulo" />
                        <asp:RadioButton ID="RadioButton_ISBN" runat="server" Text="ISBN" />
                        <asp:RadioButton ID="RadioButton_Autor" runat="server" Text="Autor" />
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <asp:TextBox ID="txtBox_RespuestaBusqueda" runat="server" Height="66px" Width="509px"></asp:TextBox>
                    </td>
                </tr>
            </table>

        </div>

        <asp:TextBox ID="seguimientoTextBox" runat="server" Height="200px" TextMode="MultiLine" Width="634px"></asp:TextBox>
    </form>
</body>
</html>
