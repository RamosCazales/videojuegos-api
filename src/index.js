import app from "./app.js";
import { PORT } from "./config.js";

// Iniciar el servidor y manejar errores
app.listen(PORT, (err) => {
    if (err) {
        console.error('Error al iniciar el servidor:', err);
    } else {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    }
});
