export interface Producto {
    idProducto: number;
    nombreProducto: string;
    descripcion: string;
    precio: number;
    imagen?: string;
    imagenUrl?: string;
}