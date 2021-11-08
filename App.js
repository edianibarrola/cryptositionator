import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.topRow}>Cryptositionator</Text>
      <TextInput
      style={styles.input}
      placeHolder="number"
      value="12"
      keyboardType="numeric"

      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0FF1CE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#9fb3c7',
  },
  topRow: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
