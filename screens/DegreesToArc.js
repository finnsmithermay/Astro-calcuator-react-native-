
import React, { Component, } from 'react';
import {
  AppRegistry, StyleSheet, Platform, TouchableOpacity, Text, TextInput, View, Button, Form, Container,
  Header, Content, CardItem, Body, Item, Input, Picker,
} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class DegreesToArc extends Component {

  constructor(props) {

    super();
    this.state = {
      content1: false
    }
    this.state = {
      content2: false
    }
    super(props);
    this.state = { f1: 0, result: '' };


  }

  componentHideAndShow1 = () => {
    this.setState(previousState => ({ content1: !previousState.content1 }))
  }
  componentHideAndShow2 = () => {
    this.setState(previousState => ({ content2: !previousState.content2 }))
  }

  render() {

    var f1 = this.state.f1;
    
    //math constants 

    //equation calaculations
    var ASec = 3600;
    var AMin = 60;

    return (

      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();

      }} >
        <ScrollView style={globalStyles.pageContainer}>

          <View>

            <View>
              {/* <Text style={globalStyles.pageTitle}>  convert Degrees</Text> */}
            </View>

            <TextInput placeholder='Enter Degrees' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f1: (text) })} />

            {<Text style={globalStyles.cardStuff}>  {f1} Degress is equal to  {(f1 * ASec).toFixed(3)} Arc Seconds </Text>}
            {<Text style={globalStyles.cardStuff}>  {f1} Degress is equal to {(f1 * AMin).toFixed(3)} Arc minuets </Text>}


            {this.state.content1 ? <Text style={globalStyles.cardStuff}>
              The parcecs radius (sometimes historically
              referred to as the gravitational radius) is a physical parameter that shows up in the Schwarzschild solution
              to Einstein's field equations, corresponding to the radius defining the event horizon of a Schwarzschild
              black hole. It is a characteristic radius associated with every quantity of mass. The Schwarzschild
              radius (Sch. R) was named after the German astronomer Karl Schwarzschild, who calculated this exact
              solution for the theory of general relativity in 1916.
              </Text> : null}
            {/* </View> */}


            {this.state.content2 ? <Text style={globalStyles.cardStuff}>
              MAth parcecs radius (sometimes historically
              referred to as the gravitational radius) is a physical parameter that shows up in the Schwarzschild solution
              to Einstein's field equations, corresponding to the radius defining the event horizon of a Schwarzschild
              black hole. It is a characteristic radius associated with every quantity of mass. The Schwarzschild
              radius (Sch. R) was named after the German astronomer Karl Schwarzschild, who calculated this exact
              solution for the theory of general relativity in 1916.
              </Text> : null}
          </View>

        </ScrollView>

      </TouchableWithoutFeedback>

    );
  }
}

