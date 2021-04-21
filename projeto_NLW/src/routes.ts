import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controllers/SettingsController";
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

routes.post("/settings", settingsController.create)


export { routes };