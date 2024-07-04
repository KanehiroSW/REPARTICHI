import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pedido } from './Pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = `${environment.urlHost}api/pedido`;

  constructor(private http: HttpClient) { }

  getPedidosByTienda(tiendaId: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}/tienda/${tiendaId}/pendientes`);
  }

  updatePedidoStatus(idPedido: number, estado: string): Observable<Pedido> {
    return this.http.put<Pedido>(`${this.apiUrl}/update/${idPedido}/${estado}`, {});
  }

  getHistorialPedidosByTienda(tiendaId: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}/tienda/${tiendaId}/historial`);
  }

  getPedidosEnProcesoByTienda(tiendaId: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}/tienda/${tiendaId}/gestion`);
  }

  getPedidosByTiendaDelivery(tiendaId: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}/tienda/${tiendaId}/delivery`);
  }
}