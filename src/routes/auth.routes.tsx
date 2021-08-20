import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { SignIn } from '../screens/signin';
import { LinearGradient } from 'expo-linear-gradient';
import { Styles } from '../components/Background/styles';
import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  const { secondary80, secondary100 } = theme.colors;
  return (
    <Navigator
      screenOptions={{
        headerMode: 'screen',
        headerShown: false,
        cardOverlay: () => (
          <LinearGradient
            style={Styles.container}
            colors={[secondary80, secondary100]} />
        ),
        cardStyle: {
          backgroundColor: 'transparent',
          opacity: 1,
        },
      }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Home"
        component={Home}
      />
    </Navigator>
  );
}