var AngularUndoRedoDemo;
(function (AngularUndoRedoDemo) {
    var HistoryService = (function () {
        function HistoryService() {
            this.snapshots = [];
            this.index = -1;
        }
        Object.defineProperty(HistoryService.prototype, "canUndo", {
            get: function () { return this.index > 0; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HistoryService.prototype, "canRedo", {
            get: function () { return this.index < this.snapshots.length - 1; },
            enumerable: true,
            configurable: true
        });
        HistoryService.prototype.regist = function (people) {
            this.index++;
            this.snapshots.splice(this.index);
            this.snapshots.push(angular.copy(people));
        };
        HistoryService.prototype.undo = function () {
            this.index--;
            return angular.copy(this.snapshots[this.index]);
        };
        HistoryService.prototype.redoo = function () {
            this.index++;
            return angular.copy(this.snapshots[this.index]);
        };
        return HistoryService;
    }());
    AngularUndoRedoDemo.HistoryService = HistoryService;
    angular
        .module('AngularUndoRedoDemo')
        .service('history', HistoryService);
})(AngularUndoRedoDemo || (AngularUndoRedoDemo = {}));
//# sourceMappingURL=historyService.js.map