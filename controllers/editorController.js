var AngularUndoRedoDemo;
(function (AngularUndoRedoDemo) {
    var EditorController = (function () {
        function EditorController(model, history, $location) {
            this.model = model;
            this.history = history;
            this.$location = $location;
            this.editing = angular.copy(model.people);
        }
        EditorController.prototype.onClickOK = function () {
            angular.copy(this.editing, this.model.people);
            this.history.regist(this.model.people);
            this.$location.url('/');
        };
        EditorController.prototype.onClickCancel = function () {
            this.$location.url('/');
        };
        return EditorController;
    }());
    AngularUndoRedoDemo.EditorController = EditorController;
    angular
        .module('AngularUndoRedoDemo')
        .controller('editorController', EditorController);
})(AngularUndoRedoDemo || (AngularUndoRedoDemo = {}));
//# sourceMappingURL=editorController.js.map