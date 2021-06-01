import { regenerateCanvas } from "../app.js";
import { settings, SettingsKeys } from "../settings.js";
import { Canvas } from "./fireflies-renderer.js";

interface RangeSettings {
  baseSelector: string,
  counterSelector: string
}

interface InputSettings {
  canvas: Canvas,
  firefliesCount: RangeSettings,
  visibleNeighborsCount: RangeSettings,
  blinkCycleTime: RangeSettings,
  globalSpeed: RangeSettings
};

export class PageSettings {
  private _settings;

  constructor(inputSettings: InputSettings) {
    this._settings = inputSettings;
  }

  init(): void {
    this._initRangeInput(
      this._settings.firefliesCount,
      'firefliesCount',
    );

    this._initRangeInput(
      this._settings.visibleNeighborsCount,
      'visibleNeighborsCount',
    );

    this._initRangeInput(
      this._settings.blinkCycleTime,
      'blinkCycleTime',
    );

    this._initRangeInput(
      this._settings.globalSpeed,
      'globalSpeed',
      false
    );
  }

  private _initRangeInput(range: RangeSettings, settingsKey: SettingsKeys, resetCanvas = true): void {
    const input = document.getElementById(range.baseSelector) as HTMLInputElement;
    const counter = document.getElementById(range.counterSelector) as HTMLElement;

    const settingsValue = settings[settingsKey];

    input.value = settingsValue.toString();
    counter.innerHTML = settingsValue.toString();

    input.addEventListener('input', (event) => {
      const newValue = parseInt((<HTMLInputElement>event.target).value);
      counter.innerHTML = newValue.toString();
      settings[settingsKey] = newValue;

      if(resetCanvas) {
        regenerateCanvas(this._settings.canvas);
      }
    });
  }
}
