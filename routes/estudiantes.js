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
    const numero=req.body.numero;
    const ingreso=req.body.ingreso;
    const direccion=req.body.direccion;
    const edad=req.body.edad;
    await sql`CALL insEstudiantes(${nombre},${apellido},${rut},${numero},${edad},${direccion})`;
    res.redirect('/estudiantes');
})
estudiantesRouter.post('/estudiantes/eliminar/:id', async (req,res)=>{
     const id = req.params.id;
    console.log(id);
    await sql`call del_estudiante(${id})`
    res.redirect('/estudiantes');
})
estudiantesRouter.get('/estudiantes/editar/:id', async (req,res)=>{
    const id=req.params.id;
    const estudiante= await sql('select * from Estudiantes where id_estudiante=$1',[id]);
    res.render('editar_estudiantes',{estudiante: estudiante[0]});
})
estudiantesRouter.post('/estudiantes/editar/:id', async (req, res)=>{
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const direccion=req.body.direccion;
    const numero=req.body.numero;
    const id=req.params.id;
    console.log(id)
    await sql('UPDATE Estudiantes SET nombre = $1,apellido = $2,direccion = $3,numero = $4 WHERE id_estudiante = $5',[nombre,apellido,direccion,numero,id])
    res.redirect('/estudiantes');
});