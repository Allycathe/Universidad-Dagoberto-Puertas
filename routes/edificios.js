import {Router} from 'express'
import sql from '../db/neon.js'

export const edificioRouter = new Router();
edificioRouter.get('/edificios', async (req,res)=>{
    res.render('edificios')
})

edificioRouter.post('/edificios/insertar', (req,res)=>{
    const direccion = req.body.direccion;
    const codigo = req.body.codigo;
    
    sql('insEdificios $1,$2', [codigo, direccion]);
});