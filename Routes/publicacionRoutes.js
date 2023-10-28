import { Router } from 'express';
import { publicar, editar, eliminar , buscar} from "../Controller/publicacionController.js";

const rutasPublicacion = Router();

rutasPublicacion.post('/publicar', publicar)
rutasPublicacion.put('/editarpubli/:id', editar)
rutasPublicacion.delete('/eliminarpubli/:fecha', eliminar)
rutasPublicacion.find('/buscarpubli/:usuario', buscar)


export default rutasPublicacion;