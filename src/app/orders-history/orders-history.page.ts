import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/auth/login.service';
import { Pedido } from '../services/repartidor/Pedido';

import { PedidoService } from '../services/repartidor/pedido.service';
import { Tienda } from '../services/repartidor/Tienda';

@Component({
  selector: 'ordershistory-tab3',
  templateUrl: 'orders-history.page.html',
  styleUrls: ['orders-history.page.scss']
})
export class OrdersHistoryPage implements OnInit {
  
  pedidos: Pedido[] = [];
  tienda: Tienda | null = null;

  constructor(
    private pedidoService: PedidoService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    // this.tienda = this.loginService.currentUserValue;
    // if (this.tienda) {
    //   this.loadHistorialPedidos();
    // }
  }

  ionViewWillEnter() {
    if (this.tienda) {
      this.loadHistorialPedidos();
    }
  }

  loadHistorialPedidos() {
    // if (this.tienda) {
    //   this.pedidoService.getHistorialPedidosByTienda(this.tienda.idTienda).subscribe(
    //     pedidos => {
    //       this.pedidos = pedidos;
    //     },
    //     error => {
    //       console.error('Error al cargar pedidos:', error);
    //       this.pedidos = [];
    //     }
    //   );
    // }
  }
}