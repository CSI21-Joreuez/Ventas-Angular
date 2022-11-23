import { Injectable } from '@angular/core';
import { CLIENTES } from '../../datos/clientes-mock';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
private listaClientes = CLIENTES;
  constructor() { }
  public getClientes(): Cliente[] {
  return this.listaClientes;
  }
  public getDetail(id: number): Cliente {
    return this.listaClientes.find(c => c.id === id)!;
  }
  public addCliente(cliente: Cliente): void {
  this.listaClientes.push(cliente);
  }
  public delCliente(id: number): boolean{
    let indice = this.listaClientes.findIndex(cl => cl.id == id);
      this.listaClientes.slice(indice, 1)
      return true;    
  }
  public updateCliente(id: number, cliente: Cliente): void {
  let indice = this.listaClientes.findIndex(cl => cl.id == id);
  this.listaClientes[indice] = cliente;
  }

}
