import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();
/**
 * Tipos de parametro
 * Routes Params => rotas 
 * http:/localhost:333/user/1
 * Query Params => Filtros e busca
 * http:/localhost:333/user/1?search=status&nome
 * Body => passar obj na req
 */

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUserName);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);



export { routes };