$(document).ready(function(){
    
    $("#origenMexico").click(function(){
        $("#curpContratarEmp").prop("disabled",false);
        $("#rfcContratarEmp").prop("disabled",false);
        $("#edadContratarEmp").prop("disabled",true);
        $("#nacContratarEmp").prop("disabled",true);
        $("#lugarContratarEmp").prop("disabled",true);
        $("#nacContratarEmp").val("Mexicana");
        $("#edadContratarEmp").val("");
        $("#lugarContratarEmp").val("");
        $("#curpContratarEmp").val("");
        $("#rfcContratarEmp").val("");
    });
    
    $("#origenExtranjero").click(function(){
        $("#curpContratarEmp").prop("disabled",true);
        $("#rfcContratarEmp").prop("disabled",true);
        $("#edadContratarEmp").prop("disabled",false);
        $("#nacContratarEmp").prop("disabled",false);
        $("#lugarContratarEmp").prop("disabled",false);
        $("#nacContratarEmp").val("");
        $("#edadContratarEmp").val("");
        $("#lugarContratarEmp").val("");
        $("#curpContratarEmp").val("");
        $("#rfcContratarEmp").val("");
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
        $("#curpModificarEmp").prop("disabled",false);
        $("#rfcModificarEmp").prop("disabled",false);
        $("#edadModificarEmp").prop("disabled",true);
        $("#nacModificarEmp").prop("disabled",true);
        $("#lugarModificarEmp").prop("disabled",true);
        $("#nacModificarEmp").val("Mexicana");
        $("#edadModificarEmp").val("");
        $("#lugarModificarEmp").val("");
        $("#curpModificarEmp").val("");
        $("#rfcModificarEmp").val("");
    });
    
    $("#origenModExtranjero").click(function(){
        $("#curpModificarEmp").prop("disabled",true);
        $("#rfcModificarEmp").prop("disabled",true);
        $("#edadModificarEmp").prop("disabled",false);
        $("#nacModificarEmp").prop("disabled",false);
        $("#lugarModificarEmp").prop("disabled",false);
        $("#nacModificarEmp").val("");
        $("#edadModificarEmp").val("");
        $("#lugarModificarEmp").val("");
        $("#curpModificarEmp").val("");
        $("#rfcModificarEmp").val("");
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