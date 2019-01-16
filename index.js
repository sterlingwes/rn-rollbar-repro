import React from 'react';
import {AppRegistry, StyleSheet, Text, View, NativeModules, TouchableOpacity} from 'react-native';

require('./rollbar');

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>How would you like to crash today?</Text>
        <Button onPress={this.onClickJsCrash}>
          JS crash!
        </Button>
        <Button onPress={this.onClickNativeCrash}>
          Native crash!
        </Button>
      </View>
    );
  }

  onClickJsCrash() {
    throw new Error('oh no javascript')
  }

  onClickNativeCrash() {
    NativeModules.Environment.crash();
  }
}

const Button = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>
        {props.children}
      </Text>
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
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'teal',
    borderRadius: 10
  },
  buttonText: {
    color: 'white'
  }
});

AppRegistry.registerComponent('App', () => App);
