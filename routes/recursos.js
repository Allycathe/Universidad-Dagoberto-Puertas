import {Router} from 'express'
import sql from '../db/neon.js'

export const recursosRouter = new Router();

recursosRouter.get('/recursos', async (req, res)=>{
    const lista = await sql('select * from Recursos');
    res.render('recursos', {lista});
});