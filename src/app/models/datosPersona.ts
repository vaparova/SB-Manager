export class DatosPersona{
  nombre: string;
  apellido: string;
  cuil: number;

  constructor(nombre: string,
              apellido: string,
              cuil: number){
                this.nombre = nombre;
                this.apellido = apellido;
                this.cuil = cuil;
              }
}
