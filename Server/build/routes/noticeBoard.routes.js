"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var updates_controller_1 = require("../controllers/updates.controller");
var NoticeBoardRoutes = /** @class */ (function () {
    function NoticeBoardRoutes() {
        this.updatesController = new updates_controller_1.UpdatesController();
    }
    NoticeBoardRoutes.prototype.routes = function (app) {
        app.route('/api/authenticate').post(this.updatesController.authenticate);
        app.route('/api/authenticate').post(this.updatesController.authenticate);
        app.route('/api/authenticate').post(this.updatesController.authenticate);
        app.route('/api/authenticate').post(this.updatesController.authenticate);
        app.route('/api/authenticate').post(this.updatesController.authenticate);
    };
    return NoticeBoardRoutes;
}());
exports.NoticeBoardRoutes = NoticeBoardRoutes;
//# sourceMappingURL=noticeBoard.routes.js.map