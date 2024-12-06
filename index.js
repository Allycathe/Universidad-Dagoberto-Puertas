import express from 'express';
import { Router } from 'express';
import { engine } from 'express-handlebars';
import handlebars from 'express-handlebars';

/*Rutas*/
import { CarrerasRouter } from './routes/carreras.js';
import { consultasRouter } from './routes/consultas.js';
import { edificioRouter } from './routes/edificios.js';
import { estudiantesRouter } from './routes/estudiantes.js';
import { prestamosRouter } from './routes/prestamos.js';
import { profesoresRouter } from './routes/profesores.js';
import { ramosRouter } from './routes/ramos.js';
import { recursosRouter } from './routes/recursos.js';

/*Configuración express y handlebars*/ 
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.engine(
    'handlebars',
    handlebars.engine({
      runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
      },
    })
  );
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req,res)=>{
  res.render('inicio');
})
app.use(CarrerasRouter);
app.use(edificioRouter);
app.use(consultasRouter);
app.use(estudiantesRouter);
app.use(prestamosRouter);
app.use(profesoresRouter);
app.use(ramosRouter);
app.use(recursosRouter);

app.listen(3000, ()=> console.log("Me quiero matar"));
