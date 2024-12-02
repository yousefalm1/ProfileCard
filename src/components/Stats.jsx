import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Stats = ({ numberText, text }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{numberText}</Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: 'light',
          color: 'grey',
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({});
