
//Section 8, Lecture 99
class Map<T> {

    //dataSource: T[];
    private dataSource: {[key:string]: T} = {};
    //constructor() {
    //    this.dataSource = [];
    //}
    setItem(key: string, item: T): void {
        this.dataSource[key] = item;
    }

    getItem(key: string) {
        return this.dataSource[key];
    }

    clear() : void {
        this.dataSource = {};
    }

    printMap(): void {
        for (let key in this.dataSource) {
                console.log(key,this.dataSource[key]);
        }
    }
}

const numberMap = new Map<number>();
numberMap.setItem("Test1", 1);
numberMap.setItem("Test2",2);
numberMap.printMap();


