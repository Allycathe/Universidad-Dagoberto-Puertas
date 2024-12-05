import {Router} from 'express'
import sql from '../db/neon.js'

export const CarrerasRouter = new Router();

CarrerasRouter.get('/carrera', async (req, res) =>{
    const lista= await sql('select * from Carreras');
    res.render('carreras', {lista});
});
CarrerasRouter.delete('/carrera/eliminar', async (req, res)=>{
    await sql('')
})
CarrerasRouter.post('/carrera/insertar', async (req, res)=>{
    const codigo=req.body.codigo;
    const nombre=req.body.nombre;
    const duracion=req.body.duracion;
    await sql('Call inscarreras($1,$2,$3)', [codigo,nombre, duracion]);
    res.redirect('/carrera');
});