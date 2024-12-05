import {Router} from 'express'
import sql from '../db/neon.js'

export const profesoresRouter = new Router();

profesoresRouter.get('/profesores', async (req, res)=>{
    const lista = await sql('select * from Profesores');
    res.render('profesores', {lista})
});