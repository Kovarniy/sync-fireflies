import { Firefly } from '../model/firefly.js';
import { settings } from '../settings.js';

export class FirefilesGenerator {
  private static generateParams(min: number, max: number): number {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  public static generate(width: number, height: number): Firefly[] {
    const fireflies: Firefly[] = [];

    for (let i = 0; i < settings.firefliesCount; i++) {
      const x: number = this.generateParams(0, width);
      const y: number = this.generateParams(0, height);
      const delay: number = this.generateParams(
        settings.delay.min,
        settings.delay.max
      );

      fireflies.push(new Firefly(x, y, delay));
    }

    return fireflies;
  }
}
