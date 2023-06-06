export class DatosEstadoReparacion{
  estadosReparacion =  [
    "en carga",
    "ingresado",
    "en proceso",
    "para entregar",
    "terminado"
  ];

  constructor(){
  }

  mostrarEstadoReparacion(idx: number){
    return this.estadosReparacion[idx];
  }
}
