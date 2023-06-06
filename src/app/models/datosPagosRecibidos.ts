import { DatosMedioPago } from "./datosMedioPago";

export class DatosPagosRecibidos{
  fecha: Date;
  importe: number;
  medioPago: string;

  constructor(importe: number, idxMedioPago: number){
    this.fecha = new Date();
    this.importe = importe;
    this.medioPago = this.obtenerMedioPago(idxMedioPago);
  }

  obtenerMedioPago(idx: number): string{
    const mp = new DatosMedioPago();
    return mp.mostrarMediodePago(idx);
  }
}
