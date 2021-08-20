import React from 'react';
import { View } from 'react-native';
import { Profile } from '../../components/Profile';
import { Styles } from './styles';

export function Home() {
  return (
    <View>
      <View style={Styles.header}>
        <Profile />
      </View>
    </View>
  );
}