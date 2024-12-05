import {Router} from 'express'
import sql from '../db/neon.js'

export const profesoresRouter = new Router();

profesoresRouter.get('/profesores', async (req, res)=>{
    const lista = await sql('select * from Profesores');
    res.render('profesores', {lista})
});
profesoresRouter.delete('/profesor/eliminar/:ïd', async(req,res)=>{
    const id= req.params.id;
    sql('')
})
profesoresRouter.post('/profesores/editar/:id', async(req,res)=>{
    const id=req.params.id;
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const numero=req.body.numero;
} )