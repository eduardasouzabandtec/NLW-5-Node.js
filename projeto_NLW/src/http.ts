import express, { request, response } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

//importar o index.js
import "./database";
import { routes } from "./routes"

const app = express();

//acessando a pasta public 
app.use(express.static(path.join(__dirname, "..", "public" )));
//onde ficara as views
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html");
})

app.get("/pages/admin", (request, response) => {
    return response.render("html/admin.html");
})

// criando servidor http
const http = createServer(app);

//criando servidor wsocket
const io = new Server(http);

//criando a conexão o server
io.on("connection",(socket: Socket) => {
    console.log("se conectou", socket.id);
});

//habilita o json
app.use(express.json());

app.use(routes);

export { http, io }