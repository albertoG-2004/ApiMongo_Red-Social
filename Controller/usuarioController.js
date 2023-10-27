import Usuario from '../Models/usuario.model.js';

export const registro = async (req, res) => {
    const { nombre, email } = req.body;
    
    try {
        const newUsuario = new Usuario({
            nombre,
            email
        });
        newUsuario.save();
        res.json({
            newUsuario
        })
    } catch (error) {
        res.status(500).json({error: "Error al ingresar el usuario"})
    }
}

export const actualizar = async (req, res) =>{
    const id = req.params.id;
    const { email } = req.body;
    
    try {
        Usuario.updateOne({
            _id: id,
        },
        {
            $set:{
                email
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
        const info = await Usuario.findByIdAndDelete(id);
        res.json(info);
    }catch(error){
        res.status(500).json({error: "Error al eliminar los datos"});
    }
}

