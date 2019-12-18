"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("../controllers/user.controller");
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.userController = new user_controller_1.UserController();
    }
    UserRoutes.prototype.routes = function (app) {
        app.route('/api/getUser').get(this.userController.getUser);
        app.route('/api/getUsers').get(this.userController.getUsers);
        app.route('/api/updateUser').put(this.userController.updateUser);
        app.route('/api/insertUser').post(this.userController.insertUser);
        app.route('/api/deleteUser').post(this.userController.deleteUser);
    };
    return UserRoutes;
}());
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=user.routes.js.map