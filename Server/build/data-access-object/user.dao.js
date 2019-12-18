"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserDAO = /** @class */ (function () {
    function UserDAO() {
    }
    UserDAO.prototype.getUser = function (req, res, next) {
        var args = {
            AuthenticateContractRequest: {
                UserName: req.body.userName,
                Password: req.body.password
            }
        };
    };
    UserDAO.prototype.getUsers = function (req, res, next) {
        var args = {
            AuthenticateContractRequest: {
                UserName: req.body.userName,
                Password: req.body.password
            }
        };
    };
    UserDAO.prototype.updateUser = function (req, res, next) {
        var args = {
            AuthenticateContractRequest: {
                UserName: req.body.userName,
                Password: req.body.password
            }
        };
    };
    UserDAO.prototype.insertUser = function (req, res, next) {
        var args = {
            AuthenticateContractRequest: {
                UserName: req.body.userName,
                Password: req.body.password
            }
        };
    };
    UserDAO.prototype.deleteUser = function (req, res, next) {
        var args = {
            AuthenticateContractRequest: {
                UserName: req.body.userName,
                Password: req.body.password
            }
        };
    };
    return UserDAO;
}());
exports.UserDAO = UserDAO;
//# sourceMappingURL=user.dao.js.map