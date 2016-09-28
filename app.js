var AngularUndoRedoDemo;
(function (AngularUndoRedoDemo) {
    angular
        .module('AngularUndoRedoDemo', ['ngRoute'])
        .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
            controller: 'homeController', controllerAs: 'ctrl',
            templateUrl: 'views/home.html'
        })
            .when('/edit', {
            controller: 'editorController', controllerAs: 'ctrl',
            templateUrl: 'views/edit.html'
        });
    })
        .run(function (model, history) {
        history.regist(model.people);
    });
})(AngularUndoRedoDemo || (AngularUndoRedoDemo = {}));
//# sourceMappingURL=app.js.map