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

  mostrarOcultarCarrito() {
    
    if(this.claseCarrito === "carrito-panel panel-oculto") {
      this.claseCarrito = "carrito-panel";
    } else {
      this.claseCarrito = "carrito-panel panel-oculto"
    }
  }

  consultarCantidad() {
    return this.carrito.length === 0;
  }
}
