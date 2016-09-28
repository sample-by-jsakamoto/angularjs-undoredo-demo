namespace AngularUndoRedoDemo {

    export class HistoryService {

        public snapshots: People[] = [];

        public index: number = -1;

        public get canUndo(): boolean { return this.index > 0; }

        public get canRedo(): boolean { return this.index < this.snapshots.length - 1; }

        constructor() {
        }

        public regist(people: People): void {
            this.index++;
            this.snapshots.splice(this.index);
            this.snapshots.push(angular.copy(people));
        }

        public undo(): People {
            this.index--;
            return angular.copy(this.snapshots[this.index]);
        }

        public redoo(): People {
            this.index++;
            return angular.copy(this.snapshots[this.index]);
        }
    }

    angular
        .module('AngularUndoRedoDemo')
        .service('history', HistoryService);
}