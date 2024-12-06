import {Router} from 'express'
import sql from '../db/neon.js'

export const edificioRouter = new Router();

edificioRouter.get('/edificios', async (req,res)=>{
    const lista = await sql('select * from Edificios')
    res.render('edificios', {lista})
});

edificioRouter.post('/edificios/insertar', async (req,res)=>{
    try {
        const { codigo, direccion } = req.body;

        if (!codigo || !direccion) {
            return res.status(400).redirect('/edificios?error=Faltan datos requeridos');
        }

        await sql`CALL insEdificios(${codigo}, ${direccion})`;
        res.redirect('/edificios?success=Edificio insertado correctamente');
    } catch (error) {
        console.error(error);
        res.redirect(`/edificios?error=Error al insertar el edificio: ${error.message}`);
    }
});

edificioRouter.post('/edificios/eliminar/:id', async (req,res)=>{
    const codigo = req.params.id;
    console.log(codigo)
    await sql`CALL del_edificio(${codigo})`;
});