import { Injectable } from '@angular/core';
import { IProducto } from './principal/models/producto';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {
  listaProductos: Array<IProducto>;

  constructor() {
    this.listaProductos = [
      {productNumber: 1, nombre: 'GOLD STANDARD WHEY 5LBS OPTIMUM', precio: 45000,enCarrito: 0,urlImagen: 'assets/img/productos/producto-1.jpg'},
      {productNumber: 2, nombre: 'GLUTAMINE DECANATE 300G - MUSCLEMEDS', precio: 16500,enCarrito: 0,urlImagen: 'assets/img/productos/producto-2.jpg'},
      {productNumber: 3, nombre: 'ELITE WHEY 5 LBS - DYMATIZE', precio: 40000,enCarrito: 0,urlImagen: 'assets/img/productos/producto-3.jpg'},
      {productNumber: 4, nombre: 'ANIMAL CUTS 42 PAQUETES UNIVERSAL', precio: 27250,enCarrito: 0,urlImagen: 'assets/img/productos/producto-4.jpg'},
      {productNumber: 5, nombre: 'L-CARNITINA INNOVATIVE NUTRIENTS', precio: 10000,enCarrito: 0,urlImagen: 'assets/img/productos/producto-5.jpg'},
      {productNumber: 6, nombre: 'CARNIVOR MASS 6 LBS - MUSCLEMEDS', precio: 30500,enCarrito: 0,urlImagen: 'assets/img/productos/producto-6.jpg'}
    ];
  }

  public obtenerProductos(): Array<IProducto> {    
    return this.listaProductos;
  }

  public obtenerProducto(productNumber: number) : IProducto | undefined{
    return this.listaProductos.filter(producto => producto.productNumber === productNumber)[0];
  }
}
