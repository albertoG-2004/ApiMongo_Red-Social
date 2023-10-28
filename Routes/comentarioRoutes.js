import { Router } from "express";
import { comentar, editar, eliminar, buscar , eliminarPorFecha , eliminarPorPubli } from "../Controller/comentarioController.js";
const rutasComentario = Router();

rutasComentario.post('/comentar', comentar);
rutasComentario.put('/editarcomentario/:id', editar);
rutasComentario.delete('/eliminar/:id', eliminar);
rutasComentario.get('/buscarcomen/:id', buscar);
rutasComentario.delete('/eliminarPorFecha/:fechaCreacion', eliminarPorFecha);
rutasComentario.delete('/eliminarPorPubli/:publi', eliminarPorPubli);


export default rutasComentario;