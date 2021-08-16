import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicioCarritoService } from 'src/app/servicio-carrito.service';
import { ServicioProductosService } from 'src/app/servicio-productos.service';
import { IProducto } from '../../models/producto';
import { IProductoCarrito } from '../../models/producto-carrito';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public productos: Array<IProducto>;
  public carrito = Array<IProductoCarrito>();
  public subscription: Subscription | undefined;

  constructor(private servicioProductos: ServicioProductosService, private servicioCarrito: ServicioCarritoService) {
    this.productos = this.servicioProductos.obtenerProductos();
  }

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
}
