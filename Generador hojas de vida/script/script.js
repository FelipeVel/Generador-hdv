$(document).ready(function(){
    $('#boton-guardar').click(function(){
        var nombre = document.getElementById("nombretxt").value;
        var apellido = document.getElementById("apellidotxt").value;
        var imagensrc = document.getElementById("img").src;
        var documento = document.getElementById("documentotxt").value;
        var edad = document.getElementById("edadtxt").value;
        var correo = document.getElementById("correotxt").value;
        var telefono = document.getElementById("telefonotxt").value;
        var universidad = document.getElementById("universidadtxt").value;
        var bachillerato = document.getElementById("bachilleratotxt").value;
        var primaria = document.getElementById("primariatxt").value;
        var empresa = document.getElementById("empresatxt").value;
        var cargo = document.getElementById("cargotxt").value;

        localStorage.setItem("nombre", nombre);
        localStorage.setItem("apellido", apellido);
        localStorage.setItem("imagen", imagensrc);
        localStorage.setItem("documento", documento);
        localStorage.setItem("edad", edad);
        localStorage.setItem("correo", correo);
        localStorage.setItem("telefono", telefono);
        localStorage.setItem("universidad", universidad);
        localStorage.setItem("bachillerato", bachillerato);
        localStorage.setItem("primaria", primaria);
        localStorage.setItem("experiencia", empresa+" - "+cargo);

        document.getElementById("nombretxt").value ="";
        document.getElementById("apellidotxt").value = "";
        document.getElementById("img").src = "";
        document.getElementById("documentotxt").value="";
        document.getElementById("edadtxt").value="";
        document.getElementById("correotxt").value="";
        document.getElementById("telefonotxt").value="";
        document.getElementById("universidadtxt").value="";
        document.getElementById("bachilleratotxt").value="";
        document.getElementById("primariatxt").value="";
        document.getElementById("empresatxt").value="";
        document.getElementById("cargotxt").value="";
    });
});

$(document).ready(function(){
    $('#boton-cargar').click(function(){
        var nombre = localStorage.getItem("nombre");
        var apellido = localStorage.getItem("apellido");
        var img = localStorage.getItem("imagen");
        var documento = localStorage.getItem("documento");
        var edad = localStorage.getItem("edad");
        var correo = localStorage.getItem("correo");
        var telefono = localStorage.getItem("telefono");
        var universidad = localStorage.getItem("universidad");
        var bachillerato = localStorage.getItem("bachillerato");
        var primaria = localStorage.getItem("primaria");
        var experiencia = localStorage.getItem("experiencia");

        document.getElementById("nombre").innerHTML = nombre;
        document.getElementById("apellido").innerHTML = apellido;
        document.getElementById("imagen").src= img;
        document.getElementById("documento").innerHTML = documento;
        document.getElementById("edad").innerHTML = edad;
        document.getElementById("correo").innerHTML = correo;
        document.getElementById("telefono").innerHTML = telefono;
        document.getElementById("universidad").innerHTML = universidad;
        document.getElementById("bachillerato").innerHTML = bachillerato;
        document.getElementById("primaria").innerHTML = primaria;
        document.getElementById("experiencia").innerHTML = experiencia;
    });
});

$(document).ready(function(){
    $('#boton-limpiar').click(function(){
        localStorage.clear();
    });
});

var readURL =function(input){
    document.getElementById("img").style.display ="block";
    if(input.files && input.files[0]){
        var reader = new FileReader();
        reader.onload=function(e){
            document.getElementById("img").src=e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}