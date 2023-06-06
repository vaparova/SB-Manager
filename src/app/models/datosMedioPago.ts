export class DatosMedioPago{
  mediosdePago =  [
    "efectivo",
    "transferencia bancaria",
    "mercado pago",
    "billetera lemon"
  ];

  constructor(){}

  agregarMediodePago(nuevoMedioDePago: string){
    this.mediosdePago.push(nuevoMedioDePago);
  }

  mostrarMediodePago(idx: number): string{
    return this.mediosdePago[idx];
  }

}
