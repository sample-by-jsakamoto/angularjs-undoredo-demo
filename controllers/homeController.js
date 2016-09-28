var AngularUndoRedoDemo;
(function (AngularUndoRedoDemo) {
    var HomeController = (function () {
        function HomeController(model, history, $location) {
            this.model = model;
            this.history = history;
            this.$location = $location;
        }
        HomeController.prototype.onClickEdit = function () {
            this.$location.url('/edit');
        };
        HomeController.prototype.onClickUndo = function () {
            this.model.people = this.history.undo();
        };
        HomeController.prototype.onClickRedo = function () {
            this.model.people = this.history.redoo();
        };
        return HomeController;
    }());
    AngularUndoRedoDemo.HomeController = HomeController;
    angular
        .module('AngularUndoRedoDemo')
        .controller('homeController', HomeController);
})(AngularUndoRedoDemo || (AngularUndoRedoDemo = {}));
//# sourceMappingURL=homeController.js.map