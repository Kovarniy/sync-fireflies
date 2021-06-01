import { Firefly } from './model/firefly.js';
import { FirefliesGenerator } from './services/fireflies-generator.js';
import { Canvas } from './services/fireflies-renderer.js';
import { PageSettings } from './services/page-settings.js';

export function regenerateCanvas(canvas: Canvas): void {
  canvas.stop();

  const newFireflies: Firefly[] = FirefliesGenerator.generate(
    canvas.width,
    canvas.height
  );

  canvas.render(newFireflies);
}

document.addEventListener('DOMContentLoaded', () => {
  const canvas: Canvas = new Canvas('canvas');

  new PageSettings({
    canvas,
    firefliesCount: {
      baseSelector: 'fireflies-counter-range',
      counterSelector: 'fireflies-counter-current',
    },
    visibleNeighborsCount: {
      baseSelector: 'neighbors-counter-range',
      counterSelector: 'neighbors-counter-current',
    },
    blinkCycleTime: {
      baseSelector: 'cycle-counter-range',
      counterSelector: 'cycle-counter-current',
    },
    globalSpeed: {
      baseSelector: 'speed-counter-range',
      counterSelector: 'speed-counter-current',
    }
  }).init();

  const fireflies: Firefly[] = FirefliesGenerator.generate(
    canvas.width,
    canvas.height
  );

  canvas.render(fireflies);

  document.getElementById('regenerate-button')?.addEventListener('click', () => {
    regenerateCanvas(canvas);
  });
});
