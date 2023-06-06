export class DatosTrabajosRealizados{
  fecha: Date;
  detalle: string;

  constructor(detalle: string){
    this.fecha = new Date();
    this.detalle = detalle;
  }
}
