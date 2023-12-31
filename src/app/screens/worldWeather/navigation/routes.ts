export const WORLD_LOCATION_PICKER_SCREEN = 'WORLD_LOCATION_PICKER_SCREEN';
export const WORLD_WEATHER_DETAILS_SCREEN = 'WORLD_WEATHER_DETAILS_SCREEN';

export type WorldWeatherStack = {
  [WORLD_WEATHER_DETAILS_SCREEN]: {
    country: string;
  };
  [WORLD_LOCATION_PICKER_SCREEN]: undefined;
};
