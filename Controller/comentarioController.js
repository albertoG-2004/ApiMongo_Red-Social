import Comentario from "../Models/comentario.model.js";

export const comentar = async (req, res) =>{
    const { contenido, fechaCreacion, publicacion, usuario} = req.body;

    try {
        const newComentario = new Comentario({
            contenido,
            fechaCreacion,
            publicacion,
            usuario
        });
        newComentario.save();
        res.json({
            newComentario
        });
    } catch (error) {
        res.status(500).json({error: "Error al ingresar el comentario"})
    }
}

export const editar = async (req, res) =>{
    const id = req.params.id;
    const { contenido } = req.body;
    // console.log(JSON.stringify(req.body));
    try {
        Comentario.updateOne({
            _id: id,
        },
        {
            $set:{
                contenido
            },
        })
        .then((data)=>res.json(data))
        .catch((error)=>res.json ({message:error}));
    } catch (error) {
        res.status(500).json({error:"Error al actualizar los datos"});
    }
}

export const eliminar = async (req, res) =>{
    const id = req.params.id;
    try{
        const respuesta = Comentario.findByIdAndDelete(id);
        res.json(respuesta);
    }catch(error){
        res.status(500).json({error: "Error al eliminar los datos"});
    }
}

export const buscar = async (req, res) =>{
    const id = req.params.id;
    try {
        Comentario.find({
            publicacion:id
        })
        .then((data)=>res.json(data))
        .catch((error)=>res.json ({message:error}));
    } catch (error) {
        res.status(500).json({error: "Error al buscar los documentos"});
    }
}