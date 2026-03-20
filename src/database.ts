import { RegistroUsuario } from "./types";

export const database: RegistroUsuario[] = [
  { codigo: "USR-001", nombre: "Raiden Makio",    cargo: "Gerente General",     activo: true  },
  { codigo: "USR-002", nombre: "Carlos Mendoza", cargo: "Desarrollador Senior",activo: true  },
  { codigo: "USR-003", nombre: "Lucia Quispe",   cargo: "Analista de Datos",   activo: true  },
  { codigo: "USR-004", nombre: "Roberto Flores", cargo: "Diseñador UX",        activo: false }, // inactivo
  { codigo: "USR-005", nombre: "Valeria Choque", cargo: "DevOps Engineer",     activo: true  },
];

export const buscarPorCodigo = (codigo: string): RegistroUsuario | undefined =>
  database.find((u) => u.codigo === codigo);