namespace AngularUndoRedoDemo {

    export class HomeController {

        constructor(
            public model: ModelService,
            public history: HistoryService,
            private $location: ng.ILocationService
        ) {
        }

        public onClickEdit(): void {
            this.$location.url('/edit');
        }

        public onClickUndo(): void {
            this.model.people = this.history.undo();
        }

        public onClickRedo(): void {
            this.model.people = this.history.redoo();
        }
    }

    angular
        .module('AngularUndoRedoDemo')
        .controller('homeController', HomeController);
}