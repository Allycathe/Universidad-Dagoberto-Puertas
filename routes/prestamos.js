import {Router} from 'express'
import sql from '../db/neon.js'

export const prestamosRouter = new Router();

prestamosRouter.get('/prestamos', async (req, res)=>{
    const lista = await sql('select * from Prestamos');
    res.render('prestamos', {lista})
});
prestamosRouter.delete('/prestamos/eliminar/:id', async (req, res)=>{
    const id= req.params.id;
    await sql`call del_prestamo(${id})`

})
prestamosRouter.post('/prestamos/insertar/', (req,res)=>{
    const id= req.body.id;
    const codigo=req.body.codigo;
    const duracion=req.body.duracion;
    sql('call insPrestamos($1, $2, $3)', [codigo, id, duracion])
})