import { FirefliesGenerator } from './services/fireflies-generator.js';
import { Canvas } from './services/fireflies-renderer.js';
import { PageSettings } from './services/page-settings.js';
import run from '@jamesives/github-pages-deploy-action';
export function regenerateCanvas(canvas) {
    canvas.stop();
    const newFireflies = FirefliesGenerator.generate(canvas.width, canvas.height);
    canvas.render(newFireflies);
}
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    const canvas = new Canvas('canvas');
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
        },
    }).init();
    const fireflies = FirefliesGenerator.generate(canvas.width, canvas.height);
    canvas.render(fireflies);
    (_a = document
        .getElementById('regenerate-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        regenerateCanvas(canvas);
    });
});
run({
    // token: process.env['firefly-token'],
    branch: 'gh-pages',
    folder: 'dist',
    repositoryName: 'kovarniy/sync-fireflies',
    silent: true,
    workspace: 'src',
    isTest: 0,
});
