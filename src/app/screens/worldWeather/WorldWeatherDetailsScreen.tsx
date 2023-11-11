import {countries} from '../../../common/assets';
import useWeatherApi from '../../../core/hooks/useWeatherApi';
import WeatherDetails from '../../components/WeatherDetails';
import Loading from '../../components/Loading';
import {useRoute} from '@react-navigation/native';
import * as ROUTES from './navigation/routes';
import {StackScreenProps} from '@react-navigation/stack';

type NavProp = StackScreenProps<
  ROUTES.WorldWeatherStack,
  'WORLD_WEATHER_DETAILS_SCREEN'
>;

const WeatherDetailsScreen = () => {
  const {params} = useRoute<NavProp['route']>();
  const {data, isLoading} = useWeatherApi(
    countries.find(({name}) => name === params.country) ?? {},
  );

  if (isLoading || data == null) {
    return <Loading />;
  }

  return <WeatherDetails data={data} />;
};

export default WeatherDetailsScreen;
