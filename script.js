function AgregarCurso(curso,cursos){
    tareas.push(curso)
    return cursos
}

function EliminarCurso(cursos){
    tareas.pop();
    return cursos;
}

function ListarCursos(cursos){
    for(i of cursos){
        alert(`sus cursos son ${i}`);
    }
}

const CargarCursos = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(cargar.length > 0){
                resolve(`Ha cargado el curso ${cargar} con exito`);
            }else{
                reject(`No se ha logrado cargar el curso`);
            }
        },3000)
    })
}

async function ImprimirCursoCargado(){
    try{
        const result = await CargarCursos();
        alert(result);
    }catch (error){
        console.log(error);
    }
}



opcion = prompt("Bienvenido a nuestro sistema de gestión de cursos \nen el encontrarás las siguientes opciones: \n 1.Agregar curso \n 2.Eliminar Curso \n 3.Listar cursos \n 4.Cargar cursos\n 0. Salir");
tareas=["curso1","curso2"];
if(opcion == 1){
    tarea = prompt("ingrese el curso a agregar");
    AgregarCurso(curso,cursos);
    alert(`sus cursos son ${cursos}`);
}else if(opcion == 2){
    EliminarCurso(cursos);
    alert(`sus cursos restantes son ${tareas}`);
}else if(opcion == 3){
    ListarTareas(cursos);
}else if(opcion == 4){
    cargar = prompt("ingrese que curso desea cargar");
    ImprimirTareaCargada();
}