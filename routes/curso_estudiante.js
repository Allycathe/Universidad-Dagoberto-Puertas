import {Router} from 'express'
import sql from '../db/neon.js'

export const curestRouter = new Router();

curestRouter.get('/curso_estudiante', async (req, res)=>{
    const lista = await sql('select * from Curso_Estudiante');
    res.render('curso_estudiante', {lista})
});

curestRouter.delete('/curso_estudiante/eliminar', async (req, res)=>{
    const id= req.body;
    const codigo = req.body;

    await sql(`call del_curso_estudiante(${codigo},${id})`)
})

curestRouter.post('/curso_estudiante/insertar', async (req,res)=>{
    const codigocar=req.body;
    const codigoram=req.body;
    await sql(`CALL insCursos_Estudiante(${codigocar},${codigoram})`);
})