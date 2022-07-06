const routes = require("express").Router();
const MoradoresController = require("../controller/MoradoresController");

routes.get("/", MoradoresController.getAllMoradores);
routes.post("/create", MoradoresController.createMorador);
routes.get("/getById/:id/:method", MoradoresController.getById);
routes.post("/updateOne/:id", MoradoresController.updateOneMorador);
routes.get("/deleteOne/:id", MoradoresController.deleteOneMorador);

module.exports = routes;
