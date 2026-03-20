import { Router, Request, Response } from "express";
import { verificarUsuario } from "./verificacion.service";
import { buscarPorCodigo, database } from "./database";
import { VerificacionRequest } from "./types";

const router = Router();

// POST /api/verificar
// GET /api/verificar?codigo=USR-001
router.get("/verificar", (req: Request, res: Response) => {
  const codigo = req.query.codigo as string | undefined;

  if (!codigo) {
    res.status(400).json({
      verificado: false,
      estado: "ERROR_VALIDACION",
      mensaje: "El campo 'codigo' es obligatorio.",
    });
    return;
  }

  const resultado = verificarUsuario({ codigo });
  res.status(resultado.verificado ? 200 : 401).json(resultado);
});
// GET /api/usuarios
router.get("/usuarios", (_req: Request, res: Response) => {
  res.status(200).json({
    total: database.length,
    usuarios: database.map(({ nombre, codigo, cargo, activo }) => ({
      nombre, codigo, cargo, activo,
    })),
  });
});

// GET /api/usuarios/:codigo
router.get("/usuarios/:codigo", (req: Request, res: Response) => {
  const codigo = String(req.params.codigo);
  const registro = buscarPorCodigo(codigo);

  if (!registro) {
    res.status(404).json({ mensaje: `No se encontró ningún usuario con el código "${codigo}".` });
    return;
  }

  res.status(200).json(registro);
});



export default router;