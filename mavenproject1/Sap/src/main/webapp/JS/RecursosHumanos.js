function regreso(){
   window.location.hash="no-back-button";
   window.location.hash="Again-No-back-button";
   window.onhashchange=function(){window.location.hash="no-back-button";};
}

function datosCurp(){
    var cadena = document.getElementById("curpContratarEmp").value.toString();
    var nac = "";
    if(cadena.length === 18){
        var lugar = cadena.substring(11,13);
        switch(lugar.toString().toUpperCase()){
            case "AS":
                nac = "Aguascalientes";
                break;
            case "BC":
                nac = "Baja California";
                break;
            case "BS":
                nac = "Baja California Sur";
                break;
            case "CC":
                nac = "Campeche";
                break;
            case "CL":
                nac = "Coahuila";
                break;
            case "CM":
                nac = "Colima";
                break;
            case "CS":
                nac = "Chiapas";
                break;
            case "CH":
                nac = "Chihuahua";
                break;
            case "DF":
                nac = "Distrito Federal";
                break;
            case "DG":
                nac = "Durango";
                break;
            case "GT":
                nac = "Guanajuato";
                break;
            case "GR":
                nac = "Guerrero";
                break;
            case "HG":
                nac = "Hidalgo";
                break;
            case "JC":
                nac = "Jalisco";
                break;
            case "MC":
                nac = "México";
                break;
            case "MN":
                nac = "Michoacan";
                break;
            case "MS":
                nac = "Morelos";
                break;
            case "NT":
                nac = "Nayarit";
                break;
            case "NL":
                nac = "Nuevo León";
                break;
            case "OC":
                nac = "Oaxaca";
                break;
            case "PL":
                nac = "Puebla";
                break;
            case "QT":
                nac = "Querétaro";
                break;
            case "QR":
                nac = "Quintana Roo";
                break;
            case "SP":
                nac = "San Luis Potosí";
                break;
            case "SR":
                nac = "Sonora";
                break;
            case "SL":
                nac = "Sinaloa";
                break;
            case "TC":
                nac = "Tabasco";
                break;
            case "TS":
                nac = "Tamaulipas";
                break;
            case "BC":
                nac = "Baja California";
                break;
            case "TL":
                nac = "Tlaxcala";
                break;
            case "VZ":
                nac = "Veracruz";
                break;
            case "YN":
                nac = "Yucatan";
                break;
            case "ZS":
                nac = "Zacatecas";
                break;
            default:
                break;
        }
        document.getElementById("lugarContratarEmp").value = nac.toString();
    }else{
        if(!(cadena.toString().toLowerCase() === "no aplica")){
            alert("El curp debe tener 18 caracteres");
            document.getElementById("curpContratarEmp").value = "";
        }
    }
}

function datosCurpM(){
    var cadena = document.getElementById("curpModificarEmp").value.toString();
    var nac = "";
    if(cadena.length === 18){
        var lugar = cadena.substring(11,13);
        switch(lugar.toString().toUpperCase()){
            case "AS":
                nac = "Aguascalientes";
                break;
            case "BC":
                nac = "Baja California";
                break;
            case "BS":
                nac = "Baja California Sur";
                break;
            case "CC":
                nac = "Campeche";
                break;
            case "CL":
                nac = "Coahuila";
                break;
            case "CM":
                nac = "Colima";
                break;
            case "CS":
                nac = "Chiapas";
                break;
            case "CH":
                nac = "Chihuahua";
                break;
            case "DF":
                nac = "Distrito Federal";
                break;
            case "DG":
                nac = "Durango";
                break;
            case "GT":
                nac = "Guanajuato";
                break;
            case "GR":
                nac = "Guerrero";
                break;
            case "HG":
                nac = "Hidalgo";
                break;
            case "JC":
                nac = "Jalisco";
                break;
            case "MC":
                nac = "México";
                break;
            case "MN":
                nac = "Michoacan";
                break;
            case "MS":
                nac = "Morelos";
                break;
            case "NT":
                nac = "Nayarit";
                break;
            case "NL":
                nac = "Nuevo León";
                break;
            case "OC":
                nac = "Oaxaca";
                break;
            case "PL":
                nac = "Puebla";
                break;
            case "QT":
                nac = "Querétaro";
                break;
            case "QR":
                nac = "Quintana Roo";
                break;
            case "SP":
                nac = "San Luis Potosí";
                break;
            case "SR":
                nac = "Sonora";
                break;
            case "SL":
                nac = "Sinaloa";
                break;
            case "TC":
                nac = "Tabasco";
                break;
            case "TS":
                nac = "Tamaulipas";
                break;
            case "BC":
                nac = "Baja California";
                break;
            case "TL":
                nac = "Tlaxcala";
                break;
            case "VZ":
                nac = "Veracruz";
                break;
            case "YN":
                nac = "Yucatan";
                break;
            case "ZS":
                nac = "Zacatecas";
                break;
            default:
                break;
        }
        document.getElementById("lugarModificarEmp").value = nac.toString();
    }else{
        if(!(cadena.toString().toLowerCase() === "no aplica")){
            alert("El curp debe tener 18 caracteres");
        }
    }
}

function valida(){
    var curp = document.getElementById("curpContratarEmp").value.toString();
    var nombre = document.getElementById("nombreContratarEmp").value.toString();
    var paterno = document.getElementById("paternoContratarEmp").value.toString();
    var materno = document.getElementById("maternoContratarEmp").value.toString();
    var numero = /[0-9]/;
    var patron = /([A-Z]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM](AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS)[A-Z]{3}[0-9A-Z]\d)/;
    if(numero.test(nombre) || numero.test(paterno) || numero.test(materno)){
        alert("Datos no validos");
        return false;
    }
    if(!patron.test(curp)){
        alert("CURP no valido");
        return false;
    }
}

function validaM(){
    var curp = document.getElementById("curpModificarEmp").value.toString();
    var nombre = document.getElementById("nombreModificarEmp").value.toString();
    var paterno = document.getElementById("paternoModificarEmp").value.toString();
    var materno = document.getElementById("maternoModificarEmp").value.toString();
    var numero = /[0-9]/;
    var patron = /([A-Z]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM](AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS)[A-Z]{3}[0-9A-Z]\d)/;
    if(numero.test(nombre) || numero.test(paterno) || numero.test(materno)){
        alert("Datos no validos");
        return false;
    }
    if(!patron.test(curp)){
        alert("CURP no valido");
        return false;
    }
}

$(document).ready(function(){
    
    $("#origenMexico").click(function(){
        $("#curpContratarEmp").prop("readonly",false);
        $("#rfcContratarEmp").prop("readonly",false);
        $("#nacContratarEmp").prop("readonly",true);
        $("#lugarContratarEmp").prop("readonly",true);
        $("#nacContratarEmp").val("Mexicana");
        $("#lugarContratarEmp").val("");
        $("#curpContratarEmp").val("");
        $("#rfcContratarEmp").val("");
    });
    
    $("#origenExtranjero").click(function(){
        $("#curpContratarEmp").prop("readonly",true);
        $("#rfcContratarEmp").prop("readonly",true);
        $("#nacContratarEmp").prop("readonly",false);
        $("#lugarContratarEmp").prop("readonly",false);
        $("#nacContratarEmp").val("");
        $("#lugarContratarEmp").val("");
        $("#curpContratarEmp").val("No aplica");
        $("#rfcContratarEmp").val("No aplica");
    });
    
    $("#puestoContratarEmp").change(function(){
        var puesto = $("#puestoContratarEmp").val();
        switch(puesto){
            case "1":
                $("#horarioContratarEmp").val("7:00 - 18:00");
                $("#sueldoContratarEmp").val("5000.00");
                break;
            case "2":
                $("#horarioContratarEmp").val("7:00 - 16:00");
                $("#sueldoContratarEmp").val("3500.00");
                break;
            case "3":
                $("#horarioContratarEmp").val("7:00 - 15:00");
                $("#sueldoContratarEmp").val("4000.00");
                break;
            default:
                $("#horarioContratarEmp").val("");
                $("#sueldoContratarEmp").val("");
                break;
        }
    });
    
    $("#origenModMexico").click(function(){
        $("#curpModificarEmp").prop("readonly",false);
        $("#rfcModificarEmp").prop("readonly",false);
        $("#nacModificarEmp").prop("readonly",true);
        $("#lugarModificarEmp").prop("readonly",true);
        $("#nacModificarEmp").val("Mexicana");
        $("#lugarModificarEmp").val("");
        $("#curpModificarEmp").val("");
        $("#rfcModificarEmp").val("");
    });
    
    $("#origenModExtranjero").click(function(){
        $("#curpModificarEmp").prop("readonly",true);
        $("#rfcModificarEmp").prop("readonly",true);
        $("#nacModificarEmp").prop("readonly",false);
        $("#lugarModificarEmp").prop("readonly",false);
        $("#nacModificarEmp").val("");
        $("#lugarModificarEmp").val("");
        $("#curpModificarEmp").val("No aplica");
        $("#rfcModificarEmp").val("No aplica");
    });
    
    $("#puestoModificarEmp").change(function(){
        var puesto = $("#puestoModificarEmp").val();
        switch(puesto){
            case "1":
                $("#horarioModificarEmp").val("7:00 - 18:00");
                $("#sueldoModificarEmp").val("5000.00");
                break;
            case "2":
                $("#horarioModificarEmp").val("7:00 - 16:00");
                $("#sueldoModificarEmp").val("3500.00");
                break;
            case "3":
                $("#horarioModificarEmp").val("7:00 - 15:00");
                $("#sueldoModificarEmp").val("4000.00");
                break;
            default:
                $("#horarioModificarEmp").val("");
                $("#sueldoModificarEmp").val("");
                break;
        }
    });  
});