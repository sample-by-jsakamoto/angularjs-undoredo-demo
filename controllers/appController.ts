namespace AngularUndoRedoDemo {

    export class AppController {

        constructor(
            public model: ModelService,
            public history: HistoryService
        ) {
        }
    }

    angular
        .module('AngularUndoRedoDemo')
        .controller('appController', AppController);
}