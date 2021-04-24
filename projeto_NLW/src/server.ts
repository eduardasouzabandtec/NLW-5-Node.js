import { http } from "./http";
import "./websocket/client"
import "./websocket/admin"
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
//app.listen(3333, () => console.log("Server running on port 3333"));

//socket
http.listen(3333, () => console.log("Server running on port 3333"));