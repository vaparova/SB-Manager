import { CodigoPostal } from "./codigoPostal";

export class DatosContacto{
  calle: string;
  altura: number;
  codigoPostal: CodigoPostal;
  celular: number;
  email: string;

  constructor(calle: string,
              altura: number,
              codigoPostal: CodigoPostal,
              celular: number,
              email: string){
                this.calle = calle;
                this.altura = altura;
                this.codigoPostal = codigoPostal;
                this.celular = celular;
                this.email = email;
              }
}
