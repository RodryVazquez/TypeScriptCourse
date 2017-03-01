//Section 8, Lecture 99
var Map = (function () {
    function Map() {
        //dataSource: T[];
        this.dataSource = {};
    }
    //constructor() {
    //    this.dataSource = [];
    //}
    Map.prototype.setItem = function (key, item) {
        this.dataSource[key] = item;
    };
    Map.prototype.getItem = function (key) {
        return this.dataSource[key];
    };
    Map.prototype.clear = function () {
        this.dataSource = {};
    };
    Map.prototype.printMap = function () {
        for (var key in this.dataSource) {
            console.log(key, this.dataSource[key]);
        }
    };
    return Map;
}());
var numberMap = new Map();
numberMap.setItem("Test1", 1);
numberMap.setItem("Test2", 2);
numberMap.printMap();
//# sourceMappingURL=exercise.js.map