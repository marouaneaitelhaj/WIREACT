import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Button } from 'react-native';
import Footer from './footer';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});