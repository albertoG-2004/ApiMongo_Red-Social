import mongoose from 'mongoose';

const comentarioSchema = new mongoose.Schema({
    contenido: String,
    fechaCreacion: Date,
    publicacion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publicacion'
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

export default mongoose.model('Comentario', comentarioSchema);