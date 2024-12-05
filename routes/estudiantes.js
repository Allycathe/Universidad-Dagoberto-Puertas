import {Router} from 'express'
import sql from '../db/neon.js'

export const estudiantesRouter = new Router();

estudiantesRouter.get('/estudiantes', async (req, res)=>{
    const lista = await sql('select * from Estudiantes');
    res.render('estudiantes', {lista})
});