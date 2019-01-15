import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

require('./rollbar');

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('App', () => App);
