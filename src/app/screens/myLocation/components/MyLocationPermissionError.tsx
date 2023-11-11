import {View, Text, StyleSheet} from 'react-native';

type Props = {
  error: string;
};

const MyLocationError = ({error}: Props) => (
  <View style={styles.container}>
    <Text>{error}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default MyLocationError;
