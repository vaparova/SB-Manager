export class DetalleReparacion{
  idPropietario: string;
  dominioAuto: string;
  detalleReparaciones: string;
  detalleRepuestos: string;
  pagosRecibidos: string;
  deudaResultado: string;

  constructor(
    infoPropietario: string,
    dominioAuto: string,
    detalleReparaciones: string,
    detalleRepuestos: string,
    pagosRecibidos: string,
    deudaResultado: string
    ){
      this.idPropietario = infoPropietario;
      this.dominioAuto = dominioAuto;
      this.detalleReparaciones = detalleReparaciones;
      this.detalleRepuestos = detalleRepuestos;
      this.pagosRecibidos = pagosRecibidos;
      this.deudaResultado = deudaResultado;
    }

}
