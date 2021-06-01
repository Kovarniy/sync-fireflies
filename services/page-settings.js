import { regenerateCanvas } from "../app.js";
import { settings } from "../settings.js";
;
export class PageSettings {
    constructor(inputSettings) {
        this._settings = inputSettings;
    }
    init() {
        this._initRangeInput(this._settings.firefliesCount, 'firefliesCount');
        this._initRangeInput(this._settings.visibleNeighborsCount, 'visibleNeighborsCount');
        this._initRangeInput(this._settings.blinkCycleTime, 'blinkCycleTime');
        this._initRangeInput(this._settings.globalSpeed, 'globalSpeed', false);
    }
    _initRangeInput(range, settingsKey, resetCanvas = true) {
        const input = document.getElementById(range.baseSelector);
        const counter = document.getElementById(range.counterSelector);
        const settingsValue = settings[settingsKey];
        input.value = settingsValue.toString();
        counter.innerHTML = settingsValue.toString();
        input.addEventListener('input', (event) => {
            const newValue = parseInt(event.target.value);
            counter.innerHTML = newValue.toString();
            settings[settingsKey] = newValue;
            if (resetCanvas) {
                regenerateCanvas(this._settings.canvas);
            }
        });
    }
}
