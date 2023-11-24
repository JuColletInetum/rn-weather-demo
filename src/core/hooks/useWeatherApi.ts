import {useEffect, useState} from 'react';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export type WeatherData = {
  current: {
    temperature_2m: number;
    weather_code: number;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
  };
};

export const getHourlyForecast = (
  data: WeatherData['hourly'],
): {time: string; temperature: number; code: number}[] =>
  data.time.map((time, i) => ({
    time,
    temperature: data.temperature_2m[i],
    code: data.weather_code[i],
  }));

const useWeatherApi = ({
  latitude,
  longitude,
}: {
  latitude?: number;
  longitude?: number;
} = {}) => {
  const [data, setData] = useState<WeatherData>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      if (latitude == null || longitude == null) {
        setIsLoading(false);
        return;
      }
      const params = new URLSearchParams({
        latitude: latitude.toString(),
        longitude: longitude.toString(),
        current: 'temperature_2m,weather_code',
        hourly: 'temperature_2m,weather_code',
      }).toString();

      const res = await fetch(`${BASE_URL}?${params}`, {
        signal: abortController.signal,
      });
      setData(await res.json());
      setIsLoading(false);
    };
    if (latitude != null && longitude != null) {
      fetchData();
    }

    return () => abortController.abort();
  }, [latitude, longitude]);

  return {
    data,
    isLoading,
  };
};

export default useWeatherApi;
