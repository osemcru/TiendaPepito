import express from "express";
import cors from "cors";
import db from "./db/db.js"; // me importa la conexion de la base de datos
import dotenv from "dotenv"; // me importa la libreria para que se identifiquen las variables de entorno
import producto from "./routes/producto.js"; // me importa la ruta de producto
dotenv.config(); //sirve para cargar al iniciar el programa el .env en la raiz

const app = express();

app.use(express.json()); // para que solo acepte json el servidor
app.use(cors()); // para que el servidor reciba peticiones e interactue con http postman y demas
app.use("/api/producto", producto);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);


db.dbConnection();
