import { Firefly } from '../model/firefly';
import { settings } from '../settings';

export class FirefliesGenerator {
  private static generateParams(min: number, max: number): number {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  public static generate(width: number, height: number): Firefly[] {
    const fireflies: Firefly[] = [];

    for (let i = 0; i < settings.firefliesCount; i++) {
      const x: number = this.generateParams(10, width - 10);
      const y: number = this.generateParams(10, height - 10);
      const currentTime: number = this.generateParams(
        10,
        settings.blinkCycleTime * 0.85
      );

      fireflies.push(new Firefly(x, y, currentTime));
    }

    return fireflies;
  }
}
