import { DetallePedido } from "./DetallePedido";
import { Tienda } from "./Tienda";

export interface Pedido {
    idPedido: number;
    numeroSerie?: string;
    direccionEntrega?: string;
    fechaPedido: Date;
    tienda: Tienda;
    detallePedidos: DetallePedido[];
    totalPedido: number;
    estadoPedido: string;
}