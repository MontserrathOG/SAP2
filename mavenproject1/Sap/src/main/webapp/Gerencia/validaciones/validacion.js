function validawebservice(nombre, ip, puerto) {

    var nom = document.getElementById(nombre).value.toLowerCase();
    var ip = document.getElementById(ip).value;
    var puerto = document.getElementById(puerto).value;

    var letras = /[a-zA-Z]/;
    var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;


    if (letras.test(nom)) {
        if (ipformat.test(ip)) {
            if (!(letras.test(puerto))) {
                alert('Procesando');
                //correcto
                return true;
            } else {
                alert('El puerto debe contener numeros');
                return false;
            }
        } else {
            alert("Es una IP invalida");
            return false;
        }
    } else {
        alert("Es un nombre invalido");
        return false;
    }
}

function validalog(fe, ar, hoi, hof) {

    var fecha = document.getElementById(fe).value;
    var area = document.getElementById(ar).value;
    var horaini = document.getElementById(hoi).value;
    var horafin = document.getElementById(hof).value;

    var hoy = new Date();

    if (hoy > fecha) {
        if (!area === null) {
            if (horaini.isBefore(horafin) && (!horaini === null) && (!horafin === null)) {
                alert('Procesando');
                //correcto
                return true;
            } else {
                alert('Las fechas ingresadas no son correctas');
                return false;
            }
        } else {
            alert("No se selecciono un area");
            return false;
        }
    } else {
        alert("La fecha debe ser mayor al dia de hoy");
        return false;
    }
}







function validanumero(id) {
    var clave = document.getElementById(id).value;
    var letras = /[a-zA-Z]/;
    if (letras.test(clave) || clave === "") {
        alert('el campo debe contener numeros');
        document.getElementById(id).value = "";
        return false;
    } else {
        alert('llevando a cabo el proceso');
        return true;
    }
}

function validaletras(id) {
    var clave = document.getElementById(id).value;
    var numeros = /[0-9]/;
    if (numeros.test(clave)) {
        alert('El campo debe contener letras');
        document.getElementById(id).value = "";
        return false;
    } else {
        alert('proceso llevado a cabo');
        //document.getElementById(id).value="";
        return true;
    }
}
function fecha(id) {
    var fecha = document.getElementById(id).value;
    var hoy = new Date();
    if (hoy < fecha) {
        alert('la fecha no puede ser anterior a la actual');
        return false;
    }
}
function validavacio(id) {
    var cadena = document.getElementById(id).value;
    if (cadena === "") {
        alert('el campo de clave no puede ir vacio, vuelve a intentarlo');
        return false;
    } else {
        alert('busqueda realizada');
        return true;
    }
}

function exportar() {
    var control = document.getElementsByName('reportediario[]');
    if (!control[0].checked && !control[1].checked && !control[2].checked) {
        alert('Elige un campo para generar el reporte.');
        return false;
    } else {
        alert('proceso llevado a cabo');
        window.open('../archivos/contabilidad/libro diario.pdf', '_blank', 'fullscreen=yes');
        return false;
    }
}

function diario() {
    var modulo1 = document.getElementById('modulo1').value;
    if (modulo1 === "x") {
        alert('Selecciona el modulo  ');
        return false;
    }


    var tipoconsulta = document.getElementById('tipoconsulta').value;
    if (tipoconsulta === "x") {
        alert('selecciona el  tipo');
        return false;
    }

    var fechaIni = document.getElementById("fechaIni").value;
    if (fechaIni == null || fechaIni == 0) {
        alert('No se ha indicado la fecha inicial');
        return false;
    }

    var fechaFin = document.getElementById("fechaFin").value;
    if (fechaFin == null || fechaFin == 0) {
        alert('No se ha indicado la fecha final');
        return false;
    } else {
        alert('Proceso realizado');
        return true;
    }

}

function estado() {

    var Estfechaini = document.getElementById("Estfechaini").value;
    if (Estfechaini == null || Estfechaini == 0) {
        alert('No se ha indicado la fecha inicial');
        return false;
    }

    var Estfechafin = document.getElementById("Estfechafin").value;
    if (Estfechafin == null || Estfechafin == 0) {
        alert('No se ha indicado la fecha final');
        return false;
    }


    if (Estfechafin < Estfechaini) {
        alert('la fecha final no puede ser anterior a la fecha inicial');

        return false;
    }

    var reporte = document.getElementById('reporte').value;
    if (reporte === "x") {
        alert('debes elegir un tipo de reporte')
        return false;
    } else {
        window.open('../archivos/contabilidad/ESTADO DE GANANCIAS Y PERDIDAS   PDF-1-2.pdf', '_blank', 'fullscreen=yes');
        return false;
    }

}

function libromayor() {
    var reportemayor = document.getElementById('reportemayor').value;
    var ejercicio = document.getElementById('ejercicio').value;
    if (reportemayor === "x") {
        alert('Debes seleccionar el tipo de reporte mayor');
        return false;
    }
    if (ejercicio === "x") {
        alert('Debes selecciona el ejercicio');
        return false;
    } else {
        window.open('../archivos/contabilidad/Cuenta2.pdf', '_blank', 'fullscreen=yes');
        return false;
    }
}

function plancuentasAgr() {
    var tipocuentaAgr = document.getElementById('tipocuentaAgr').value;
    var numeros = /[0-9]/;
    if (numeros.test(tipocuentaAgr) || tipocuentaAgr === "") {
        alert('el campo tipo de cuenta debe contener letras');
        return false;
    }

    var clasecuentaAgr = document.getElementById('clasecuentaAgr').value;
    var numeros = /[0-9]/;
    if (numeros.test(clasecuentaAgr) || clasecuentaAgr === "") {
        alert('el campo clase cuenta debe contener letras');
        return false;
    }

    var naturalezaAgr = document.getElementById('naturalezaAgr').value;
    var numeros = /[0-9]/;
    if (numeros.test(naturalezaAgr) || naturalezaAgr === "") {
        alert('el campo naturaleza de cuenta debe contener letras');
        return false;
    } else {
        alert('Plan de cuentas agregado satisfactoriamente');
        return true;
    }
}


function plancuentaseditar() {

    var tipocuenta = document.getElementById('tipocuenta').value;
    var numeros = /[0-9]/;
    if (numeros.test(tipocuenta) || tipocuenta === "") {
        alert('el campo tipo de cuenta debe contener letras');
        return false;
    }

    var clasecuenta = document.getElementById('clasecuenta').value;
    var numeros = /[0-9]/;
    if (numeros.test(clasecuenta) || clasecuenta === "") {
        alert('el campo clase cuenta debe contener letras');
        return false;
    }

    var naturaleza = document.getElementById('naturaleza').value;
    var numeros = /[0-9]/;
    if (numeros.test(naturaleza) || naturaleza === "") {
        alert('el campo naturaleza de cuenta debe contener letras');
        return false;
    } else {
        alert('Plan de cuentas editado satisfactoriamente');
        return true;
    }








}

function comprasconfig() {
    var id = document.getElementById('procuenta').value;
    var letras = /[a-zA-Z]/;
    if (letras.test(id) || id === "") {
        alert('el campo de cuenta de proveedor debe contener numeros');
        return false;
    }
    var pronombre = document.getElementById('pronombre').value;
    var numeros = /[0-9]/;
    if (numeros.test(pronombre) || pronombre === "") {
        alert('el campo de nombre de proveedor debe contener letras');
        return false;
    }

    var pacuenta = document.getElementById('pacuenta').value;
    var letras = /[a-zA-Z]/;
    if (letras.test(pacuenta) || pacuenta === "") {
        alert('el campo de cuenta de pago anticipado debe contener numeros');
        return false;
    }
    var panombre = document.getElementById('panombre').value;
    var numeros = /[0-9]/;
    if (numeros.test(panombre) || panombre === "") {
        alert('el campo de nombre de pago anticipado debe contener letras');
        return false;
    }

    var bancocuentanombre = document.getElementById('bancocuentanombre').value;
    var numeros = /[0-9]/;
    if (numeros.test(panombre) || bancocuentanombre === "") {
        alert('el campo de nombre de banco debe contener letras');
        return false;
    }
    var banconumerocuenta = document.getElementById('banconumerocuenta').value;
    var letras = /[a-zA-Z]/;
    if (letras.test(banconumerocuenta) || banconumerocuenta === "") {
        alert('el campo de numero de cuenta de banco debe contener numeros');
        return false;
    }
    var banco = document.getElementById('banco').value;
    if (banco === "x") {
        alert(' Selecciona el banco');
        return false;
    }
    var iepscuenta = document.getElementById('iepscuenta').value;
    var letras = /[a-zA-Z]/;
    if (letras.test(iepscuenta) || iepscuenta === "") {
        alert('el campo de cuenta contable de IEPS debe contener numeros');
        return false;
    }
    var iepsnombre = document.getElementById('iepsnombre').value;
    var numeros = /[0-9]/;
    if (numeros.test(iepsnombre) || iepsnombre === "") {
        alert('el campo de nombre de IEPS debe contener letras');
        return false;
    }
    var isrcuenta = document.getElementById('isrcuenta').value;
    var letras = /[a-zA-Z]/;
    if (letras.test(isrcuenta) || isrcuenta === "") {
        alert('el campo de cuenta contable de ISR debe contener numeros');
        return false;
    }
    var isrnombre = document.getElementById('isrnombre').value;
    var numeros = /[0-9]/;
    if (numeros.test(isrnombre) || isrnombre === "") {
        alert('el campo de nombre de ISR debe contener letras');
        return false;
    }
    var ivacuenta = document.getElementById('ivacuenta').value;
    var letras = /[a-zA-Z]/;
    if (letras.test(ivacuenta) || ivacuenta === "") {
        alert('el campo de cuenta contable de IVA debe contener numeros');
        return false;
    }
    var ivanombre = document.getElementById('ivanombre').value;
    var numeros = /[0-9]/;
    if (numeros.test(ivanombre) || ivanombre === "") {
        alert('el campo de nombre de IVA debe contener letras');
        return false;
    } else {
        alert('Configuracion exitosa');
        return true;
    }
}

function ventas() {
    var ventascuenta = document.getElementById('ventascuenta').value;
    var letras = /[a-zA-Z]/;
    if (letras.test(ventascuenta) || ventascuenta === "") {
        alert('el campo de cuenta de cliente debe contener numeros');
        return false;
    }
    var ventasnombre = document.getElementById('ventasnombre').value;
    var numeros = /[0-9]/;
    if (numeros.test(ventasnombre) || ventasnombre === "") {
        alert('el campo de nombre de cliente debe contener letras');
        return false;
    }
    var cobrocuenta = document.getElementById('cobrocuenta').value;
    var letras = /[a-zA-Z]/;
    if (letras.test(cobrocuenta) || cobrocuenta === "") {
        alert('el campo de cuenta de cobro anticipado debe contener numeros');
        return false;
    }
    var cobronombre = document.getElementById('cobronombre').value;
    var numeros = /[0-9]/;
    if (numeros.test(cobronombre) || cobronombre === "") {
        alert('el campo de nombre de cobro anticipado debe contener letras');
        return false;
    }

    var iepscuenta = document.getElementById('iepscuenta').value;
    var letras = /[a-zA-Z]/;
    if (letras.test(iepscuenta) || iepscuenta === "") {
        alert('el campo de cuenta contable de IEPS debe contener numeros');
        return false;
    }
    var iepsnombre = document.getElementById('iepsnombre').value;
    var numeros = /[0-9]/;
    if (numeros.test(iepsnombre) || iepsnombre === "") {
        alert('el campo de nombre de IEPS debe contener letras');
        return false;
    }
    var isrcuenta = document.getElementById('isrcuenta').value;
    var letras = /[a-zA-Z]/;
    if (letras.test(isrcuenta) || isrcuenta === "") {
        alert('el campo de cuenta contable de ISR debe contener numeros');
        return false;
    }
    var isrnombre = document.getElementById('isrnombre').value;
    var numeros = /[0-9]/;
    if (numeros.test(isrnombre) || isrnombre === "") {
        alert('el campo de nombre de ISR debe contener letras');
        return false;
    }
    var ivacuenta = document.getElementById('ivacuenta').value;
    var letras = /[a-zA-Z]/;
    if (letras.test(ivacuenta) || ivacuenta === "") {
        alert('el campo de cuenta contable de IVA debe contener numeros');
        return false;
    }
    var ivanombre = document.getElementById('ivanombre').value;
    var numeros = /[0-9]/;
    if (numeros.test(ivanombre) || ivanombre === "") {
        alert('el campo de nombre de IVA debe contener letras');
        return false;
    } else {
        alert('Configuracion exitosa');
        return true;
    }
}

function ventasconfigimpuestos() {
    var ivaportrasladar = document.getElementById('ivaportrasladar').value;
    var letras = /[a-zA-Z]/;
    if (letras.test(ivaportrasladar) || ivaportrasladar === "") {
        alert('el campo de cuenta contable de IVA por trasladar debe contener numeros');
        return false;
    }
    var ivaxtrasnombre = document.getElementById('ivaxtrasnombre').value;
    var numeros = /[0-9]/;
    if (numeros.test(ivaxtrasnombre) || ivaxtrasnombre === "") {
        alert('el campo de tipo cuenta de IVA debe contener letras');
        return false;
    }
    var ivatrascuenta = document.getElementById('ivatrascuenta').value;
    var letras = /[a-zA-Z]/;
    if (letras.test(ivatrascuenta) || ivatrascuenta === "") {
        alert('el campo de cuenta contable de IVA trasladado debe contener numeros');
        return false;
    }
    var ivatrasnombre = document.getElementById('ivatrasnombre').value;
    var numeros = /[0-9]/;
    if (numeros.test(ivatrasnombre) || ivatrasnombre === "") {
        alert('el campo de tipo cuenta de IVA trasladado debe contener letras');
        return false;
    } else {
        alert('Configuracion exitosa');
        return true;
    }
}

function comprasconfimpuesto() {
    var ivaacreditarcuenta = document.getElementById('ivaacreditarcuenta').value;
    var letras = /[a-zA-Z]/;
    if (letras.test(ivaacreditarcuenta) || ivaacreditarcuenta === "") {
        alert('el campo de cuenta contable de IVA por acreditar debe contener numeros');
        return false;
    }
    var ivaacreditartipocuenta = document.getElementById('ivaacreditartipocuenta').value;
    var numeros = /[0-9]/;
    if (numeros.test(ivaacreditartipocuenta) || ivaacreditartipocuenta === "") {
        alert('el campo de tipo cuenta de IVA debe contener letras');
        return false;
    }
    var ivaacreditablecuenta = document.getElementById('ivaacreditablecuenta').value;
    var letras = /[a-zA-Z]/;
    if (letras.test(ivaacreditablecuenta) || ivaacreditablecuenta === "") {
        alert('el campo de cuenta contable de IVA acreditable debe contener numeros');
        return false;
    }
    var ivaacreditabletipocuenta = document.getElementById('ivaacreditabletipocuenta').value;
    var numeros = /[0-9]/;
    if (numeros.test(ivaacreditabletipocuenta) || ivaacreditabletipocuenta === "") {
        alert('el campo de tipo cuenta de IVA acreditable debe contener letras');
        return false;
    } else {
        alert('Configuracion exitosa');
        return true;
    }
}

function seleccion() {
    var control = document.getElementsByName('agregarcuenta[]');
    if (!control[0].checked && !control[1].checked && !control[2].checked && !control[3].checked) {
        alert('Elige un campo para modificar.');
        return false;
    } else {
        alert('proceso llevado a cabo');
        return true;
    }
}

function busqueda() {
    var clave = document.getElementById('clave').value;
    var desc = document.getElementById('desc').value;
    var letras = /[a-zA-Z]/;
    if (clave === "" & desc === "") {
        alert('almenos uno de los campos: clave o descripcion deben tener informacion');
        return false;
    }
    if (letras.test(clave)) {
        alert('el campo debe contener numeros');
        document.getElementById('clave').value = "";
        return false;
    }
//    if(clave==""){
//        alert('El campo descripcion no debe estar vacio');
//        document.getElementById('desc').value="";
//        return false;
//    }    
    var numeros = /[0-9]/;
    if (numeros.test(desc)) {
        alert('El campo debe contener letras');
        document.getElementById(desc).value = "";
        return false;
    }
}
//nclave,periodo,fechaini,fechafin,estado
function calencontaeditar() {

    var id = document.getElementById('claveeditar').value;
    alert(id);
    var numeros = /[a-zA-Z]/;
    if (numeros.test(id) || id === "") {
        alert('el campo de clave debe contener numeros');
        return false;
    }
    var periodo = document.getElementById('CalEditperiodo').value;
    if (periodo == "x") {
        alert('elige una opción para el campo periodo');
        return false;
    }


    var fechaini = document.getElementById("Editfechaini").value;
    var fechafin = document.getElementById("Editfechafin").value;
    var hoy = new Date();
    if (fechaini == null || fechaini == 0) {
        alert('No se ha indicado la fecha inicial del periodo');
        return false;
    }

    var fechaini = new Date(document.getElementById('Editfechaini').value);
    var hoy = new Date();
    if (fechaini < hoy) {
        alert('la fecha inicial no puede ser anterior a la actual');
        document.getElementById('fechaini').value = "";
        return false;
    }
    // var fechafin=document.getElementById("fechafin").value;
    if (fechafin == null || fechafin == 0) {
        alert('No se ha indicado la fecha final del periodo');
        return false;
    }


    var fechafin = new Date(document.getElementById('Editfechafin').value);
    var hoy = new Date();
    if (fechafin < hoy) {
        alert('la fecha final no puede ser anterior a la actual');
        document.getElementById('fechafin').value = "";
        return false;
    }

    /* var fechaini=new Date(document.getElementById('fechaini').value);    
     var hoy= new Date();*/
    if (fechafin < fechaini) {
        alert('la fecha final no puede ser anterior a la fecha inicial');
        document.getElementById('fechaini').value = "";
        return false;
    }
    var estado = document.getElementById('Editestado').value;
    if (estado == "x") {
        alert('Selecciona el estado');
        return false;
    } else {
        alert('Calendario editado con exito');
        return true;
    }




}
//nclave,periodo,fechaini,fechafin,estado
function calencontaagregar() {
    var id = document.getElementById('nagregaclave').value;
    var numeros = /[a-zA-Z]/;
    if (numeros.test(id) || id === "") {
        alert('el campo de clave debe contener numeros');
        return false;
    }
    var periodo = document.getElementById('periodo').value;
    if (periodo == "x") {
        alert('Selecciona el periodo');
        return false;
    }


    var fechaini = document.getElementById("fechaini").value;
    var fechafin = document.getElementById("fechafin").value;
    var hoy = new Date();
    if (fechaini == null || fechaini == 0) {
        alert('No se ha indicado la fecha inicial del periodo');
        return false;
    }

    var fechaini = new Date(document.getElementById('fechaini').value);
    var hoy = new Date();
    if (fechaini < fechafin) {
        alert('la fecha inicial no puede ser anterior a la fecha final');
        document.getElementById('fechaini').value = "";
        return false;
    }
    // var fechafin=document.getElementById("fechafin").value;
    if (fechafin == null || fechafin == 0) {
        alert('No se ha indicado la fecha final del periodo');
        return false;
    }

    var fechafin = new Date(document.getElementById('fechafin').value);
    var hoy = new Date();
    if (fechafin < fechaini) {
        alert('la fecha final no puede ser anterior a fecha inicial');
        document.getElementById('fechafin').value = "";
        return false;
    }

    /* var fechaini=new Date(document.getElementById('fechaini').value);    
     var hoy= new Date();*/
    if (fechafin < fechaini) {
        alert('la fecha final no puede ser anterior a la fecha inicial');
        document.getElementById('fechaini').value = "";
        return false;
    }
    var estado = document.getElementById('estado').value;
    if (estado == "x") {
        alert('elige una opción para el campo estado');
        return false;
    } else {
        alert('Agregado satisfactoriamente');
        return true;
    }

}

function calencontEliminar() {
    var id = document.getElementById('neliminaclave').value;
    var numeros = /[a-zA-Z]/;
    if (numeros.test(id) || id === "") {
        alert('el campo de clave debe contener numeros');
        return false;
    } else {
        alert('Calendario eliminado con exito')
        return true;
    }

}



function asientosagregar() {
    var id = document.getElementById('nagregaclave').value;
    var numeros = /[a-zA-Z]/;
    if (numeros.test(id) || id === "") {
        alert('el campo de clave debe contener numeros');
        return false;
    }
    var periodo = document.getElementById('periodo').value;
    if (periodo == "x") {
        alert('elige una opción para el campo periodo');
        return false;
    }
    var fechaini = new Date(document.getElementById('fechaini').value);
    var hoy = new Date();
    if (fechaini < hoy) {
        alert('la fecha inicial no puede ser anterior a la actual');
        document.getElementById('fechaini').value = "";
        return false;
    }
    var fechafin = new Date(document.getElementById('fechafin').value);
    var hoy = new Date();
    if (fechafin < hoy) {
        alert('la fecha final no puede ser anterior a la actual');
        document.getElementById('fechafin').value = "";
        return false;
    }
    var estado = document.getElementById('estado').value;
    if (estado == "x") {
        alert('Selecciona el estado');
        return false;
    } else {
        alert('Calendario agregado con exito');
        return true;
    }

}



function AsientoAgr() {


    var id = document.getElementById('claveAs').value;
    var numeros = /[a-zA-Z]/;
    if (numeros.test(id) || id === "") {
        alert('el campo de clave debe contener numeros');
        return false;
    }
    var moduAs = document.getElementById('moduAs').value;
    if (moduAs == "x") {
        alert('elige una opción para el campo modulo');
        return false;
    }
    var tipoAS = document.getElementById('tipoasientoagr').value;
    if (tipoAS == "x") {
        alert('elige una opción para el campo tipo de asiento');
        return false;
    }

    var periodoAs = document.getElementById('periodoAs').value;
    if (periodoAs == "x") {
        alert('elige una opción para el campo periodo');
        return false;
    }


    var fechaIng = document.getElementById("fechaIng").value;
    if (fechaIng == null || fechaIng == 0) {
        alert('No se ha indicado la fecha de ingreso');
        return false;
    }


    //Detalles
    var fechafac = document.getElementById("fechafac").value;
    if (fechafac == null || fechafac == 0) {
        alert('No se ha indicado la fecha de la factura');
        return false;
    }

    var id = document.getElementById('foliofac').value;
    var numeros = /[a-zA-Z]/;
    if (numeros.test(id) || id === "") {
        alert('el campo folio factura debe contener numeros');
        return false;
    }


    if (!document.getElementById('cuentacargo').checked && !document.getElementById('cuentabono').checked) {
        alert('Debes seleccionar si es cuenta cargo o cuenta abono');
        return false;
    }


    var id = document.getElementById('cuentaCon').value;
    var numeros = /[a-zA-Z]/;
    if (numeros.test(id) || id === "") {
        alert('el campo cuenta contable debe contener numeros');
        return false;
    }

    var descripAs = document.getElementById('descripAs').value;
    var numeros = /[0-9]/;
    if (descripAs === "") {
        alert('El campo descripcion se encuentra vacio');
        return false;
    }



    var id = document.getElementById('porcentajeAs').value;
    var numeros = /[a-zA-Z]/;
    if (numeros.test(id) || id === "") {
        alert('el campo porcentaje debe contener numeros');
        return false;
    }

    var uuid = document.getElementById('uuid').value;

    if (uuid === "") {
        alert('El campo UUID factura se encuentra vacio');
        return false;
    }


    var letra = /[g-zG-Z]/;
    if (letra.test(uuid) || uuid === "") {
        alert('el campo UUID no puede contener letras de la g a la z ');
        return false;
    }

    var cont = 0;
    for (var i = 0; i < uuid.length; i++) {

        if (uuid[i] == "-") {
            cont++;
        }
    }

    if (cont < 4) {
        alert('El campo UUID debe estar separado en 5 grupos por un "-" ');
        alert('Ejemplo: 4A1B43E2-1183-4AD4-A3DE-C2DA787AE56A ');
        return false;
    }

    if (uuid.length == 36) {
        return true;
    } else {
        alert('UUID debe de tener una longitud de 32')
        return false;
    }




    var rfc = document.getElementById('rfc').value;
    var numeros = /[0-9]/;
    if (rfc === "") {
        alert('El campo rfc se encuentra vacio');
        return false;
    }

    if (rfc.length > 12) {
        alert('La longitud del RFC no puede ser mayor a 12 caracteres');
        return false;
    } else {
        alert('Asiento agregado satisfactoriamente');
        return true;
    }


}


function GrupoPlanCuentasAgregar() {
    var claveg = document.getElementById('claveg').value;
    var letras = /[a-zA-Z]/;
    if (claveg === '') {
        alert('el campo clave se encuentra vacio');
        return false
    } else {
        if (letras.test(claveg)) {
            alert('el campo de clave debe contener numeros');
            document.getElementById('claveg').value = "";
            return false;
        }
    }


    var AgrGPDes = document.getElementById('AgrGPDes').value;

    if (AgrGPDes === '') {
        alert('el campo descripcion esta vacio');
        return false;
    }


    var AgrGPTipo = document.getElementById('AgrGPTipo').value;
    var numeros = /[0-9]/;
    if (AgrGPTipo === '') {
        alert('el campo tipo esta vacio');
        return false;
    } else {
        alert('Grupo plan de cuentas agregado satisfactoriamente');
    }


}

function GrupoPlanCuentasEliminar() {

    var id = document.getElementById('GpEliminar').value;
    var numeros = /[a-zA-Z]/;
    if (numeros.test(id) || id === "") {
        alert('el campo clave debe contener numeros ggte');
        return false;
    } else {
        alert('grupo plan de cuentas eliminado satisfactoriamente');
        return true;
    }
}



function GrupoPlanCuentasEditar() {
    var Edtclaveg = document.getElementById('Edtclaveg').value;
    var letras = /[a-zA-Z]/;
    if (Edtclaveg === '') {
        alert('el campo clave se encuentra vacio vacio');
        return false
    } else {
        if (letras.test(Edtclaveg)) {
            alert('el campo de clave debe contener numeros');
            document.getElementById('Edtclaveg').value = "";
            return false;
        }
    }


    var EditGPDes = document.getElementById('EditGPDes').value;
    var numeros = /[0-9]/;
    if (EditGPDes === '') {
        alert('el campo descripcion esta vacio');
        return false;
    }


    var EditGPTipo = document.getElementById('EditGPTipo').value;

    if (EditGPTipo === '') {
        alert('el campo tipo esta vacio');
        return false;
    } else {
        alert('Grupo plan de ceuntas editado satisfactoriamente')
        return true;
    }


}

function AsientosConEditar() {

    var EditASmodu = document.getElementById('EditASmodu').value;
    if (EditASmodu == "x") {
        alert('Selecciona el modulo');
        return false;
    }

    var tipoasientoED = document.getElementById('tipoasientoED').value;
    if (tipoasientoED == "y") {
        alert('Selecciona el tipo de asiento');
        return false;
    }


    /*  var tipoasientoED=document.getElementById('tipoasientoED').value;
     if(tipoasientoED=="x"){
     alert('elige una opción para el campo tipo de asiento');
     return false;
     }*/

    var periodoED = document.getElementById('periodoED').value;
    if (periodoED == "x") {
        alert('Selecciona el  periodo');
        return false;
    }


    var fechaIngE = document.getElementById("fechaIngE").value;
    if (fechaIngE == null || fechaIngE == 0) {
        alert('No se ha indicado la fecha de ingreso');
        return false;
    }


    //Detalles
    var fechafacE = document.getElementById("fechafacE").value;
    if (fechafacE == null || fechafacE == 0) {
        alert('No se ha indicado la fecha de la factura');
        return false;
    }

    var id = document.getElementById('foliofacE').value;
    var numeros = /[a-zA-Z]/;
    if (numeros.test(id) || id === "") {
        alert('el campo folio factura debe contener numeros');
        return false;
    }


    if (!document.getElementById('cuentacargoE').checked && !document.getElementById('cuentabonoE').checked) {
        alert('Debes seleccionar si es cuenta cargo o cuenta abono');
        return false;
    }

    var id = document.getElementById('cuentaConE').value;
    var numeros = /[a-zA-Z]/;
    if (numeros.test(id) || id === "") {
        alert('el campo cuenta contable debe contener numeros');
        return false;
    }

    var descripAs = document.getElementById('descripAsE').value;
    var numeros = /[0-9]/;
    if (descripAs === "") {
        alert('El campo descripcion se encuentra vacio');
        return false;
    }



    var id = document.getElementById('porcentajeAsE').value;
    var numeros = /[a-zA-Z]/;
    if (numeros.test(id) || id === "") {
        alert('el campo porcentaje debe contener numeros');
        return false;
    }

    var uuid = document.getElementById('uuidE').value;
    var numeros = /[0-9]/;
    if (uuid === "") {
        alert('El campo UUID factura se encuentra vacio');
        return false;
    }



    var letra = /[g-zG-Z]/;
    if (letra.test(uuid) || uuid === "") {
        alert('el campo UUID no puede contener letras de la g a la z ');
        return false;
    }

    var cont = 0;
    for (var i = 0; i < uuid.length; i++) {

        if (uuid[i] == "-") {
            cont++;
        }
    }

    if (cont < 4) {
        alert('El campo UUID debe estar separado en 5 grupos por un "-" ');
        alert('Ejemplo: 4A1B43E2-1183-4AD4-A3DE-C2DA787AE56A ');
        return false;
    }

    if (uuid.length == 36) {
        return true;
    } else {
        alert('UUID debe de tener una longitud de 32')
        return false;
    }




    var rfc = document.getElementById('rfcE').value;
    var numeros = /[0-9]/;
    if (rfc === "") {
        alert('El campo rfc se encuentra vacio');
        return false;
    }

    if (rfc.length > 13) {
        alert('La longitud del RFC no puede ser mayor a 13 caracteres');
        return false;
    } else {
        alert('Asiento editado satisfactoriamente');
        return true;
    }
}

function validacadena(id) {
    var clave = document.getElementById(id).value;
    if (clave.length > 6 || clave === "" || clave.length !== 6) {
        alert('la clave debe contener 6 digitos');
        document.getElementById(id).value = "";
        return false;
    } else {
        alert('llevando a cabo el proceso');
        //document.getElementById(id).value="";        
        return true;
    }
}


function validacion() {
    var opcion = document.getElementById('idasiento').value;
    alert(opcion);
    return false;
}
function activar() {
    if (document.getElementById('deducible').checked == false) {
        document.getElementById('deducible').value = false;
        document.getElementById('porcentajeAs').disabled = true;
    }
    if (document.getElementById('deducible').checked == true) {
        document.getElementById('deducible').value = true;
        document.getElementById('porcentajeAs').disabled = false;
    }
}

function valor() {
    var asiento = document.getElementsByName('idasientog').value;
    alert(asiento);
    document.getElementsByName('idasientogeneral').value = asiento;
}
