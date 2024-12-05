import {Router} from 'express'
import sql from '../db/neon.js'

export const ramosRouter = new Router();

ramosRouter.get('/ramos', async (req, res)=>{
    const lista = await sql('select * from Ramos');
    res.render('ramos', {lista})
});
ramosRouter.post('/ramos/insertar', (req,res)=>{
    const codigo=req.body.codigo;
    const nombre=req.body.nombre;
    const creditos=req.body.creditos;
    const seccion=req.body.seccion;
    const bloque=req.body.bloque;
    const codigoSala=req.body.codigoSala;
    const idProfesor=req.body.idProfesor;
    const idAyudante=req.body.idAyudante;
    sql('')
})