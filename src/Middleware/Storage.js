import multer from "multer";

const guardar = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads'); // Verifica si la carpeta existe de forma externa
    },
    filename: (req, file, cb) => {
        if (file) {
            const ext = file.originalname.split('.').pop();
            cb(null, Date.now() + '.' + ext);
        } else {
            cb(new Error('El archivo es nulo o inválido'), false);
        }
    }
});

const filtro = (req, file, cb) => {
    if (file && (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')) {
        cb(null, true);
    } else {
        cb(new Error('El tipo de archivo no es soportado. Solo se permiten imágenes en formato jpg o png'), false);
    }
};

export const subirImagen = multer({ storage: guardar, fileFilter: filtro });
