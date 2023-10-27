import { Router } from "express";
import { comentar, editar, eliminar, buscar } from "../Controller/comentarioController.js";
const rutasComentario = Router();

rutasComentario.post('/comentar', comentar);
rutasComentario.put('/editarcomentario/:id', editar);
rutasComentario.delete('/eliminar/:id', eliminar);
rutasComentario.get('/buscarcomen/:id', buscar);

export default rutasComentario;