import { StateController } from '../controllers/state.controller'
import express = require('express');

export class StateRoutes {

    stateController: StateController = new StateController();

    public routes(app: express.Application): void {
        app.route('/api/getState/:id').get(this.stateController.getState);
        app.route('/api/getAllState').get(this.stateController.getAllState);
        app.route('/api/updateState').put(this.stateController.updateState);
        app.route('/api/insertState').post(this.stateController.insertState);
        app.route('/api/deleteState').post(this.stateController.deleteState);
    }
}