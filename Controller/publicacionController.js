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
    const { id } = req.params;
    const {titulo, contenido} = req.body
    try {
        Publicacion.updateMany({
            id:id,
        },
        {
            $set:{
                titulo:titulo,
                contenido:contenido
            },
        })
        .then((data)=>res.json({data}));
    } catch (error) {
        res.status(500).json({error:"Error al actualizar los datos"});
    }
}

export const eliminar = async (req, res) =>{
    const id = req.params;
    try{
        const respuesta = Publicacion.findByIdAndDelete(id);
        res.json(respuesta);
    }catch(error){
        res.status(500).json({error: "Error al eliminar los datos"});
    }
}