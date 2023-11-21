import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import countries from '../../../common/assets/data/countries';
import colors from '../../../common/primitives/colors';
import * as ROUTES from './navigation/routes';
import {size} from '../../../common/primitives';
import {StackScreenProps} from '@react-navigation/stack';

type NavProp = StackScreenProps<
  ROUTES.WorldWeatherStack,
  'WORLD_LOCATION_PICKER_SCREEN'
>;

const LocationPickerScreen = () => {
  const navigation = useNavigation<NavProp['navigation']>();

  return (
    <ScrollView style={styles.container}>
      {countries.map(country => (
        <Pressable
          key={country.name}
          onPress={() => {
            navigation.navigate(ROUTES.WORLD_WEATHER_DETAILS_SCREEN, {
              country: country.name,
            });
          }}>
          <View style={styles.listItemContainer}>
            <Text style={styles.listItemTitle}>{country.name}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: size[1],
  },
  listItemContainer: {
    padding: size[1],
    backgroundColor: colors.cardBackgroundColor,
    borderRadius: size['0.25'],
    marginBottom: size[1],
  },
  listItemTitle: {
    color: colors.fontColor,
    fontWeight: '400',
  },
});

export default LocationPickerScreen;
