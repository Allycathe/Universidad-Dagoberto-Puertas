import { Router } from "express";
import sql from '../db/neon.js'

export const consultasRouter = new Router();

consultasRouter.get('/consultas/profesores-multiples-carreras', async (req,res)=>{
    try {
        const resultado = await sql('SELECT * FROM inscritos()');
        res.status(200).json({ cantidad: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
})
consultasRouter.get('/consultas/inscritos-cierto-ramo', async (req,res)=>{
    try {
        const resultado = await sql('SELECT * FROM inscritos()');
        res.status(200).json({ inscritos: resultado });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/inscritos-seccion-ramo', async (req,res)=>{
    const { ramo, seccion } = req.query;
    try {
        const resultado = await sql(`SELECT * FROM inscritos_ramos('${ramo}', ${seccion})`);
        res.status(200).json({ cantidad: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/salas-por-edificio', async (req,res)=>{
    const { codigo } = req.query;
    try {
        const resultado = await sql(`SELECT * FROM salas('${codigo}')`);
        res.status(200).json({ cantidad: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/primer-anio-carrera', async (req,res)=>{
    const { anho, carrera } = req.query;
    try {
        const resultado = await sql(`SELECT * FROM primer_anho(${anho}, '${carrera}')`);
        res.status(200).json({ cantidad: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/carreras-comparten-ramo', async (req,res)=>{
    const { nombre } = req.query;
    try {
        const resultado = await sql(`SELECT * FROM comparten('${nombre}')`);
        res.status(200).json({ cantidad: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/edad-promedio-carrera', async (req,res)=>{
    const { carrera } = req.query;
    try {
        const resultado = await sql(`SELECT * FROM promedio('${carrera}')`);
        res.status(200).json({ promedio: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/profesores-carrera-especifica', async (req,res)=>{
    const { carrera } = req.query;
    try {
        const resultado = await sql(`SELECT * FROM profesores_imparten('${carrera}')`);
        res.status(200).json({ cantidad: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/empleados-por-edificio', async (req,res)=>{
    const { codigo } = req.query;
    try {
        const resultado = await sql(`SELECT * FROM empleados_en_edificios('${codigo}')`);
        res.status(200).json({ cantidad: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/recursos-por-carrera', async (req,res)=>{
    
})
consultasRouter.get('/consultas/carreras-mayor-empleados', async (req,res)=>{
    
})
consultasRouter.get('/consultas/estudiantes-recurso', async (req,res)=>{
    
})
consultasRouter.get('/consultas/estudiantes-carrera', async (req,res)=>{
    
})
consultasRouter.get('/consultas/empleados-administrativos-carrera', async (req,res)=>{
    
})
consultasRouter.get('/consultas/estudiantes-reprobaron-ramo', async (req,res)=>{
    
})