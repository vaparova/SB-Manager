import { DatosPagosRecibidos } from "./datosPagosRecibidos";
import { DatosRepuestos } from "./datosRepuestos";
import { DatosTrabajosRealizados } from "./datosTrabajosRealizados";

export class DatosReparacion{
  idPropietario: string;
  dominioAuto: string;
  arrTrabajosRealizados: DatosTrabajosRealizados[];
  arrRepuestos: DatosRepuestos[];
  arrPagosRecibidos: DatosPagosRecibidos[];
  deudaResultado: string;

  constructor(
    infoPropietario: string,
    dominioAuto: string,
    arrTrabajosRealizados: DatosTrabajosRealizados[],
    arrRepuestos: DatosRepuestos[],
    arrPagosRecibidos: DatosPagosRecibidos[],
    deudaResultado: string
    ){
      this.idPropietario = infoPropietario;
      this.dominioAuto = dominioAuto;
      this.arrTrabajosRealizados = arrTrabajosRealizados;
      this.arrRepuestos = arrRepuestos;
      this.arrPagosRecibidos = arrPagosRecibidos;
      this.deudaResultado = deudaResultado;
    }

}
