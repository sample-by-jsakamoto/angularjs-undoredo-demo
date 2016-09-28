namespace AngularUndoRedoDemo {

    export class ModelService {

        public people: People = { name: 'Taro', age: 25 };

        constructor() {
        }
    }

    angular
        .module('AngularUndoRedoDemo')
        .service('model', ModelService);
}