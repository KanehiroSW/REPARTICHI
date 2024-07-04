import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PedidoService } from '../services/tienda/pedido.service';
import { LoginService } from '../services/auth/login.service';
import { Pedido } from '../services/tienda/Pedido';
import { Tienda } from '../services/auth/Tienda';

@Component({
  selector: 'app-order-deliman',
  templateUrl: './order-deliman.page.html',
  styleUrls: ['./order-deliman.page.scss'],
})
export class OrderDelimanPage implements OnInit {

  pedidos: Pedido[] = [];
  tienda: Tienda | null = null;
  selectedEstado!: string;

  constructor(
    private actionSheetController: ActionSheetController,
    private router:Router,
    private pedidoService: PedidoService,
    private loginService: LoginService

  ) {}

  ngOnInit(): void {
    this.tienda = this.loginService.currentUserValue;
    if (this.tienda) {
      this.loadGestionPedidos();
    }
  }

  ionViewWillEnter() {
    if (this.tienda) {
      this.loadGestionPedidos();
    }
  }

  loadGestionPedidos() {
    if (this.tienda) {
      this.pedidoService.getPedidosByTiendaDelivery(this.tienda.idTienda).subscribe(
        pedidos => {
          this.pedidos = pedidos;
        },
        error => {
          console.error('Error al cargar pedidos:', error);
          this.pedidos = [];
        }
      );
    }
  }

  updateEstadoPedido(pedido: Pedido) {
    this.pedidoService.updatePedidoStatus(pedido.idPedido, this.selectedEstado)
      .subscribe(updatedPedido => {
        pedido.estadoPedido = updatedPedido.estadoPedido;
        this.loadGestionPedidos();
      }, error => {
        console.error('Error al actualizar estado del pedido:', error);
      });
  }     

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

}
