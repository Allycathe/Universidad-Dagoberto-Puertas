import {Router} from 'express'
import sql from '../db/neon.js'

export const profesoresRouter = new Router();

profesoresRouter.get('/profesores', async (req, res)=>{
    const lista = await sql('select * from Profesores');
    res.render('profesores', {lista})
});

profesoresRouter.delete('/profesor/eliminar/:id', async(req,res)=>{
    const id= req.params.id;
    await sql(`CALL del_profesor(${id})`)
})

profesoresRouter.post('/profesores/editar/:id', async(req,res)=>{
    const id=req.params.id;
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const numero=req.body.numero;
    await sql('UPDATE profesores SET nombre = $1,apellido = $2,numero = $3 where id_profesor = $4', [nombre,apellido,numero,id])
} )

profesoresRouter.post('/profesores/insertar', async (req,res)=>{
const nombre=req.params.id;
const apellido=req.params.id;
const rut=req.params.id;
const numero=req.params.id;
await sql(`CALL insProfesores(${nombre},${apellido},${rut},${numero})`);
})