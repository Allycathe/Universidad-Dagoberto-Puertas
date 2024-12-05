import {Router} from 'express'
import sql from '../db/neon.js'

export const recursosRouter = new Router();

recursosRouter.get('/recursos', async (req, res)=>{
    const lista = await sql('select * from Recursos');
    res.render('recursos', {lista});
});
recursosRouter.post('/recursos/insertar', (req,res)=>{
    const codigo=req.body.codigo;
    const copias=req.body.copias;
    const nombre=req.body.nombre;
    const autor=req.body.autor;
    const fecha=req.body.fecha;
    const formato=req.body.formato;
    const edifico=req.body.edificio;
    sql('')
})
recursosRouter.post('/recursos/editar/:id',  (req,res)=>{
    const codigo=req.body.codigo;
    const disponibilidad=req.body.disponibilidad;
    const copias=req.body.copias;
    const disponible=req.body.disponiblel
    const nombre=req.body.nombre;
    const autor=req.body.autor;
    const fecha=req.body.fecha;
    const formato=req.body.formato;
    const edifico=req.body.edificio;
})