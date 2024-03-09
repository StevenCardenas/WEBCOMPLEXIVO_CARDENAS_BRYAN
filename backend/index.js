//Importamos librerias y rutas de acceso
import express from "express";
import cors from "cors";
import { specs, swaggerUi } from './swagger.js';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import inmuebleRutas from "./rutas/inmueble.js";
//Declaramos la variable del puerto y el uso de express
const puerto=8082;
const app = express ();
//middlewares y CORS
app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);

  next();
});
app.use(express.json());
app.use(
  cors({
    origin: true, //Permite todo origen
  })
);
app.use(cookieParser());
//App use para documentar la API con Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
//Usamos y llamamos a la API de la entidad Inmuebles
app.use("/api/inmueble", inmuebleRutas);
//Levantamos el servidor
app.listen(puerto, () =>{
    console.log("Servidor levantado en el puerto "+puerto);
})
