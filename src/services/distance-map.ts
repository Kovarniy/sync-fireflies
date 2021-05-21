import { Firefly } from '../model/firefly.js';

export class DistanceMap {
  readonly distanceMap: number[][];

  constructor(fireflies: Firefly[]) {
    this.distanceMap = [...Array(fireflies.length)].map((x) => []);

    for (let i = 0; i < fireflies.length; i++) {
      for (let j = i + 1; j < fireflies.length; j++) {
        const distance: number = this.calculateDistance(
          fireflies[i],
          fireflies[j]
        );
        this.distanceMap[i][j] = distance;
        this.distanceMap[j][i] = distance;
      }
    }
    console.log(this.distanceMap);
  }

  private calculateDistance(fireflies1: Firefly, fireflies2: Firefly): number;

  private calculateDistance(
    x1: number,
    x2: number,
    y1: number,
    y2: number
  ): number;

  private calculateDistance(
    x1: number | Firefly,
    x2: number | Firefly,
    y1?: number,
    y2?: number
  ): number {
    let distX: number = 0;
    let distY: number = 0;

    if (x1 instanceof Firefly && x2 instanceof Firefly) {
      distX = Math.pow(x1.x - x2.x, 2);
      distY = Math.pow(x1.y - x2.y, 2);
    }

    if (
      typeof x1 === 'number' &&
      typeof x2 === 'number' &&
      typeof y1 === 'number' &&
      typeof y2 === 'number'
    ) {
      distX = Math.pow(x1 - x2, 2);
      distY = Math.pow(y1 - y2, 2);
    }

    return Math.sqrt(distX + distY);
  }
}
