import { Router } from 'express';
import { publicar } from "../Controller/publicacionController.js";
import { editar } from "../Controller/publicacionController.js";
import { eliminar } from "../Controller/publicacionController.js";
const rutasPublicacion = Router();

rutasPublicacion.post('/publicar', publicar)
rutasPublicacion.put('/editar/:id', editar)
rutasPublicacion.put('/eliminar/:id', eliminar)

export default rutasPublicacion;