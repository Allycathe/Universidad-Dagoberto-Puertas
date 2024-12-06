import {Router} from 'express'
import sql from '../db/neon.js'

export const mallaRouter = new Router();

mallaRouter.get('/malla', async (req, res)=>{
    const lista = await sql('select * from Malla');
    res.render('malla', {lista})
});

mallaRouter.delete('/malla/eliminar/:id', async (req, res)=>{
    const codigoram= req.body;
    const codigocar= req.body;
    await sql(`call del_malla(${codigocar},${codigoram})`)
})

mallaRouter.post('/malla/insertar', async (req,res)=>{
    const codigocar=req.body;
    const codigoram=req.body;
    await sql(`CALL insMalla(${codigocar},${codigoram})`);
})