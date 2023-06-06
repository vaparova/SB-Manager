export class DatosAutos{
  dominio: string;
  marca: string;
  modelo: string;
  anno: number;

  constructor(dominio:string, marca: string, modelo:string, anno: number){
    this.dominio = dominio;
    this.marca = marca;
    this.modelo = modelo;
    this.anno = anno;
  }
}
