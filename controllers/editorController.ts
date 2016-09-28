namespace AngularUndoRedoDemo {

    export class EditorController {

        public editing: People;

        constructor(
            private model: ModelService,
            private history: HistoryService,
            private $location: ng.ILocationService
        ) {
            this.editing = angular.copy(model.people);
        }

        public onClickOK(): void {
            angular.copy(this.editing, this.model.people);
            this.history.regist(this.model.people);
            this.$location.url('/');
        }

        public onClickCancel(): void {
            this.$location.url('/');
        }
    }

    angular
        .module('AngularUndoRedoDemo')
        .controller('editorController', EditorController);
}