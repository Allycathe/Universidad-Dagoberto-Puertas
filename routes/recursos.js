import {Router} from 'express'
import sql from '../db/neon.js'

export const recursosRouter = new Router();

recursosRouter.get('/recursos', async (req, res)=>{
    const lista = await sql('select * from Recursos');
    res.render('recursos', {lista});
});
recursosRouter.post('/recursos/insertar', async (req, res) => {
    const { codigo, nombre, copias, autor, publicacion, formato, codigo_edificio } = req.body;
    try {     
        await sql`CALL insrecursos(${codigo}, ${nombre}, ${copias}, ${autor}, ${publicacion},${formato},${codigo_edificio})`;
        
        res.redirect('/recursos');
    } catch (error) {
        console.error('Error al insertar recurso:', error);
        res.status(500).send('Error al insertar recurso');
    }
});

recursosRouter.post('/recursos/editar/:id',  (req,res)=>{
    const codigo=req.body.codigo;
    const disponibilidad=req.body.disponibilidad;
    const copias=req.body.copias;
    const disponible=req.body.disponiblel
    const nombre=req.body.nombre;
    const autor=req.body.autor;
    const fecha=req.body.fecha;
    const formato=req.body.formato;
    const edifico=req.body.edificio;
})

recursosRouter.post('/recursos/eliminar/:id', async (req,res)=>{
    const codigo = req.params.id;
    await sql`CALL del_recurso(${codigo})`;
});