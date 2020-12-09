
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
    var meters = 3.086* Math.pow(10, 16);
    var KM = 3.086* Math.pow(10, 13);
    var LY = 3.262;

    return (










      
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();

      }} >
        <ScrollView style={globalStyles.pageContainer}>

          <View>

            <View>
              <Text style={globalStyles.pageTitle}>  convert parsecs</Text>
            </View>

            <TextInput placeholder='Enter parsecs' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f1: (text) })} />

            {this.state.content1 ?  <Text style={globalStyles.cardStuff}>  {f1} parsecs equals {(f1 * meters).toFixed(3)} M </Text> : null}
        
            {<Text style={globalStyles.cardStuff}>  {f1} parsecs equals {(f1 * KM).toFixed(3)} KM </Text>}
        
            {<Text style={globalStyles.cardStuff}>  {f1} parsecs equals {(f1 * LY).toFixed(3)} Light Years </Text>}



              <View style={globalStyles.buttonView}>
              <TouchableOpacity onPress={this.componentHideAndShow1}>
                <Text style={globalStyles.button}>Change units</Text>
              </TouchableOpacity >

           
            </View>

            {this.state.content1 ?  <View style={globalStyles.buttonView}>
              <TouchableOpacity onPress={this.componentHideAndShow1}>
                <Text style={globalStyles.button}>Meters</Text>
              </TouchableOpacity >

           
            </View> : null}


            
          </View>

        </ScrollView>

      </TouchableWithoutFeedback>

    );
  }
}

