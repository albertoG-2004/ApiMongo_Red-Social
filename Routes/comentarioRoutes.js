import { Router } from "express";
import { comentar } from "../Controller/comentarioController.js";
import { editar } from "../Controller/comentarioController.js";
import { eliminar } from "../Controller/comentarioController.js";
const rutasComentario = Router();

rutasComentario.post('/comentar', comentar);
rutasComentario.put('/editar/:id', editar);
rutasComentario.delete('/eliminar/:id', eliminar);

export default rutasComentario;