import { Tienda } from '../auth/Tienda';
import { DetallePedido } from './DetallePedido';

export interface Pedido {
    idPedido: number;
    numeroSerie?: string;
    direccionEntrega?: string;
    fechaPedido: Date;
    // usuario!: Usuario;
    tienda: Tienda;
    detallePedidos: DetallePedido[];
    totalPedido: number;
    estadoPedido: string;
}