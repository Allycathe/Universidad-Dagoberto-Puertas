import {Router} from 'express'
import sql from '../db/neon.js'

export const prestamosRouter = new Router();

prestamosRouter.get('/prestamos', async (req, res)=>{
    const lista = await sql('select * from Prestamos');
    res.render('prestamos', {lista})
});