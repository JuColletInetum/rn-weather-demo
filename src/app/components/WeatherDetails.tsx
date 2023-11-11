import {Text, StyleSheet, View, ScrollView, FlatList} from 'react-native';

import {WeatherData, getHourlyForecast} from '../../core/hooks/useWeatherApi';
import {size} from '../../common/primitives';
import colors from '../../common/primitives/colors';
import {WeatherIcon} from './WeatherIcon';
import WeatherForecastTile from './WeatherForecastTile';

type Props = {
  data: WeatherData;
};

const WeatherDetails_opti = ({data}: Props) => (
  <View style={styles.container}>
    <View>
      <WeatherIcon
        code={data.current.weather_code}
        height={size[10]}
        width={size[10]}
        style={styles.icon}
      />
      <Text
        style={styles.temperature}>{`${data.current.temperature_2m}°`}</Text>
    </View>
    <FlatList
      data={getHourlyForecast(data.hourly)}
      renderItem={({item: {time, temperature, code}}) => (
        <WeatherForecastTile
          key={time}
          time={time}
          temperature={temperature}
          code={code}
        />
      )}
      alwaysBounceHorizontal={false}
      showsHorizontalScrollIndicator={false}
      style={styles.forecastContainer}
      horizontal
    />
  </View>
);

const WeatherDetails = ({data}: Props) => (
  <View style={styles.container}>
    <View>
      <WeatherIcon
        code={data.current.weather_code}
        height={size[10]}
        width={size[10]}
        style={styles.icon}
      />
      <Text
        style={styles.temperature}>{`${data.current.temperature_2m}°`}</Text>
    </View>
    <ScrollView
      alwaysBounceHorizontal={false}
      horizontal
      style={styles.forecastContainer}
      showsHorizontalScrollIndicator={false}>
      {getHourlyForecast(data.hourly).map(({time, temperature, code}) => (
        <WeatherForecastTile
          key={time}
          time={time}
          temperature={temperature}
          code={code}
        />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
  },
  forecastContainer: {
    flexGrow: 0,
    paddingLeft: size[1],
  },
  icon: {
    marginBottom: size[1],
  },
  temperature: {
    fontSize: size[5],
    lineHeight: size[5],
    fontWeight: '500',
    color: colors.fontColor,
    marginBottom: size[1],
  },
});

export default WeatherDetails;
