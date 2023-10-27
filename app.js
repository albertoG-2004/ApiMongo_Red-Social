import express from 'express';
import rutasUsuario from './Routes/usuarioRoutes.js';
import rutasPublicacion from './Routes/publicacionRoutes.js';
import rutasComentario from './Routes/comentarioRoutes.js';
import { conn } from './Connection/conexion.js';
const app = express();

app.use(express.json());

app.use("/apimongo", rutasUsuario);
app.use("/apimongo", rutasPublicacion);
app.use("/apimongo", rutasComentario);

conn();

app.listen(3001, ()=> {
    console.log("El servidor esta en el puerto 3001");
})