import { buscarPorCodigo } from "./database";
import { VerificacionRequest, VerificacionResponse } from "./types";

export function verificarUsuario(payload: VerificacionRequest): VerificacionResponse {
  const { codigo } = payload;

  const registro = buscarPorCodigo(codigo);

  if (!registro) {
    return {
      verificado: false,
      estado: "CODIGO_NO_ENCONTRADO",
      mensaje: `El código "${codigo}" no está registrado en el sistema.`,
    };
  }

  if (!registro.activo) {
    return {
      verificado: false,
      estado: "USUARIO_INACTIVO",
      mensaje: `El usuario con código "${codigo}" está desactivado.`,
    };
  }

  return {
    verificado: true,
    estado: "VERIFICADO",
    mensaje: "Usuario verificado exitosamente.",
    datos: {
      nombre: registro.nombre,
      codigo: registro.codigo,
      cargo: registro.cargo,
    },
  };
}