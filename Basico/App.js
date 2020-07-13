import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import BoasVindas from './components/BoasVindas';
import Calculo from './components/Calculo';

export default class App extends Component{
  render(){
    return (
      <View style={styles.container}>
        <BoasVindas saudacao='Bom dia!' />
        <Calculo />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "#1b1c1d",
  },
});
