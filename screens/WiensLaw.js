


import React, { Component, useState, useEffect } from 'react';
import {
  AppRegistry, StyleSheet, Platform, TouchableOpacity, Text, TextInput, View, Button, Form, Container,
  Header, Content, CardItem, Body, Item, Input, Picker,
} from 'react-native';
import Card from '../shared/card';
import SmallCard from '../shared/smallCard';

import { globalStyles } from '../styles/global';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import InputCard from '../shared/inputCard';
import EmptyCard from '../shared/emptyCard';

export default class WiensLaw extends Component {

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
    this.state = { f2: 0, result: '' };
    this.state = {
      from: 'input',
      to: 'output'
    };


  }
  componentHideAndShow1 = () => {
    this.setState(previousState => ({ content1: !previousState.content1 }))
    this.setState({content2: false})

  }
  componentHideAndShow2 = () => {
    this.setState(previousState => ({ content2: !previousState.content2 }))
    this.setState({content1: false})

  }




  render() {


    var f1 = this.state.f1;
    var f2 = this.state.f2;
    var result = 0;
    var ans = 0;
    var Wiens = 2.898 * Math.pow(10,-3)
    var waveLength = f1;
    var shortendWaveLength = 0;
    

    //C - F   
    if ((this.state.from == 'micrometer')) {
      waveLength = waveLength* Math.pow(10,-6);
    }
    if ((this.state.from == 'nanometer')) {
      waveLength = waveLength* Math.pow(10,-9);
    }
    shortendWaveLength = waveLength * Math.pow(10,-9)

    

    result = Wiens/waveLength;

    if ((this.state.to == 'Fahrenheit')) {
      result = (result - 273.15) * 9 / 5 + 32;
    }
    if ((this.state.to == 'Celsius')) {
      result = result - 273.15;
    }
  

    return (


      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();

      }} >


        <ScrollView style={globalStyles.pageContainer}>

          <View>
            {/* <Text style={globalStyles.pageTitle}> Convert temperature</Text> */}
          </View>


          <TextInput placeholder='Convert' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f1: (text) })} />

          {/* <Text style={globalStyles.cardStuff}> {(result.toExponential())} </Text> */}

          {<Text style={globalStyles.cardStuff}> {(result)} </Text>}


          <View style={globalStyles.buttonView}>
            <TouchableOpacity onPress={this.componentHideAndShow1}>
              <Text style={globalStyles.button}> {this.state.from}</Text>
            </TouchableOpacity >



            <TouchableOpacity onPress={this.componentHideAndShow2}>
              <Text style={globalStyles.button}>{this.state.to}</Text>
            </TouchableOpacity >
          </View>




          {this.state.content1 ?
            <TouchableOpacity onPress={() => { this.setState({ from: 'nanometer' }) }} >

              <InputCard>
                <Text style={globalStyles.smallCardText}> nanometer</Text>

              </InputCard>

            </TouchableOpacity> : null}


          {this.state.content1 ?
            <TouchableOpacity onPress={() => { this.setState({ from: 'micrometer' }) }} >
              <InputCard>
                <Text style={globalStyles.smallCardText}> micrometer</Text>

              </InputCard>
              <EmptyCard>
                  <Text style={globalStyles.titleText}></Text>

                </EmptyCard>
            </TouchableOpacity> : null}


       




          {this.state.content2 ? <TouchableOpacity onPress={() => { this.setState({ to: 'Celsius' }) }} >
            <InputCard>
              <Text style={globalStyles.smallCardText}> Celsius</Text>

            </InputCard>
          </TouchableOpacity> : null}


          {this.state.content2 ?
            <TouchableOpacity onPress={() => { this.setState({ to: 'Fahrenheit' }) }} >
              <InputCard>
                <Text style={globalStyles.smallCardText}> Fahrenheit</Text>

              </InputCard>
              
            </TouchableOpacity> : null}


          {this.state.content2 ?
            <TouchableOpacity onPress={() => { this.setState({ to: 'Kelvin' }) }} >
              <InputCard>
                <Text style={globalStyles.smallCardText}> Kelvin</Text>

              </InputCard>
              <EmptyCard>
                  <Text style={globalStyles.titleText}></Text>

                </EmptyCard>
            </TouchableOpacity> : null}



        </ScrollView>

      </TouchableWithoutFeedback>

    );
  }
}

