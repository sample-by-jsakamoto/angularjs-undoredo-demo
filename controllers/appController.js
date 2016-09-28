var AngularUndoRedoDemo;
(function (AngularUndoRedoDemo) {
    var AppController = (function () {
        function AppController(model, history) {
            this.model = model;
            this.history = history;
        }
        return AppController;
    }());
    AngularUndoRedoDemo.AppController = AppController;
    angular
        .module('AngularUndoRedoDemo')
        .controller('appController', AppController);
})(AngularUndoRedoDemo || (AngularUndoRedoDemo = {}));
//# sourceMappingURL=appController.js.map