import {Router} from 'express'
import sql from '../db/neon.js'

export const edificioRouter = new Router();
edificioRouter.get('/edificios', async (req,res)=>{
    const lista =sql('select * from Edificios')
    res.render('edificios', {lista})
});

edificioRouter.post('/edificios/insertar', async (req,res)=>{
    const direccion = req.body.direccion;
    const codigo = req.body.codigo;
    
    sql('insEdificios $1,$2', [codigo, direccion]);
});

edificioRouter.delete('/edificios/eliminar/:id', (req,res)=>{
    const codigo = req.body.codigo;
});