"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_routes_1 = require("./api.routes");
var user_routes_1 = require("./user.routes");
var update_routes_1 = require("./update.routes");
var announcement_routes_1 = require("./announcement.routes");
var noticeBoard_routes_1 = require("./noticeBoard.routes");
var RestRouter = /** @class */ (function () {
    function RestRouter() {
        this.apiRoute = new api_routes_1.ApiRoutes();
        this.userRoute = new user_routes_1.UserRoutes();
        this.updatesRoute = new update_routes_1.UpdatesRoutes();
        this.announcementRoute = new announcement_routes_1.AnnouncementRoutes();
        this.noticeBoardRoute = new noticeBoard_routes_1.NoticeBoardRoutes();
    }
    RestRouter.prototype.routes = function (app) {
        this.apiRoute.routes(app);
        this.userRoute.routes(app);
        this.updatesRoute.routes(app);
    };
    return RestRouter;
}());
exports.RestRouter = RestRouter;
//# sourceMappingURL=index.js.map