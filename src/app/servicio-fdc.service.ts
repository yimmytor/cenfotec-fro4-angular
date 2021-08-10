import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFdcResult } from './principal/models/fdc-result';


@Injectable()
export class ServicioFdcService {
  constructor(private http:HttpClient) { }

  obtenerProductos(busqueda: string): Observable<IFdcResult> {    
    let url = environment.fdcApiUrl + `?query=${busqueda}&pageSize=15&api_key=${environment.fdcApiKey}`;
    
    return this.http.get<IFdcResult>(url);    
  }
}
