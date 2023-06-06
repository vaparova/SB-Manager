export class DatosRepuestos{
  fechaCompra: Date;
  nombreRepuesto: string;
  importe: number;

  constructor(nombreRepuesto: string, importe: number){
    this.fechaCompra = new Date();
    this.nombreRepuesto = nombreRepuesto;
    this.importe = importe;
  }
}
