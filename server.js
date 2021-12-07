const express = require("express"); //monta el servidor web, las rutas y el listener o puerto
const cors = require ("cors");
const mongoose = require("mongoose"); // se conecta contra la base de datos
//require("dotenv").config();// carga variables de entorno en un archivo de configuración.
const dotenv = require("dotenv");//otra forma de usar la libreria dotenv.

//importando rutas
const rutasApi = require("./routes/api"); 

dotenv.config(); //esta es otra manera de usarla, arranca en la linea 4
const app = express(); //este mètodo me hace el llamado de todo

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({ origin: '*' }));
app.use("/api", rutasApi);


mongoose
  .connect(
    "mongodb+srv://" +
    process.env.DB_USERNAME +
    ":" +
    process.env.DB_PASSWORD +
    "@" + 
    process.env.DB_HOST +
    "/" +
    process.env.DB_NAME +
    "?retryWrites=true&w=majority",
  
    { 
      useNewUrlParser: true,
      useUniFiedTopology: true,
    }
  )
  .then(() => {
    console.log("Conectado a MongoDb en :" + process.env. DB_HOST );// comprueba que el servidor si esta levantado
    app.listen(process.env.PORT, () => {// y tengo conexión con la base de datos, por buenas prácticas 
      console.log("Escuchando en el puerto:" + process.env.PORT);//es mejor definirlo así.El servidor está en escucha.
    });
  })
  .catch((error) => {
      console.log(error);
  });



