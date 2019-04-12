"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 2345;
app.use(_bodyParser["default"].json());
app.listen(port, function () {
  return console.log("APP IS RUNNING ON PORY ".concat(port));
});