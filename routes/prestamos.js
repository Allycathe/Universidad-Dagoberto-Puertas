import {Router} from 'express'
import sql from '../db/neon.js'

export const prestamosRouter = new Router();

prestamosRouter.get('/prestamos', async (req, res)=>{
    const lista = await sql('select * from Prestamos');
    res.render('prestamos', {lista})
});
prestamosRouter.delete('/prestamos/eliminar/:id', async (req, res)=>{
    const id= await sql('')
})
prestamosRouter.post('/prestamos/insertar/', (req,res)=>{
    const id= req.body.id;
    const codigo=req.body.codigo;
    const fecha1=req.body.fecha1;
    const fecha2=req.body.fecha2;
    sql('')
})