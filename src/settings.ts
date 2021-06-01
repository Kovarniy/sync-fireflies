export interface ISettings {
  firefliesCount: number,
  visibleNeighborsCount: number,
  blinkCycleTime: number,
  globalSpeed: number,
}

export type SettingsKeys = keyof ISettings;

export const settings: ISettings = {
  firefliesCount: 50,
  visibleNeighborsCount: 7,
  blinkCycleTime: 1000,
  globalSpeed: 100,
};
