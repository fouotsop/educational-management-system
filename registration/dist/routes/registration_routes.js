"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RegistrationRoutes_instances, _RegistrationRoutes_initializeRoutes, _RegistrationRoutes_createRegistration, _RegistrationRoutes_findRegistrationById, _RegistrationRoutes_findAll;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationRoutes = void 0;
const express_1 = require("express");
class RegistrationRoutes {
    constructor(registrationController) {
        _RegistrationRoutes_instances.add(this);
        this.registrationController = registrationController;
        this.router = (0, express_1.Router)();
        __classPrivateFieldGet(this, _RegistrationRoutes_instances, "m", _RegistrationRoutes_initializeRoutes).call(this);
    }
    getRouter() {
        return this.router;
    }
}
exports.RegistrationRoutes = RegistrationRoutes;
_RegistrationRoutes_instances = new WeakSet(), _RegistrationRoutes_initializeRoutes = function _RegistrationRoutes_initializeRoutes() {
    this.router.post('/', __classPrivateFieldGet(this, _RegistrationRoutes_instances, "m", _RegistrationRoutes_createRegistration).bind(this));
    this.router.get('/:id', __classPrivateFieldGet(this, _RegistrationRoutes_instances, "m", _RegistrationRoutes_findRegistrationById).bind(this));
    this.router.get('/', __classPrivateFieldGet(this, _RegistrationRoutes_instances, "m", _RegistrationRoutes_findAll).bind(this));
}, _RegistrationRoutes_createRegistration = function _RegistrationRoutes_createRegistration(req, res, next) {
    // Delegate the request handling to the controller
    this.registrationController.addRegistration(req, res, next);
}, _RegistrationRoutes_findRegistrationById = function _RegistrationRoutes_findRegistrationById(req, res, next) {
    this.registrationController.findRegistrationById(req, res, next);
}, _RegistrationRoutes_findAll = function _RegistrationRoutes_findAll(req, res, next) {
    this.registrationController.findAll(req, res, next);
};
