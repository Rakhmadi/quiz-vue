"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _Home = _interopRequireDefault(require("./components/Home.vue"));

var _StartView = _interopRequireDefault(require("./components/StartView.vue"));

var _quiz = _interopRequireDefault(require("./components/quiz.vue"));

var _Score = _interopRequireDefault(require("./components/Score.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHashHistory)(),
  routes: [{
    path: '/',
    component: _Home["default"]
  }, {
    path: '/StartView',
    component: _StartView["default"]
  }, {
    path: '/quiz',
    component: _quiz["default"]
  }, {
    path: '/Score',
    component: _Score["default"]
  }]
});
var _default = router;
exports["default"] = _default;