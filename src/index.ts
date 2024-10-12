import express, {Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.json({message: "esta es una ruta get"})
})
app.post('/', (req, res) => {
    res.json({message: "esta es una ruta post"})
})
app.listen(port, () => {
    console.log(`Server on port: ${port}`)
})