"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Error = exports.Acceso = void 0;
var Acceso = exports.Acceso = function Acceso(req, res) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var msj = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  res.status(status).json({
    error: true,
    status: status,
    body: msj
  });
};
var Error = exports.Error = function Error(req, res) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
  var msj = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  res.status(status).json({
    error: true,
    status: status,
    body: msj
  });
};