import { Firefly } from '../model/firefly';
import { settings } from '../settings';

export class FirefilesGenerator {
  private static generateParams(): number {
    return 0;
  }

  public static generate(): Firefly[] {
    const fireflies: Firefly[] = [];

    for (let i = 0; i < settings.firefliesCount; i++) {
      fireflies.push(new Firefly(1, 1, 1));
    }

    return fireflies;
  }
}
