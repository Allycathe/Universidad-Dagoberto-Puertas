import {Router} from 'express'
import sql from '../db/neon.js'

export const conduRouter = new Router();

conduRouter.get('/conductividad', async (req, res)=>{
    const lista = await sql('select * from Curso_Estudiante');
    res.render('conductividad', {lista})
});

conduRouter.delete('/conductividad/eliminar', async (req, res)=>{
    const codigocon = req.body;
    const codigosub = req.body;

    await sql(`call del_conductividad_ramos(${codigocon},${codigosub})`)
})

conduRouter.post('/conductividad/insertar', async (req,res)=>{
    const codigocon=req.body;
    const codigosub=req.body;
    await sql(`CALL insConductividad_Ramos(${codigocon},${codigosub})`);
})