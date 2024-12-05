import {Router} from 'express'
import sql from '../db/neon.js'

export const ramosRouter = new Router();

ramosRouter.get('/ramos', async (req, res)=>{
    const lista = await sql('select * from Ramos');
    res.render('ramos', {lista})
});