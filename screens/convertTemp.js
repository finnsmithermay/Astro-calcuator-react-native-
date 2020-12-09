


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

export default class convertTemp extends Component {

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
      from: 'Convert From',
      to: 'Convert To'
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


    //C - F   
    if ((this.state.from == 'Celsius') && (this.state.to == 'Fahrenheit')) {
      result = (f1 * 9 / 5) + 32;
    }
    if ((this.state.from == 'Fahrenheit') && (this.state.to == 'Celsius')) {
      result = (f1 - 32) * 5 / 9;
    }

    //C - K
    if ((this.state.from == 'Celsius') && (this.state.to == 'Kelvin')) {
      result = Number(f1) + Number(273.15);
    }
    if ((this.state.from == 'Kelvin') && (this.state.to == 'Celsius')) {
      result = f1 - 273.15;
    }
    //C - R
    if ((this.state.from == 'Celsius') && (this.state.to == 'Rankine Scale')) {
      result = (f1 * 9 / 5) + 491.67;
    }
    if ((this.state.from == 'Rankine Scale') && (this.state.to == 'Celsius')) {
      result = (f1 - 491.67) * 5 / 9;
    }

    //F - K 
    if ((this.state.from == 'Fahrenheit') && (this.state.to == 'Kelvin')) {
      result = (f1 - 32) * 5 / 9 + 273.15;
    }
    if ((this.state.from == 'Kelvin') && (this.state.to == 'Fahrenheit')) {
      result = (f1 - 273.15) * 9 / 5 + 32;
    }

    //F - R
    if ((this.state.from == 'Fahrenheit') && (this.state.to == 'Rankine Scale')) {
      result = Number(f1) + Number(459.67);
    }
    if ((this.state.from == 'Rankine Scale') && (this.state.to == 'Fahrenheit')) {
      result = (f1 - 459.67);
    }

    //K - R
    if ((this.state.from == 'Kelvin') && (this.state.to == 'Rankine Scale')) {
      result = f1 * 1.8;
    }
    if ((this.state.from == 'Rankine Scale') && (this.state.to == 'Kelvin')) {
      result = (f1 * 5 / 9);
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
            <TouchableOpacity onPress={() => { this.setState({ from: 'Celsius' }) }} >

              <InputCard>
                <Text style={globalStyles.smallCardText}> Celsius</Text>

              </InputCard>

            </TouchableOpacity> : null}


          {this.state.content1 ?
            <TouchableOpacity onPress={() => { this.setState({ from: 'Fahrenheit' }) }} >
              <InputCard>
                <Text style={globalStyles.smallCardText}> Fahrenheit</Text>

              </InputCard>
            </TouchableOpacity> : null}


          {this.state.content1 ?
            <TouchableOpacity onPress={() => { this.setState({ from: 'Kelvin' }) }} >
              <InputCard>
                <Text style={globalStyles.smallCardText}> Kelvin</Text>

              </InputCard>
            </TouchableOpacity> : null}



          {this.state.content1 ?
            <TouchableOpacity onPress={() => { this.setState({ from: 'Rankine Scale' }) }} >
              <InputCard>
                <Text style={globalStyles.smallCardText}> Rankine Scale</Text>

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

            </TouchableOpacity> : null}


          {this.state.content2 ?
            <TouchableOpacity onPress={() => { this.setState({ to: 'Rankine Scale' }) }} >
              <InputCard>
                <Text style={globalStyles.smallCardText}> Rankine Scale</Text>

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

