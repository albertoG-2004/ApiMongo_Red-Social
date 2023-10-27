import mongoose from 'mongoose';

export const conn = async () =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1/Red_Social")
        console.log('Conexión exitosa')
    } catch (error) {
        console.log(error);
    }
}

