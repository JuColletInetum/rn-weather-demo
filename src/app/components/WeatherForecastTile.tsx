import {StyleSheet, View, Text} from 'react-native';
import {WeatherIcon} from './WeatherIcon';
import colors from '../../common/primitives/colors';
import {size} from '../../common/primitives';

const WeatherForecastTile = ({
  time,
  temperature,
  code,
}: {
  time: string;
  temperature: number;
  code: number;
}) => {
  const [weekDay, _, hour] = new Date(time)
    .toLocaleDateString('en', {
      weekday: 'long',
      hour: '2-digit',
    })
    .split(',');

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.day}>{weekDay}</Text>
        <Text style={styles.hour}>{`${hour}H`}</Text>
      </View>
      <WeatherIcon code={code} width={size[3]} height={size[3]} />
      <Text style={styles.temperature}>{`${temperature}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: colors.cardBackgroundColor,
    borderRadius: size['0.25'],
    marginRight: size['0.5'],
    padding: size['0.75'],
    paddingVertical: size[1],
    alignItems: 'center',
    gap: size['0.5'],
    width: size[6],
  },
  dateContainer: {
    alignItems: 'center',
  },
  day: {
    color: colors.fontColor,
    fontSize: size['0.75'],
    marginBottom: size['0.25'],
    fontWeight: '400',
  },
  hour: {
    color: colors.fontColor,
    fontWeight: '600',
  },
  temperature: {
    color: colors.fontColor,
    fontWeight: '600',
    fontSize: size['1.25'],
  },
});

export default WeatherForecastTile;
