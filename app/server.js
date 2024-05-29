import express from "express"
import puente from "./routes/index";

const app = express();

app.use(express.json())
app.use("/", puente)

export default app;