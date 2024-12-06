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
    const edad=req.body.edad;
    sql('call insEstudiantes($1,$2,$3,$4,$5,$6)', [nombre, apellido, rut, numero, edad, direccion])
})
estudiantesRouter.post('/estudiantes/eliminar/:id', async (req,res)=>{
    const id= req.body.id;
    sql('call del_estudiante($1)', [id])
})
estudiantesRouter.post('/estudiantes/editar/:id', async (req, res)=>{
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const direccion=req.body.direccion;
    sql('')
});