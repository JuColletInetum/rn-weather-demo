import {useEffect, useState, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import {Images} from '../../common/assets';
import {size} from '../../common/primitives';
import colors from '../../common/primitives/colors';

const Loading = () => {
  const [rotation, setRotation] = useState(0);
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timer.current = setInterval(() => {
      setRotation(prev => (prev <= 360 ? prev + 5 : 0));
    }, 3);
    return () => clearInterval(timer.current);
  }, []);

  return (
    <View style={styles.container}>
      <Images.Loading
        width={size[3]}
        height={size[3]}
        color={colors.fontColor}
        style={{
          transform: [
            {
              rotate: `${rotation}deg`,
            },
          ],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default Loading;
