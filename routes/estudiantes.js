import {Router} from 'express'
import sql from '../db/neon.js'

export const estudiantesRouter = new Router();

estudiantesRouter.get('/estudiantes', async (req, res)=>{
    const lista = await sql('select * from Estudiantes');
    res.render('estudiantes', {lista})
});
estudiantesRouter.post('/estudiantes/insertar', async(req,res)=>{
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const rut=req.body.rut;
    const direccion=req.body.direccion;
    const numero=req.body.numero;
    const ingreso=req.body.ingreso;
    sql('')
})
estudiantesRouter.delete('/estudiantes/eliminar/:id', async (req,res)=>{
    const id= req.body.id;
    sql('')
})
estudiantesRouter.post('/estudiantes/editar/:id', async (req, res)=>{
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const direccion=req.body.direccion;
    sql('')
});