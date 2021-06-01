import { Firefly } from '../model/firefly.js';
import { settings } from '../settings.js';
export class FirefliesGenerator {
    static generateParams(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    static generate(width, height) {
        const fireflies = [];
        for (let i = 0; i < settings.firefliesCount; i++) {
            const x = this.generateParams(10, width - 10);
            const y = this.generateParams(10, height - 10);
            const currentTime = this.generateParams(10, settings.blinkCycleTime * 0.85);
            fireflies.push(new Firefly(x, y, currentTime));
        }
        return fireflies;
    }
}
