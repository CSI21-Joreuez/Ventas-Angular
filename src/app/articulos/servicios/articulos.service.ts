import { Injectable } from '@angular/core';
import { ARTICULOS } from '../../datos/articulos-mock';
import { Articulo } from '../interfaces/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private listaArticulos = ARTICULOS;
  constructor() { }
  public getArticulo(): Articulo[] {
  return this.listaArticulos;
  }
  public getDetail(id: number): Articulo {
    return this.listaArticulos.find(c => c.id === id)!;
  }
  public addArticulo(articulo: Articulo): void {
  this.listaArticulos.push(articulo);
  }
  public delArticulo(id: number): boolean{
    let indice = this.listaArticulos.findIndex(cl => cl.id == id);
      this.listaArticulos.slice(indice, 1)
      return true;    
  }
  public updateArticulo(id: number, cliente: Articulo): void {
  let indice = this.listaArticulos.findIndex(cl => cl.id == id);
  this.listaArticulos[indice] = cliente;
  }

}
