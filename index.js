import React from 'react';
import {AppRegistry, StyleSheet, Text, View, NativeModules, TouchableOpacity} from 'react-native';

require('./rollbar');

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello!</Text>
        <Button onPress={this.onClickCrash}>
          Native crash!
        </Button>
      </View>
    );
  }

  onClickCrash() {
    NativeModules.Environment.crash();
  }
}

const Button = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.button}>
      <Text>{props.children}</Text>
    </View>
  </TouchableOpacity>
);

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
