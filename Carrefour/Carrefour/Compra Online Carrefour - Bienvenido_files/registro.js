function initPage(){cerrarCapas();initLocale();initSection();}function initSection(){var pagina=$("#general").data("pagina");switch(pagina){case"PreRegistro":initPreRegistroSimpl();desactivarEnterKeyLayer();break;case"Registro":initRegistro();desactivarEnterKeyLayer();eliminarDireccion();break;}}function initPreRegistroSimpl(){var errorServicio=$("#errorServicio").val();if(errorServicio!="null"){$("#inputCodFid").val($("#numTar").val());$("#inputDNI").val($("#docum").val());$("#flagTarjetaValidada").val("0");$("#errorTarjeta").addClass("show");$("#inputCodFid").addClass("error");if(errorServicio=="53"){$("#falloTarjeta").text($("#errorTarjetaNoExiste").val());}else{if(errorServicio=="ERROR_DNI_TAR"){$("#falloTarjeta").text($("#errortarjetaDNINoCorrectos").val());}else{$("#falloTarjeta").text(errorServicio);}}return;}$("#tengoTarjetaValidar").click(function(e){e.preventDefault();$("#inputCodFid").removeClass("error");$("#errorTarjeta").removeClass("show");$("#inputDNI").removeClass("error");$("#errorDNI").removeClass("show");var inputCodFid=$("#inputCodFid").val();var inputDNI=$("#inputDNI").val();if(inputCodFid!=""&&inputDNI!=""){if(isNumeric(inputCodFid)){graciasPorEsperar();$("#continuar").click();}else{$("#errorTarjeta").addClass("show");$("#inputCodFid").addClass("error");$("#falloTarjeta").text($("#errorTarjetaIncorrecta").val());return;}}else{if(inputCodFid==""){$("#errorTarjeta").addClass("show");$("#inputCodFid").addClass("error");$("#falloTarjeta").text($("#errorTarjetaVacia").val());}if(inputDNI==""){$("#errorDNI").addClass("show");$("#inputDNI").addClass("error");$("#falloDNI").text($("#errorDniVacio").val());}return;}});$("#continuar").click(graciasPorEsperar);}function initPreRegistro(){var codigoPostal=null;$("#codigoPostal").bind("keypress",function(e){var key=e.keyCode||e.which;if(key===13){e.preventDefault();$("#comprobarCodPostal").click();}});$("#comprobarCodPostal").click(function(){if(!validarPreRegistro()){return;}codigoPostal=$("#codigoPostal").val();$.ajax({dataType:"json",url:"ComprobarServicio.aspx",data:{postalCode:codigoPostal},success:function(data){if(data.error=="1"){elem=$(".error-msg");elem.closest(".form").find(".error-msg:eq(0)").slideDown("fast").addClass("active");elem.closest(".form").find(".ok-msg:eq(0)").slideUp("fast");$("html, body").animate({scrollTop:elem.closest(".form").find(".error-msg:eq(0)").offset().top-250},600);}else{elem=$(".ok-msg");elem.closest(".form").find(".error-msg.active").slideUp("fast").removeClass("active");elem.closest(".form").find(".ok-msg:eq(0)").slideDown("fast");}if($("#botonRegistro").hasClass("btn-inactive")){$("#botonRegistro").removeClass("btn-inactive");}$("#botonRegistro").removeAttr("disabled");}});});$("#botonRegistro").click(function(){if(codigoPostal!=null){$("#irRegistro").submit();}});}function validarPreRegistro(){elemento=$("#codigoPostal");if(elemento.val().length==0){ocultarError($(".ok-msg"));ocultarError($(".error-msg02"));ocultarError($(".error-msg03"));ocultarError($(".error-msg05"));mostrarError($(".error-msg04"));return false;}if(!esNumero(elemento.val())){ocultarError($(".ok-msg"));ocultarError($(".error-msg02"));ocultarError($(".error-msg04"));ocultarError($(".error-msg05"));mostrarError($(".error-msg03"));return false;}if(comprobarFalloLongitud(elemento)){ocultarError($(".ok-msg"));ocultarError($(".error-msg02"));ocultarError($(".error-msg03"));ocultarError($(".error-msg04"));mostrarError($(".error-msg05"));return false;}ocultarError($(".error-msg03"));ocultarError($(".error-msg04"));ocultarError($(".error-msg05"));return true;}function ocultarError(elemento){elemento.slideUp("fast").removeClass("active");}function mostrarError(elemento){elemento.slideDown("fast");if(!$("#botonRegistro").hasClass("btn-inactive")){$("#botonRegistro").addClass("btn-inactive");}$("#botonRegistro").attr("disabled","disabled");}function initRegistro(){var vienePreReg=$("#vienePreReg").val();var errorServicio=$("#errorServicio").val();if(errorServicio!="null"){if(errorServicio=="21"){popupAlert("label.aviso","label.error.tarjetaSinDatosRegistrados");}else{if(errorServicio=="23"){popupAlert("label.aviso","label.error.tarjetaClienteBajaLOPD");}else{if(errorServicio=="24"){popupAlert("label.aviso","label.error.tarjetaTipoNoCorrecto");}}}}$("#codigoClubCarrefour").val($("#numTar").val());$("#txtdoc").val($("#docum").val());initBotonesRegistro();$(".toggle-close").remove();$(".radio01").click(function(e){if($("#Particular").is(":checked")){if(!$("#nombreFisc").hasClass("hide")){$("#nombreFisc").addClass("hide");}$("#txtnombrefiscal").removeClass("required");}else{$("#nombreFisc").removeClass("hide");$("#txtnombrefiscal").addClass("required");}});$("#txtnombrefiscal").focusout(function(){buttonStateCap(false);});$("#auxiliarRegistro").click(function(e){e.preventDefault();registrousuario(e);});validarFormulario();validarFormularioDireccion();registroUsuarioRecargar();$("#codigoClubCarrefour").change(function(){if($("#codigoClubCarrefour").hasClass("error")){$("#codigoClubCarrefour").removeClass("error");ocultarError($("#codigoClubCarrefour").data("error"));}buttonStateCap(false);});$("#layerInfoAddListaCesta #lista03").remove();toggle();desactivarIntroInputDirecciones();$("#datosUsuario").find("input").bind("keypress",function(e){desactivarEnter(e);});$("#datosAcceso").find("input").bind("keypress",function(e){desactivarEnter(e);});$("#codigoClubCarrefour").bind("keypress",function(e){desactivarEnter(e);});var foco=document.getElementById("focoTo").value;if(foco=="datosUsuario"){$("html, body").animate({scrollTop:$("#"+foco).offset().top-250},600);}else{if(foco=="datosAcceso"){$("html, body").animate({scrollTop:$("#"+foco).offset().top+290},600);}else{if(foco=="modoEntrega"){$("html, body").animate({scrollTop:$("#"+foco).offset().top-600},600);}}}}function initMiCuenta(){$("#enlaceMiCuenta").addClass("active");}function initFormularioDireccion(){$(".formrow .col2 .col2b:last-child").addClass("last");}function colocarErrorServidor(identificador){var elemento=$("#"+$("#"+identificador).attr("data-elemento"));if(!elemento.hasClass("error")){elemento.addClass("error");}elemento.attr("data-error",identificador);if($("#"+identificador).hasClass("hide")){$("#"+identificador).removeClass("hide");}$("#"+identificador).parent().slideDown("fast").addClass("active");}function colocarErrorFaltaElemento(identificador){var elemento=$("#"+identificador);if(!elemento.hasClass("error")){elemento.addClass("error");}if(!$("#errFaltaElemento").hasClass("error")){$("#errFaltaElemento").addClass("error");}elemento.closest(".ul").addClass("active");$("#errFaltaElemento").closest(".ul").addClass("active");}function validarFormulario(){$("#general").on("click","button[type=submit], input[type=submit]",function(e){if($(".error").length>0){e.preventDefault();}else{if($(".errornoclave").length>0){e.preventDefault();}}});$("input.required").focusout(function(){buttonStateCap(false);});$("input").change(function(){var id=$(this).attr("id");if(id=="txtconfpwd"){id="txtpwd";$("#txtpwd").removeClass("error");}$(this).removeClass("error");var elemento=$("ul.error-msg").find("li[data-elemento="+id+"]").parent();$("ul.error-msg").find("li[data-elemento="+id+"]").addClass("hide");var auxi=elemento.find("li[class*=hide]").length;var auxi2=elemento.find("li").length;if(auxi==auxi2){$("ul.error-msg").find("li[data-elemento="+id+"]").parent().addClass("hide");$("ul.error-msg").find("li[data-elemento="+id+"]").parent().css("display","none");}if(id=="txtpwd"){$("#txtconfpwd").removeClass("error");}if($(this).hasClass("required")){buttonStateCap(false);}});$("select.required").change(function(){var valueInput=$(this).val();buttonStateCap(false);if($(this).hasClass("options")){if(valueInput=="2"){$(this).closest(".form").find(".formrow.hide").slideDown("200");}else{$(this).closest(".form").find(".formrow.hide").slideUp("200");}}});$("#cmbcomoconoce").change(comprobarAmigo);$(".fancyradio").click(function(e){var idRadio=$(this).find("input.radio01").attr("id");if(idRadio=="recoger"){if($("#EligirSupermercado").hasClass("inactive")){$("#EligirSupermercado").closest(".form").find(".btn01").attr("disabled","disabled").addClass("btn-inactive");}else{$("#EligirSupermercado").closest(".form").find(".btn01.btn-inactive").removeAttr("disabled").removeClass("btn-inactive");}}else{if(idRadio=="envioDireccion"){$("#EligirSupermercado").closest(".form").find(".btn01.btn-inactive").removeAttr("disabled").removeClass("btn-inactive");}}});$("select.options").change(function(){var valueInput=$(this).val();if(valueInput=="2"){$(this).closest(".form").find(".formrow.hide").slideDown("200");}else{$(this).closest(".form").find(".formrow.hide").slideUp("200");}});}function comprobarAmigo(elemento){if($("#cmbcomoconoce").val()==="Amigo"){$("#txtamigo").closest(".formrow").removeClass("hide");if(!$("#txtamigo").hasClass("required")){$("#txtamigo").addClass("required");}}else{if(!$("#txtamigo").closest(".formrow").hasClass("hide")){$("#txtamigo").closest(".formrow").addClass("hide");}if($("#txtamigo").hasClass("required")){$("#txtamigo").removeClass("required");}if($("#errEmailAmigo").parent().hasClass("active")){$("#errEmailAmigo").parent().slideDown("200");$("#errEmailAmigo").parent().removeAttr("style");$("#errEmailAmigo").parent().removeClass("active");}if($("#txtamigo").hasClass("error")){$("#txtamigo").removeClass("error");}}buttonStateCap(false);}function buttonStateCap(validacionCompleta){var btnInactive=false;var errores=false;if($("#cmbcomoconoce").val()=="Amigo"){}else{}$("#general").find(".required").each(function(){if($(this).hasClass("disabled")){btnInactive=true;}else{if($(this).hasClass("select01")){if($(this).val()=="0"){btnInactive=true;return btnInactive;}}else{if($(this).hasClass("radio01")){}else{if($(this).val().trim()==""){btnInactive=true;return btnInactive;}}}}});if(validacionCompleta){if(!validarEmail(($("#txtemail")))){errores=true;colocarError($("#txtemail"));}if(comprobarFalloLongitud($("#txtpwd"))){errores=true;colocarError($("#txtpwd"));}else{if($("#txtpwd").val()!=$("#txtconfpwd").val()){errores=true;colocarError($("#txtconfpwd"));}}if($("#cmbcomoconoce").val()==="Amigo"&&$("#txtamigo").val().length){if(!validarEmail(($("#txtamigo")))){errores=true;colocarError($("#txtamigo"));}}}if(typeof direccionFacturacion==="undefined"){btnInactive=true;}else{if(!direccionFacturacion.normalizadaAux){btnInactive=true;}}if($("#recoger").is(":checked")){if($("#driverSelect").val()=="0"){btnInactive=true;}}if($("#Empresa").is(":checked")){if($("#txtnombrefiscal").val()==""){btnInactive=true;}}if($(".error").length>0){btnInactive=true;}if(!btnInactive){$("#auxiliarRegistro").removeAttr("disabled");$("#auxiliarRegistro").removeClass("btn-inactive");}else{$("#auxiliarRegistro").attr("disabled","disabled");$("#auxiliarRegistro").addClass("btn-inactive");errores=true;}return errores;}function registroUsuarioRecargar(){var vienePreReg=$("#vienePreReg").val();if($("#routeTypeBill").val()!=""){$("#Tratamiento").val($("#treatment").val());$("#txtnombre").val($("#firstName").val());$("#txtapellidos").val($("#lastName").val());$("#txttipodoc").val($("#docType").val());$("#txtdoc").val($("#docId").val());var fecha=$("#dateOfBirth").val().split("/");if(fecha[0][0]=="0"){fecha[0]=fecha[0][1];}if(fecha[1][0]=="0"){fecha[1]=fecha[1][1];}$('#txtdia option[value="'+fecha[0]+'"]').prop("selected",true);$('#txtmes option[value="'+fecha[1]+'"]').prop("selected",true);$('#txtanyo option[value="'+fecha[2]+'"]').prop("selected",true);$("#txtemail").val($("#login").val());if($("#general").data("pagina")=="Registro"){$("#txtpwd").val("");$("#txtconfpwd").val("");}else{$("#txtpwd").val("*");$("#txtconfpwd").val("*");}if($("#solicitarPass").val()=="false"){$("#checkAutoLogin").attr("checked","checked");}if($("#recibirOfertas").val()=="1"){$("#radiopub1").attr("checked","checked");}if($("#cederInfo").val()=="1"){$("#radioceder1").attr("checked","checked");}$("#codigoClubCarrefour").val($("#codFidelizacion").val());$('#cmbcomoconoce option[value="'+$("#contactMode").val()+'"]').prop("selected",true);comprobarAmigo();$("#txtamigo").val($("#friendEmail").val());$('#txtsustitucion option[value="'+$("#criteriosustitucion").val()+'"]').prop("selected",true);if($("#isCompany").val()=="true"){$("#txtnombrefiscal").val($("#fiscalName").val());$("#Empresa").attr("checked","checked");$("#Empresa").click();}if($("#receivesBills").val()=="true"){$("#opt02Empresa").attr("checked","checked");}recargarDireccionBill();recargarDireccionShip();if($("#secondAddress").val()=="true"){numDirecciones=2;}else{numDirecciones=1;}if(typeof $("#visualizacion").val()!=="undefined"){$('#cmbVisualizacion option[value="'+$("#visualizacion").val()+'"]').prop("selected",true);if($("#ordenvisualizacion").val()=="C4Order"){$('#cmbOrden option[value="'+$("#cmbOrden").data("defecto")+'"]').prop("selected",true);}else{$('#cmbOrden option[value="'+$("#ordenvisualizacion").val()+'"]').prop("selected",true);}}if(vienePreReg=="null"||!vienePreReg){var params=obtenerParametrosRegistro(direccionFacturacion,true);$.ajax({url:"CancelarValidacion.aspx",data:params,success:mostrarRespuesta}).done(function(){initBotonesRegistro();repintarParametrosRegistro();validarFormularioDireccion();var direccion1=$("#pD1").text();var direccion2=$("#pD2").text();$("#modoEntrega").reload({direccion1:direccion1,direccion2:direccion2},cargarFuncionalidadModoEntregaRecarga);});}else{$("#txttipovia").val(direccionFacturacion.routeType);$("#txtnombrevia").val(direccionFacturacion.address1);$("#txtnumero").val(direccionFacturacion.address2);$("#txturbanizacion").val(direccionFacturacion.urbanizacion);$("#txtbloque").val(direccionFacturacion.bloque);$("#txtescalera").val(direccionFacturacion.escalera);$("#txtpiso").val(direccionFacturacion.piso);$("#txtpuerta").val(direccionFacturacion.puerta);$("#txtlocalidad").val(direccionFacturacion.city);$("#txtprovincia").val(direccionFacturacion.province);$("#txtcodpostal").val(direccionFacturacion.postalCode);$("#txttelefono").val(direccionFacturacion.telefono);$("#txtotrotelefono").val(direccionFacturacion.telefono2);$("#txtinformacion").val(direccionFacturacion.informacion);initBotonesRegistro();validarFormularioDireccion();}}graciasPorEsperarOff();}function cargarFuncionalidadModoEntregaRecarga(){cargarFuncionalidadModoEntrega();}function cargarFuncionalidadModoEntrega(valor){$(".btn01").click(function(e){if(!$(this).attr("id")=="auxiliarRegistro"){e.preventDefault();}});$("#driverSelect").change(function(){buttonStateCap(false);});$(".radio01").click(function(e){buttonStateCap(false);});mostrarTogle();initBotonesRegistro();buttonStateCap(false);$(".formrow .col2 .col2b:last-child").addClass("last");if($("#tipoEntrega").val()=="DRIVE"){$('#driverSelect option[value="'+$("#drive").val()+'"]').attr("selected","selected");$("#recoger").click();}else{$("#envioDireccion").click();if($("#tipoEntrega").val()=="OTRO_DOMICILIO"){$("#direccion02").attr("checked","checked");$("#direccion02").click();}else{$("#direccion01").attr("checked","checked");$("#direccion01").click();}}desactivarIntroInputDirecciones();if(matched.browser=="msie"&&matched.version<9){if($("#general").data("pagina")=="MiCuentaPost"||$("#general").data("pagina")=="Registro"){var radio=$(".fancyradio .radio01");radio.each(function(index){initCheckExplorer($(this));});}}var desplegarTarget=$("#modoEntrega").find("input[type='radio']:checked").data("target");if(desplegarTarget!==undefined){$("#"+desplegarTarget).css("display","block");}graciasPorEsperarOff();}function registrousuario(e){if(buttonStateCap(false)){return;}if($("#Particular").is(":checked")){$("#isCompany").val(false);$("#fiscalName").val("");}else{$("#isCompany").val(true);$("#fiscalName").val($("#txtnombrefiscal").val().trim());}if($("#opt02Empresa").is(":checked")){$("#receivesBills").val(true);}else{$("#receivesBills").val(false);}if($("#checkAutoLogin").is(":checked")){var solicitarPass=false;}else{var solicitarPass=true;}if($("#radiopub1").is(":checked")){var recibirOfertas=1;}else{var recibirOfertas=0;}if($("#radioceder1").is(":checked")){var cederInfo=1;}else{var cederInfo=0;}if(typeof $("#cmbVisualizacion").val()!=="undefined"){$("#ordenvisualizacion").val($("#cmbOrden").val());$("#visualizacion").val($("#cmbVisualizacion").val());if(!comprobarCambiosDireccionNoValidadosBill()){popupAlert("label.aviso","label.registroPopUp.validarBill");return;}if(numDirecciones==2){if(!comprobarCambiosDireccionNoValidadosShip()){popupAlert("label.aviso","label.registroPopUp.validarShip");return;}}}else{$("#ordenvisualizacion").remove();$("#visualizacion").remove();}$("#treatment").val($("#Tratamiento").val());$("#firstName").val($("#txtnombre").val().trim());$("#lastName").val($("#txtapellidos").val().trim());$("#docType").val($("#txttipodoc").val());$("#docId").val($("#txtdoc").val().trim());$("#dateOfBirth").val($("#txtdia").val()+"/"+$("#txtmes").val()+"/"+$("#txtanyo").val());$("#login").val($("#txtemail").val().trim());$("#password").val($("#txtpwd").val());$("#confirmPassword").val($("#txtconfpwd").val());$("#solicitarPass").val(solicitarPass);$("#codFidelizacion").val($("#codigoClubCarrefour").val().trim());$("#contactMode").val($("#cmbcomoconoce").val());$("#friendEmail").val($("#txtamigo").val().trim());actualizarDireccionBill();if(numDirecciones==2){actualizarDireccionShip();}if($("#recoger").is(":checked")){$("#tipoEntrega").val("DRIVE");$("#drive").val($("#driverSelect").val());}else{if($("#direccion02").is(":checked")){$("#tipoEntrega").val("OTRO_DOMICILIO");$("#direccionenvio").val("secondaryAddress");$("#ultimaDireccionEntrega").val("secondaryAddress");}else{$("#tipoEntrega").val("A_DOMICILIO");$("#direccionenvio").val("billingAddress");}}$("#criteriosustitucion").val($("#txtsustitucion").val());$("#recibirOfertas").val(recibirOfertas);$("#cederInfo").val(cederInfo);$("#submitfrmDatosPersonales").click();}function comprobarCambiosDireccionNoValidadosBill(){if($("#txttipovia").val().toLowerCase()!=direccionFacturacion.routeType.toLowerCase()){return false;}if(cambiar_acentos($("#txtnombrevia").val().toLowerCase())!=cambiar_acentos(direccionFacturacion.address1.toLowerCase())){return false;}if($("#txtnumero").val()!==undefined&&$("#txtnumero").val()!=""){if(!esNumero($("#txtnumero").val())){if($("#txtnumero").val()!=direccionFacturacion.address2){return false;}}else{var aux=parseInt($("#txtnumero").val());var aux2=parseInt(direccionFacturacion.address2);if(aux!=aux2){return false;}}}if(cambiar_acentos($("#txtlocalidad").val().toLowerCase())!=cambiar_acentos(direccionFacturacion.city.toLowerCase())){return false;}if($("#txtcodpostal").val()!=direccionFacturacion.postalCode){return false;}if($("#txtprovincia").val().toLowerCase()!=direccionFacturacion.province.toLowerCase()){return false;}if($("#txturbanizacion").val().toLowerCase()!=direccionFacturacion.urbanizacion.toLowerCase()){return false;}if($("#txtbloque").val()!=direccionFacturacion.bloque){return false;}if($("#txtescalera").val()!=direccionFacturacion.escalera){return false;}if($("#txtpiso").val()!=direccionFacturacion.piso){return false;}if($("#txtpuerta").val()!=direccionFacturacion.puerta){return false;}if($("#txttelefono").val()!=direccionFacturacion.telefono){return false;}if($("#txtotrotelefono").val()!=direccionFacturacion.telefono2){return false;}if($("#txtinformacion").val().toLowerCase()!=direccionFacturacion.informacion.toLowerCase()){return false;}return true;}function comprobarCambiosDireccionNoValidadosShip(){if($("#txttipovia2").val().toLowerCase()!=direccionEntrega.routeType.toLowerCase()){return false;}if(cambiar_acentos($("#txtnombrevia2").val().toLowerCase())!=cambiar_acentos(direccionEntrega.address1.toLowerCase())){return false;}if($("#txtnumero2").val()!==undefined&&$("#txtnumero2").val()!=""){if(!esNumero($("#txtnumero2").val())){if($("#txtnumero2").val()!=direccionEntrega.address2){return false;}}else{var aux=parseInt($("#txtnumero2").val());var aux2=parseInt(direccionEntrega.address2);if(aux!=aux2){return false;}}}if(cambiar_acentos($("#txtlocalidad2").val().toLowerCase())!=cambiar_acentos(direccionEntrega.city.toLowerCase())){return false;}if($("#txtcodpostal2").val()!=direccionEntrega.postalCode){return false;}if($("#txtprovincia2").val().toLowerCase()!=direccionEntrega.province.toLowerCase()){return false;}if($("#txturbanizacion2").val().toLowerCase()!=direccionEntrega.urbanizacion.toLowerCase()){return false;}if($("#txtbloque2").val()!=direccionEntrega.bloque){return false;}if($("#txtescalera2").val()!=direccionEntrega.escalera){return false;}if($("#txtpiso2").val()!=direccionEntrega.piso){return false;}if($("#txtpuerta2").val()!=direccionEntrega.puerta){return false;}if($("#txttelefono2").val()!=direccionEntrega.telefono){return false;}if($("#txtotrotelefono2").val()!=direccionEntrega.telefono2){return false;}if($("#txtinformacion2").val().toLowerCase()!=direccionEntrega.informacion.toLowerCase()){return false;}return true;}function cambiar_acentos(text){var acentos="ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";var original="AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";for(var i=0;i<acentos.length;i++){text=text.replace(acentos.charAt(i),original.charAt(i));}return text;}