import { Router } from "express";
import sql from '../db/neon.js'

export const consultasRouter = new Router();

consultasRouter.get('/consultas/profesores-multiples-carreras', async (req,res)=>{
    //1
    try {
        const resultado = await sql('SELECT * FROM inscritos()');
        res.status(200).json({ cantidad: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
})
consultasRouter.get('/consultas/inscritos-cierto-ramo', async (req,res)=>{
    //2
    try {
        const resultado = await sql('SELECT * FROM inscritos()');
        res.status(200).json({ inscritos: resultado });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/inscritos-seccion-ramo', async (req,res)=>{
    //3
    const { ramo, seccion } = req.query;
    try {
        const resultado = await sql(`SELECT * FROM inscritos_ramos('${ramo}', ${seccion})`);
        res.status(200).json({ cantidad: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/salas-por-edificio', async (req,res)=>{
    //4
    const { codigo } = req.query;
    try {
        const resultado = await sql(`SELECT * FROM salas('${codigo}')`);
        res.status(200).json({ cantidad: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/primer-anio-carrera', async (req,res)=>{
    //5
    const { anho, carrera } = req.query;
    try {
        const resultado = await sql(`SELECT * FROM primer_anho(${anho}, '${carrera}')`);
        res.status(200).json({ cantidad: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/carreras-comparten-ramo', async (req,res)=>{
    //6
    const { nombre } = req.query;
    try {
        const resultado = await sql(`SELECT * FROM comparten('${nombre}')`);
        res.status(200).json({ cantidad: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/edad-promedio-carrera', async (req,res)=>{
    //7
    const { carrera } = req.query;
    try {
        const resultado = await sql(`SELECT * FROM promedio('${carrera}')`);
        res.status(200).json({ promedio: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/profesores-carrera-especifica', async (req,res)=>{
    //8
    const { carrera } = req.query;
    try {
        const resultado = await sql(`SELECT * FROM profesores_imparten('${carrera}')`);
        res.status(200).json({ cantidad: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/empleados-por-edificio', async (req,res)=>{
    //9
    const { codigo } = req.query;
    try {
        const resultado = await sql(`SELECT * FROM empleados_en_edificios('${codigo}')`);
        res.status(200).json({ cantidad: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/recursos-por-carrera', async (req,res)=>{
    //10
    const { carrera } = req.query;
    try {
        const resultado = await sql(`SELECT * FROM recursos_prestados_carrera('${carrera}')`);
        res.status(200).json({ cantidad: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    // recordar este recive el nombre de la carrera uvu
})
consultasRouter.get('/consultas/carreras-mayor-empleados', async (req,res)=>{
    //11
    try {
        const resultado = await sql(`SELECT * FROM carrera_mas_empleados()`);
        res.status(200).json({ resultado });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/estudiantes-recurso', async (req,res)=>{
    //12
    const { codigo } = req.query;
    try {
        const resultado = await sql(`SELECT * FROM cuanto_estudiante_recurso('${codigo}')`);
        res.status(200).json({ cantidad: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/estudiantes-carrera', async (req,res)=>{
    //13
    const { codigo } = req.query;
    try {
        const resultado = await sql(`SELECT * FROM cuanto_estudiante_carrera('${codigo}')`);
        res.status(200).json({ cantidad: resultado[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/empleados-administrativos-carrera', async (req,res)=>{
    //14
    try {
        const resultado = await sql(`SELECT * FROM admin_cada_carrera()`);
        res.status(200).json({ resultado });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
consultasRouter.get('/consultas/estudiantes-reprobaron-ramo', async (req,res)=>{
    //15
    try {
        const resultado = await sql(`SELECT * FROM cuanto_estudiante_reprobo()`);
        res.status(200).json({ resultado });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})