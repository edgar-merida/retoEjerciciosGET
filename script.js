let alumnos = [];
let notas = [];
let asignaturas = [];

function getAlumnos(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
        let datos = JSON.parse(xhr.response);
        alumnos.push(datos);
        tableAlumnos(alumnos);
    };
    xhr.send();   
};

function tableAlumnos(arreglo) {
    document.getElementById("encabezados").innerHTML = '';
    let head = "";
    head += "<tr>"
    head += "<th scope='col'>Alumno</th>";
    head += "<th scope='col'>Nombre</th>";
    head += "<th scope='col'>Apellido</th>";
    head += "<th scope='col'>Correo</th>";
    head += "<th scope='col'>Contraseña</th>";
    head += "<th scope='col'>Imagen</th>";
    head += "</tr>"
    let tabla1 = document.getElementById("encabezados");
    tabla1.insertAdjacentHTML('beforeend', head);

    for (let i = 0; i < arreglo.length; i++) {
        const a = arreglo[i];
        document.getElementById("tabla").innerHTML = "";
        for (let index = 0; index < a.length; index++) {
            const element = a[index];
            let link = "'https://6189d55b34b4f400177c4285.mockapi.io/getNotas'";
            let alu = element.Alumno;
            
            let html = "";
            html += "<tr>";

            html += '<td><span onclick="getAlumnoNotas('+link+',\''+alu+ '\')" role="button" >'+element.Alumno+'</span></td>';
            
            html += "   <td>" + element.Alumno + "</td>";
            html += "   <td>" + element.Nombre + "</td>";
            html += "   <td>" + element.Apellido + "</td>";
            html += "   <td>" + element.Correo + "</td>";
            html += "   <td>" + element.Contraseña + "</td>";
            html += "   <td><img src='" + element.Imagen + "' /></td>";
            html += "</tr>";
            let tabla = document.getElementById("tabla");
            tabla.insertAdjacentHTML('beforeend', html);
        }
    }
}

//getAlumnos("https://6189d55b34b4f400177c4285.mockapi.io/getAlumnos"); 
//console.log(alumnos);

function getAsignaturas(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
        let datos = JSON.parse(xhr.response);
        asignaturas.push(datos);
        tableAsignaturas(asignaturas);
    };
    xhr.send();   
};

function tableAsignaturas(arreglo) {
    document.getElementById("encabezados").innerHTML = '';
    let head = "";
    head += "<tr>"
    head += "<th scope='col'>Asignatura</th>";
    head += "<th scope='col'>Imagen</th>";
    head += "</tr>"
    let tabla1 = document.getElementById("encabezados");
    tabla1.insertAdjacentHTML('beforeend', head);
    for (let i = 0; i < arreglo.length; i++) {
        const a = arreglo[i];
        document.getElementById("tabla").innerHTML = "";
        for (let index = 0; index < a.length; index++) {
            const element = a[index];
            let link = "'https://6189d55b34b4f400177c4285.mockapi.io/getNotas'";
            let asignatura = element.Asignatura;
            let html = "";
            html += "<tr>";
            html += '<td><span onclick="getAsignaturaNotas(\''+asignatura+'\','+link+')" role="button" >'+element.Asignatura+'</span></td>';
            html += "<td><img src='" + element.Imagen + "' /></td>";
            html += "</tr>";
            let tabla = document.getElementById("tabla");
            tabla.insertAdjacentHTML('beforeend', html);
        }
    }
};

//getAsignaturas("https://6189d55b34b4f400177c4285.mockapi.io/getAsignaturas");
//console.log(asignaturas);

function getNotas(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
        let datos = JSON.parse(xhr.response);
        notas.push(datos);
        tableNotas(notas);
    };
    xhr.send();  
};

function tableNotas(arreglo) {
    document.getElementById("encabezados").innerHTML = '';
    let head = "";
    head += "<tr>"
    head += "<th scope='col'>Asignatura</th>";
    head += "<th scope='col'>Alumno</th>";
    head += "<th scope='col'>Nota</th>";
    head += "</tr>"
    let tabla1 = document.getElementById("encabezados");
    tabla1.insertAdjacentHTML('beforeend', head);
    for (let i = 0; i < arreglo.length; i++) {
        const a = arreglo[i];
        document.getElementById("tabla").innerHTML = "";
        for (let index = 0; index < a.length; index++) {
            const element = a[index];
            let html = "";
            html += "<tr>";
            html += "   <td>" + element.Asignatura + "</td>";
            html += "   <td>" + element.Alumno + "</td>";
            html += "   <td>" + element.Nota + "</td>";
            html += "</tr>";
            let tabla = document.getElementById("tabla");
            tabla.insertAdjacentHTML('beforeend', html);
        }
    }
};

//getNotas("https://6189d55b34b4f400177c4285.mockapi.io/getNotas");
//console.log(notas);

function getAsignaturaNotas(asignatura, url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
        let datos = JSON.parse(xhr.response);
        notas.push(datos);
        setDatos(notas);
    };
    xhr.send();
    setDatos = function (notas) {
        document.getElementById("encabezados").innerHTML = '';
        let head = "";
        head += "<tr>"
        head += "<th scope='col'>Asignatura</th>";
        head += "<th scope='col'>Alumno</th>";
        head += "<th scope='col'>Nota</th>";
        head += "</tr>"
        let tabla1 = document.getElementById("encabezados");
        tabla1.insertAdjacentHTML('beforeend', head);       
        for (let index = 0; index < notas.length; index++) {
            const a = notas[index];
            document.getElementById("tabla").innerHTML = "";
            for (let i = 0; i < a.length; i++) {
                const element = a[i];
                if (asignatura == element.Asignatura) {
                    let html = "";
                    html += "<tr>";
                    html += "   <td>" + element.Asignatura + "</td>";
                    html += "   <td>" + element.Alumno + "</td>";
                    html += "   <td>" + element.Nota + "</td>";
                    html += " ";
                    html += "</tr>";
                    let tabla = document.getElementById("tabla");
                    tabla.insertAdjacentHTML('beforeend', html);
                }
            }
        }
    }
};

//getAsignaturaNotas("Fisica",'https://6189d55b34b4f400177c4285.mockapi.io/getNotas');


function getAlumnoNotas(url, alumno) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
        let datos = JSON.parse(xhr.response);
        notas.push(datos);
        setDatos(notas);
    };
    xhr.send();
    setDatos = function (notas) {
        document.getElementById("encabezados").innerHTML="";
        let head = "";
        head += "<tr>"
        head += "<th scope='col'>Asignatura</th>";
        head += "<th scope='col'>Alumno</th>";
        head += "<th scope='col'>Nota</th>";
        head += "</tr>"
        let tabla1 = document.getElementById("encabezados");
        tabla1.insertAdjacentHTML('beforeend', head);
        for (let index = 0; index < notas.length; index++) {
            const a = notas[index];
            document.getElementById("tabla").innerHTML="";
            for (let i = 0; i < a.length; i++) {
                const element = a[i];

                if (alumno == element.Alumno) {
                    let html = "";
                    html += "<tr>";
                    html += "   <td>" + element.Asignatura + "</td>";
                    html += "   <td>" + element.Alumno + "</td>";
                    html += "   <td>" + element.Nota + "</td>";
                    html += " ";
                    html += "</tr>";
                    let tabla = document.getElementById("tabla");
                    tabla.insertAdjacentHTML('beforeend', html);
                }
            }
        }
    }
};

//getAlumnoNotas("https://6189d55b34b4f400177c4285.mockapi.io/getNotas", "500");




