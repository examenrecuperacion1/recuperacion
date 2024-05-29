import { Router } from "express";
import { eliminarcita, insertarcita, listarcita, modificarcita, mostrarCitas } from "../controllers/controllers.citas";


const ruta = Router();

ruta.get("/mostracita/:id",mostrarCitas);
ruta.get("/listarcita",listarcita);
ruta.post("/crearcita", insertarcita);
ruta.put("/modificarcita", modificarcita);
ruta.delete("/eliminarcita", eliminarcita);


export default ruta;