import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from './Producto';
import { LoginService } from '../auth/login.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = `${environment.urlHost}api/producto`;
  
  private productosSubject = new BehaviorSubject<Producto[]>([]);
  productos$ = this.productosSubject.asObservable();

  constructor(private http: HttpClient, private loginService: LoginService) {}

  list(idTienda: number) {
    return this.http.get<Producto[]>(`${this.apiUrl}/list`, { params: { idTienda: idTienda.toString() } });
  }

  createProducto(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, formData, { observe: 'response' });
  }

  refreshProductos() {
    const idTienda = this.loginService.currentUserValue?.idTienda;
    if (idTienda) {
      this.list(idTienda).subscribe(
        (productos) => {
          productos.forEach(producto => {
            producto.imagenUrl = `${environment.urlHost}api/images/producto/${producto.imagen}`;
            console.log(`Imagen URL para ${producto.nombreProducto}: ${producto.imagenUrl}`);
          });
          this.productosSubject.next(productos);
        },
        (error) => {
          console.error('Error al listar productos', error);
        }
      );
    }
  }
}
