function AgregarCurso(curso,cursos){
    cursos.push(curso)
    return cursos
}

function EliminarCurso(cursos){
    cursos.pop();
    return cursos;
}

function ListarCursos(cursos){
    document.write(`sus cursos son:`)
    for(i of cursos){
        document.write(i);
    }
}

const CargarCursos = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(cargar.length > 0){
                resolve(`Ha cargado el curso "${cargar}" con exito`);
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
        alert(error);
    }
}



opcion = prompt("Bienvenido a nuestro sistema de gestión de cursos \nen el encontrarás las siguientes opciones: \n 1.Agregar curso \n 2.Eliminar Curso \n 3.Listar cursos \n 4.Cargar cursos\n 0. Salir");
cursos=["curso1","curso2"];
if(opcion == 1){
    curso = prompt("ingrese el curso a agregar");
    AgregarCurso(curso,cursos);
    document.write(`sus cursos son ${cursos}`);
}else if(opcion == 2){
    EliminarCurso(cursos);
    document.write(`sus cursos restantes son ${cursos}`);
}else if(opcion == 3){
    ListarCursos(cursos);
}else if(opcion == 4){
    cargar = prompt("ingrese que curso desea cargar");
    ImprimirCursoCargado();
}