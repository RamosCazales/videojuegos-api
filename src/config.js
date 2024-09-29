import { config } from "dotenv";
config();

// Proveer valores por defecto
export const PORT = process.env.PORT || 5000;
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_DATABASE = process.env.DB_DATABASE || 'videojuegos';
export const DB_PORT = process.env.DB_PORT || 27017;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES = process.env.JWT_EXPIRES;
export const URL = process.env.URL;

// Validación de variables críticas de la base de datos
if (!process.env.DB_HOST || !process.env.DB_DATABASE || !process.env.DB_PORT) {
    throw new Error("Faltan variables de entorno críticas para la conexión a la base de datos.");
}
