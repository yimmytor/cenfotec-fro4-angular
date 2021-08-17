import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicioCarritoService } from 'src/app/servicio-carrito.service';
import { IProductoCarrito } from '../models/producto-carrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  public carrito = Array<IProductoCarrito>();
  public subscription: Subscription | undefined;
  public claseCarrito = "carrito-panel panel-oculto";
  public carritoAbierto = false;

  constructor(private servicioCarrito: ServicioCarritoService) { }

  ngOnInit() {
    this.subscription = this.servicioCarrito.itemsObservable$
    .subscribe((items: Array<IProductoCarrito>) => {
      this.carrito = items;      
    });        

    this.servicioCarrito.actualizar();
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }    
  }

  obtenerTotalCarrito() {
    return this.carrito.length > 0 ? this.carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0) : 0;
  }

  eliminarProductoCarrito(id: number) {
    this.servicioCarrito.eliminarItem(id);
  }

  mostrarOcultarCarrito() {    
    if(this.claseCarrito === "carrito-panel panel-oculto") {
      this.claseCarrito = "carrito-panel";
      this.carritoAbierto = true;
    } else {
      this.claseCarrito = "carrito-panel panel-oculto"
      this.carritoAbierto = false;
    }
  }

  consultarCantidad() {
    return this.carrito.length === 0;
  }
}
