import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';
import { Styles } from './style';

export function Profile() {
  return (
    <View style={Styles.container}>
      <Avatar urlImage="https://github.com/lucimaritba.png" />
      <View>
        <View style={Styles.user}>
          <Text style={Styles.greeting}>
            Olá,
          </Text>

          <Text style={Styles.username}>
            Lucimar
          </Text>
        </View>

        <Text style={Styles.message}>
          Hoje é dia de vitoria
        </Text>
      </View>
    </View>
  );
}