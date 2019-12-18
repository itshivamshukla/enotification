"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_dao_1 = require("../data-access-object/user.dao");
var logger_1 = __importDefault(require("../utilities/logger"));
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getUser = function (req, res, next) {
        logger_1.default.info('getUser :: user');
        var userDAO = new user_dao_1.UserDAO();
        userDAO.getUser(req, res, next);
    };
    UserController.prototype.getUsers = function (req, res, next) {
        logger_1.default.info('getUsers :: user');
        var userDAO = new user_dao_1.UserDAO();
        userDAO.getUsers(req, res, next);
    };
    UserController.prototype.updateUser = function (req, res, next) {
        logger_1.default.info('updateUser :: user');
        var userDAO = new user_dao_1.UserDAO();
        userDAO.updateUser(req, res, next);
    };
    UserController.prototype.insertUser = function (req, res, next) {
        logger_1.default.info('insertUser :: user');
        var userDAO = new user_dao_1.UserDAO();
        userDAO.insertUser(req, res, next);
    };
    UserController.prototype.deleteUser = function (req, res, next) {
        logger_1.default.info('deleteUser :: user');
        var userDAO = new user_dao_1.UserDAO();
        userDAO.deleteUser(req, res, next);
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map