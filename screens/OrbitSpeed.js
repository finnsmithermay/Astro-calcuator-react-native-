
import React, { Component, } from 'react';
import {
  AppRegistry, StyleSheet, Platform, TouchableOpacity, Text, TextInput, View, Button, Form, Container,
  Header, Content, CardItem, Body, Item, Input, Picker,
} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class OrbitSpeed extends Component {

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
    var f2 = this.state.f2;
   
    //math constants 

    //equation calaculations
    var G = 6.678 * Math.pow(10, -11)
    
    var Mass = (f1 *  (1.989 * (Math.pow(10, 30))));
    
    var radius = (f2 *  (1.496 * (Math.pow(10, 11))));
    
    var ans = (Math.sqrt(G * Mass / radius)) / 1000;

    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();

      }} >
        <ScrollView style={globalStyles.pageContainer}>

          <View>

            <View>
              {/* <Text style={globalStyles.pageTitle}> Orbital Speed</Text> */}
            </View>

            <TextInput placeholder='Enter Total mass (In solar Mass):' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f1: (text) })} />


            <TextInput placeholder='Enter Orbit radius (In AU):' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f2: (text) })} />

    {<Text style={globalStyles.cardStuff} >  {(ans).toFixed(4)} km/s</Text>}





            {/* // <View style={styles.container}> */}

            {/* <Button title="Decription" onPress={this.componentHideAndShow } style={styles.button} /> */}

            {/* <View style={globalStyles.buttonView}>
              <TouchableOpacity onPress={this.componentHideAndShow1}>
                <Text style={globalStyles.button}>Decription</Text>
              </TouchableOpacity >

              <TouchableOpacity onPress={this.componentHideAndShow2}>
                <Text style={globalStyles.button}>Math Decription</Text>
              </TouchableOpacity >
            </View> */}

            {this.state.content1 ? <Text style={globalStyles.cardStuff}>
              orbital speed Decription
              plassholder text plassholder text plassholder text plassholder text plassholder text plassholder text 
              plassholder text plassholder text plassholder text plassholder text 
              plassholder text plassholder text plassholder text plassholder text plassholder text 
              plassholder text plassholder text plassholder text plassholder text plassholder text 
              </Text> : null}
            {/* </View> */}


            {this.state.content2 ? <Text style={globalStyles.cardStuff}>
              Math obital speed  
              plassholder text plassholder text plassholder text plassholder text plassholder text plassholder text 
              plassholder text plassholder text plassholder text plassholder text 
              plassholder text plassholder text plassholder text plassholder text plassholder text 
              </Text> : null}
          </View>

        </ScrollView>

      </TouchableWithoutFeedback>

    );
  }
}

