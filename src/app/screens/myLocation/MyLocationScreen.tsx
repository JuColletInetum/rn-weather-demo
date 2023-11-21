import useLocation from '../../../core/hooks/useLocation';
import WeatherDetails from '../../components/WeatherDetails';
import useWeatherApi from '../../../core/hooks/useWeatherApi';
import MyLocationPermissionError from './components/MyLocationPermissionError';
import Loading from '../../components/Loading';

const MyLocationScreen = () => {
  const {location, error} = useLocation();
  const {data, isLoading} = useWeatherApi(location);

  if (isLoading) {
    return <Loading />;
  }

  if (error || data == null) {
    return <MyLocationPermissionError error={error ?? 'No data'} />;
  }

  return <WeatherDetails data={data} />;
};

export default MyLocationScreen;
