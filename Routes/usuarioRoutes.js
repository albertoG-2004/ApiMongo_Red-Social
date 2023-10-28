import { Router } from 'express';
import { registro, actualizar, eliminar, buscar } from "../Controller/usuarioController.js";
const rutasUsuario = Router();

rutasUsuario.post('/registro', registro)
rutasUsuario.put('/actualizar/:id', actualizar)
rutasUsuario.delete('/eliminar/:id', eliminar)
rutasUsuario.get('/buscar/:email', buscar)

export default rutasUsuario;