//función constructora para paciente
function Paciente(nombre, edad, genero, enfermedad) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.enfermedad = enfermedad;
}

//getters y setters del objeto paciente
Paciente.prototype.getNombre = function () {
    return this.nombre;
};

Paciente.prototype.setNombre = function (nombre) {
    this.nombre = nombre;
};

Paciente.prototype.getEdad = function () {
    return this.edad;
};

Paciente.prototype.setEdad = function (edad) {
    this.edad = edad;
};

Paciente.prototype.getGenero = function () {
    return this.genero;
};

Paciente.prototype.setGenero = function (genero) {
    this.genero = genero;
};

Paciente.prototype.getEnfermedad = function () {
    return this.enfermedad;
};

Paciente.prototype.setEnfermedad = function (enfermedad) {
    this.enfermedad = enfermedad;
};

//búsqueda de los pacientes por nombre

Paciente.prototype.buscarPorNombre = function (nombre) {
    if (this.nombre.toLowerCase() === nombre.toLowerCase()) {
        return this;
    }
};

//Impresión en consola
Paciente.prototype.mostrarTodos = function () {
    console.log("Lista de pacientes:");
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad);
    console.log("Género: " + this.genero);
    console.log("Enfermedad: " + this.enfermedad);
};

//instanciar

let paciente1 = new Paciente("Eulalio", 80, "Masculino", "Resfriado común");

let paciente2 = new Paciente("Anacleta", 75, "Femenino", "Alergia estacional");

let paciente3 = new Paciente("Claudino", 87, "Masculino", "Hipertensión");

// ejemplo de búsqueda por nombre
console.log(paciente1.buscarPorNombre("Eulalio")); // Debería mostrar el objeto paciente1

// ejemplo de mostrar todos los pacientes de la lista
paciente1.mostrarTodos();
paciente2.mostrarTodos();
paciente3.mostrarTodos();