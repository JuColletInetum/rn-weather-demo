import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Icons} from '../../common/assets';
import MyLocationScreen from '../screens/myLocation/MyLocationScreen';
import * as ROUTES from './routes';
import colors from '../../common/primitives/colors';
import {size} from '../../common/primitives';

const Tab = createBottomTabNavigator();

const ICON_SIZE = size[1];

const getFocusedColor = (focused: boolean) =>
  focused ? colors.fontColor : colors.fontLightColor;

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: {
          paddingVertical: size['0.5'],
        },
        tabBarActiveTintColor: colors.fontColor,
        tabBarInactiveTintColor: colors.fontLightColor,
      }}>
      <Tab.Screen
        name={ROUTES.MY_LOCATION_SCREEN}
        component={MyLocationScreen}
        options={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTitle: 'My location',
          title: 'My location',
          tabBarIcon: ({focused}) => (
            <Icons.Location
              width={ICON_SIZE}
              height={ICON_SIZE}
              color={getFocusedColor(focused)}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.WORLD_WEATHER_NAVIGATOR}
        component={() => null}
        options={{
          headerShown: false,
          title: 'World weather',
          tabBarIcon: ({focused}) => (
            <Icons.Globe
              width={ICON_SIZE}
              height={ICON_SIZE}
              color={getFocusedColor(focused)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigator;
