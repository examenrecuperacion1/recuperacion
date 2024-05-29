import { Router } from "express";
import ruta from "./routes.cita";

const puente = Router();


puente.use("/api", ruta);

export default puente;