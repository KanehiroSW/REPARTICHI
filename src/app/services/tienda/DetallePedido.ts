import { Producto } from "./Producto";

export interface DetallePedido {
    idDetalle?: number;
    producto: Producto;
    cantidad: number;
    precioUnitario: number;
    totalDetalle: number;
}