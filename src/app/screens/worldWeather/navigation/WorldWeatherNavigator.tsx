import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import * as ROUTES from './routes';
import WorldWeatherDetailsScreen from '../WorldWeatherDetailsScreen';
import WorldWeatherLocationPicker from '../WorldLocationPickerScreen';
import {size} from '../../../../common/primitives';
import colors from '../../../../common/primitives/colors';

const Stack = createStackNavigator<ROUTES.WorldWeatherStack>();

function WeatherNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: styles.title,
        headerStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <Stack.Screen
        name={ROUTES.WORLD_LOCATION_PICKER_SCREEN}
        component={WorldWeatherLocationPicker}
        options={{
          headerTitle: 'Pick a country',
        }}
      />
      <Stack.Screen
        name={ROUTES.WORLD_WEATHER_DETAILS_SCREEN}
        component={WorldWeatherDetailsScreen}
        options={({route}) => {
          const {country} = route.params;
          return {
            headerTitle: country,
            headerBackTitle: 'Back',
          };
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  navButton: {
    paddingHorizontal: size[0.5],
  },
  title: {
    color: colors.fontColor,
  },
});

export default WeatherNavigator;
