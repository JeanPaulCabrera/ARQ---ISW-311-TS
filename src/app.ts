import express, { Application, Request, Response, NextFunction } from "express";
import router from "./routes";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", router);

app.get("/", (_req: Request, res: Response) => {
  res.json({
    nombre: "API de Verificación de Usuarios",
    version: "1.0.0",
    endpoints: {
      "POST /api/verificar":       "Verifica un usuario por nombre, código y cargo",
      "GET  /api/usuarios":        "Lista todos los usuarios registrados",
      "GET  /api/usuarios/:codigo":"Busca un usuario por su código",
    },
  });
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({ mensaje: "Ruta no encontrada." });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error("Error interno:", err.message);
  res.status(500).json({ mensaje: "Error interno del servidor." });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

export default app;