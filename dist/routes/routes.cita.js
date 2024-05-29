"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllers = require("../controllers/controllers.citas");
var ruta = (0, _express.Router)();
ruta.get("/mostracita/:id", _controllers.mostrarCitas);
ruta.get("/listarcita", _controllers.listarcita);
ruta.post("/crearcita", _controllers.insertarcita);
ruta.put("/modificarcita", _controllers.modificarcita);
ruta["delete"]("/eliminarcita", _controllers.eliminarcita);
var _default = exports["default"] = ruta;