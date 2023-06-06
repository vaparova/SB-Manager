export class CodigoPostal{
  cp: string;
  localidad: string;
  provincia: string;

  constructor(cp: string, localidad: string, provincia: string){
    this.cp = cp;
    this.localidad = localidad;
    this.provincia = provincia;

  }
}
