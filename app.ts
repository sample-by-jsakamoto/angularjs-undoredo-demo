namespace AngularUndoRedoDemo {
    angular
        .module('AngularUndoRedoDemo', ['ngRoute'])
        .config(($routeProvider: ng.route.IRouteProvider) => {
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
        .run((model: ModelService, history: HistoryService) => {
            history.regist(model.people);
        });
}