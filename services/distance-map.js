import { Firefly } from '../model/firefly.js';
import { settings } from '../settings.js';
export class DistanceMap {
    constructor(fireflies) {
        console.log(fireflies);
        this.realDistanceMap = [...Array(fireflies.length)].map((x) => []);
        this.firefliesMap = [...Array(fireflies.length)].map((x) => []);
        this.initlRDMap(fireflies);
        console.log(this.realDistanceMap);
        this.initFirefliesMap(fireflies);
        console.log(this.firefliesMap);
    }
    initlRDMap(fireflies) {
        for (let i = 0; i < this.realDistanceMap.length; i++) {
            for (let j = i + 1; j < this.realDistanceMap.length; j++) {
                const distance = this.calculateDistance(fireflies[i], fireflies[j]);
                this.realDistanceMap[i][i] = Number.MAX_VALUE;
                this.realDistanceMap[i][j] = distance;
                this.realDistanceMap[j][i] = distance;
            }
        }
    }
    initFirefliesMap(fireflies) {
        for (let i = 0; i < this.realDistanceMap.length; i++) {
            // Проходимся по n соседним светоячкам
            for (let j = 0; j < settings.visibleNeighborsCount; j++) {
                const ind = this.realDistanceMap[i].indexOf(Math.min.apply(null, this.realDistanceMap[i]));
                this.realDistanceMap[i][ind] = Number.MAX_VALUE;
                // this.firefliesMap[i][ind] = fireflies[ind];
                this.firefliesMap[i][ind] = true;
            }
        }
    }
    calculateDistance(x1, x2, y1, y2) {
        let distX = 0;
        let distY = 0;
        if (x1 instanceof Firefly && x2 instanceof Firefly) {
            distX = Math.pow(x1.x - x2.x, 2);
            distY = Math.pow(x1.y - x2.y, 2);
        }
        if (typeof x1 === 'number' &&
            typeof x2 === 'number' &&
            typeof y1 === 'number' &&
            typeof y2 === 'number') {
            distX = Math.pow(x1 - x2, 2);
            distY = Math.pow(y1 - y2, 2);
        }
        return Math.sqrt(distX + distY);
    }
}
