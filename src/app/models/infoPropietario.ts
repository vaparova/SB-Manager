import { DatosContacto } from "./datosContacto";
import { DatosPersona } from "./datosPersona";

export class InfoPropietario {
  idPropietario: string;
  datosPersona: DatosPersona;
  datosContacto: DatosContacto;
  arrAutos: string[];

  constructor(datosPersona: DatosPersona,
              datosContacto: DatosContacto,
              arrAutos: string[]){
                this.idPropietario = this.crearIdPropietario(datosPersona);
                this.datosPersona = datosPersona;
                this.datosContacto = datosContacto;
                this.arrAutos = arrAutos;
              }

  crearIdPropietario(datosPersona: DatosPersona){
    const id = datosPersona.apellido.charAt(0) + datosPersona.nombre.charAt(1) + datosPersona.cuil;
    return id;
  }
}
