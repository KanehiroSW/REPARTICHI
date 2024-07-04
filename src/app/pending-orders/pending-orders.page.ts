import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/auth/login.service';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Pedido } from '../services/repartidor/Pedido';
import { PedidoService } from '../services/repartidor/pedido.service';
import { Tienda } from '../services/repartidor/Tienda';

@Component({
  selector: 'app-pendingoders',
  templateUrl: 'pending-orders.page.html',
  styleUrls: ['pending-orders.page.scss']
})
export class PendingOrdersPage implements OnInit {

  pedidos: Pedido[] = [];
  tienda: Tienda | null = null;

  constructor(
    private pedidoService: PedidoService,
    private loginService: LoginService,
    private router:Router,
    private actionSheetController: ActionSheetController
  ) {}

  async cerrarSesion() {
    const actionSheet = await this.actionSheetController.create({
      header: '¿Estás seguro?',
      buttons: [
        {
          text: 'Sí',
          role: 'destructive',
          handler: () => {
            this.router.navigate(['/']);
          }
        },
        {
          text: 'No',
        }
      ]
    });
    await actionSheet.present();
  }

  ngOnInit() {
    // this.tienda = this.loginService.currentUserValue;
    // if (this.tienda) {
    //   this.loadPendingPedidos();
    // }
  }

  loadPendingPedidos() {
    // this.pedidoService.getPedidosByTienda(this.tienda!.idTienda).subscribe(
    //   pedidos => {
    //     this.pedidos = pedidos;
    //   },
    //   error => {
    //     console.error('Error al cargar pedidos:', error);
    //   }
    // );
  }

  updatePedidoStatus(idPedido: number, estado: string) {
    // this.pedidoService.updatePedidoStatus(idPedido, estado).subscribe(
    //   () => {
    //     this.loadPendingPedidos();
    //   },
    //   error => {
    //     console.error('Error al actualizar el estado del pedido:', error);
    //   }
    // );
  }
}