export interface RegistroUsuario {
  codigo: string;
  nombre: string;
  cargo: string;
  activo: boolean;
}

// ← Solo recibe el codigo
export interface VerificacionRequest {
  codigo: string;
}

export type EstadoVerificacion =
  | "VERIFICADO"
  | "CODIGO_NO_ENCONTRADO"
  | "USUARIO_INACTIVO";

export interface VerificacionResponse {
  verificado: boolean;
  estado: EstadoVerificacion;
  mensaje: string;
  datos?: {
    nombre: string;
    codigo: string;
    cargo: string;
  };
}