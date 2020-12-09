
import React, { Component, } from 'react';
import {
  AppRegistry, StyleSheet, Platform, TouchableOpacity, Text, TextInput, View, Button, Form, Container,
  Header, Content, CardItem, Body, Item, Input, Picker,
} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class PtoMeters extends Component {

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
    var meters = 1.496* Math.pow(10, 11);
    var KM = 1.496* Math.pow(10, 8);

    return (

      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();

      }} >
        <ScrollView style={globalStyles.pageContainer}>

          <View>

            <View>
              <Text style={globalStyles.pageTitle}>convert Astronomical Units</Text>
            </View>

          

            <TextInput placeholder='Enter Astronomical units: ' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f1: (text) })} />

            {<Text style={globalStyles.cardStuff}>  {f1} AU equals:  {(f1 * meters).toFixed(3)} M </Text>}
            {<Text style={globalStyles.cardStuff}>  {f1} AU equals:  {(f1 * KM).toFixed(3)} KM </Text>}








            {/* // <View style={styles.container}> */}
{/* 
            <Button title="Decription" onPress={this.componentHideAndShow } style={styles.button} /> */}

            {/* <View style={globalStyles.buttonView}>
              <TouchableOpacity onPress={this.componentHideAndShow1}>
                <Text style={globalStyles.button}>Decription</Text>
              </TouchableOpacity >

              <TouchableOpacity onPress={this.componentHideAndShow2}>
                <Text style={globalStyles.button}>Math Decription</Text>
              </TouchableOpacity >
            </View> */}

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

