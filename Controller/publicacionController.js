import publicacionModel from '../Models/publicacion.model.js';
import Publicacion from '../Models/publicacion.model.js';

export const publicar = async (req, res) => {
    const { titulo, contenido, fechaCreacion, usuario} = req.body;

    try {
        const newPublicacion = new Publicacion({
            titulo,
            contenido,
            fechaCreacion,
            usuario
        });
        newPublicacion.save();
        res.json({
            newPublicacion
        });
    } catch (error) {
        res.status(500).json({error: "Error al ingresar la publicación"})
    }
}

export const editar = async (req, res) =>{
    const id = req.params.id;
    const { contenido } = req.body
    try {
        Publicacion.updateOne({
            _id:id,
        },
        {
            $set:{
                contenido
            },
        })
        .then((data)=>res.json({data}))
        .catch((error)=>res.json({message: error}))
    } catch (error) {
        res.status(500).json({error:"Error al actualizar los datos"});
    }
}

export const eliminar = async (req, res) =>{
    const fecha = req.params.fecha;
    try{
        Publicacion.deleteOne({
            fechaCreacion: fecha
        })
        .then((data)=>res.json({data}))
        .catch((error)=>res.json({message: error}))
    }catch(error){
        res.status(500).json({error: "Error al eliminar los datos"});
    }
}