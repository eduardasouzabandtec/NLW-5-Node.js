import express, { request, response } from "express";

//importar o index.js
import "./database";
import { routes } from "./routes"

const app = express();

//habilita o json
app.use(express.json());

app.use(routes);
//criando rotas

//      url, tudo que vem da req, reponse o que e retorno
// app.get("/", (request, response) => {
//     return response.json({
//         "mensagem": "Oi gente"
//     });
// });


// app.post("/users", (request, response) => {
//     return response.json({
//         "mensagem": "foi gente"
//     });
// });

// a porta 
app.listen(3333, () => console.log("Server running on port 3333"));