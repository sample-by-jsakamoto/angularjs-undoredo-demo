var AngularUndoRedoDemo;
(function (AngularUndoRedoDemo) {
    var ModelService = (function () {
        function ModelService() {
            this.people = { name: 'Taro', age: 25 };
        }
        return ModelService;
    }());
    AngularUndoRedoDemo.ModelService = ModelService;
    angular
        .module('AngularUndoRedoDemo')
        .service('model', ModelService);
})(AngularUndoRedoDemo || (AngularUndoRedoDemo = {}));
//# sourceMappingURL=modelService.js.map