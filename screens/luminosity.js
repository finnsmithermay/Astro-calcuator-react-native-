


import React, { Component, useState, useEffect } from 'react';
import {
  AppRegistry, StyleSheet, Platform, TouchableOpacity, Text, TextInput, View, Button, Form, Container,
  Header, Content, CardItem, Body, Item, Input, Picker,
} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SmallCard from '../shared/smallCard';
import InputCard from '../shared/inputCard';
import EmptyCard from '../shared/emptyCard';

export default class luminosity extends Component {

  constructor(props) {

    super();
    this.state = {
      content1: false
    }
    this.state = {
      content2: false
    }
    this.state = {
      content3: false
    }
    super(props);
    this.state = { f1: 0, result: '' };
    this.state = { f2: 0, result: '' };
    this.state = { f3: 0, result: '' };

    this.state = {
      from: 'Tempurature',
      to: 'Radius In',
      outPut: 'Output'
    };


  }
  componentHideAndShow1 = () => {
    this.setState(previousState => ({ content1: !previousState.content1 }))
    this.setState({ content2: false })
    this.setState({ content3: false })

  }
  componentHideAndShow2 = () => {
    this.setState(previousState => ({ content2: !previousState.content2 }))
    this.setState({ content1: false })
    this.setState({ content3: false })
  }


  componentHideAndShow3 = () => {
    this.setState(previousState => ({ content3: !previousState.content3 }))
    this.setState({ content2: false })
    this.setState({ content1: false })
  }

  render() {


    var R = this.state.f1;
    var Temp = this.state.f2;
    var f3 = this.state.f3;

    var sRaius = (6.957 * Math.pow(10, 8));
    var σ = (5.670367 * Math.pow(10, -8));
    var result = 0;

    //var A = (2 * G * f1) / f2;
    var answer = 0;

    //meters and kelvin 
    if (this.state.to == 'Sun Radii') {
      R = R * 695700000;
    }
    if (this.state.to == 'Kilometer') {
      R = R * 1000;
    }
    if (this.state.to == 'Mile') {
      R = R * 1609;
    }
    if (this.state.to == 'Meters') {
      R = R;
    }


    if (this.state.from == 'Celsius') {
      Temp = Temp - 273.15;
    }

    if (this.state.from == 'Fahrenheit') {
      Temp = (Temp - 32) * 5 / 9;
    }
    if (this.state.from == 'Kelvin') {
      Temp = Temp;
    }

    var rad = R * R;
    var T = Math.pow(Temp, 4);
    var A = 4 * Math.PI * rad;

    answer = 4 * Math.PI * (Math.pow(R, 2)) * σ * T;

    var output = 0;
    if (this.state.outPut == 'Gigawatts') {
      output = answer / (1 * Math.pow(10, 9));
    }
    if (this.state.outPut == 'Watt') {
      output = answer;
    }

    if (this.state.outPut == 'Solar Luminosity') {
      output = answer / (3.827 * Math.pow(10, 26));
    }

    return (


      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();

      }} >


        <ScrollView style={globalStyles.pageContainer}>

          <View>
            {/* <Text style={globalStyles.pageTitle}>Escape Velocity</Text> */}
          </View>


          <TextInput placeholder='Start Radius' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f1: (text) })} />
          <TextInput placeholder='Star Temperature' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f2: (text) })} />

          {<Text style={globalStyles.cardStuff}> {(output)} </Text>}


          <View style={globalStyles.buttonView}>
            <TouchableOpacity onPress={this.componentHideAndShow1}>
              <Text style={globalStyles.buttonSmall}>{this.state.from}</Text>
            </TouchableOpacity >



            <TouchableOpacity onPress={this.componentHideAndShow2}>
              <Text style={globalStyles.buttonSmall}>{this.state.to}</Text>
            </TouchableOpacity >

            <TouchableOpacity onPress={this.componentHideAndShow3}>
              <Text style={globalStyles.buttonSmall}>{this.state.outPut}</Text>
            </TouchableOpacity >
          </View>




          {this.state.content1 ? <TouchableOpacity onPress={() => { this.setState({ from: 'Celsius' }) }} >
            <InputCard>
              <Text style={globalStyles.titleText}> Celsius</Text>

            </InputCard>
          </TouchableOpacity> : null}


          {this.state.content1 ?
            <TouchableOpacity onPress={() => { this.setState({ from: 'Fahrenheit' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}> Fahrenheit</Text>

              </InputCard>
            </TouchableOpacity> : null}


          {this.state.content1 ?
            <TouchableOpacity onPress={() => { this.setState({ from: 'Kelvin' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}> Kelvin</Text>

              </InputCard>
              <EmptyCard>
                <Text style={globalStyles.titleText}></Text>

              </EmptyCard>
            </TouchableOpacity> : null}


          {/* </View> */}





          {this.state.content2 ?
            <TouchableOpacity onPress={() => { this.setState({ to: 'Sun Radii' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}> Sun Radii</Text>

              </InputCard>
            </TouchableOpacity> : null}



          {this.state.content2 ?
            <TouchableOpacity onPress={() => { this.setState({ to: 'Kilometer' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}> Kilometer</Text>

              </InputCard>

            </TouchableOpacity> : null}



          {this.state.content2 ?
            <TouchableOpacity onPress={() => { this.setState({ to: 'Mile' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}> Miles</Text>

              </InputCard>

            </TouchableOpacity> : null}

          {this.state.content2 ?
            <TouchableOpacity onPress={() => { this.setState({ to: 'Meters' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}> Meters</Text>

              </InputCard>
              <EmptyCard>
                <Text style={globalStyles.titleText}></Text>

              </EmptyCard>
            </TouchableOpacity> : null}




          {this.state.content3 ?
            <TouchableOpacity onPress={() => { this.setState({ outPut: 'Watt' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}>Watt</Text>

              </InputCard>
            </TouchableOpacity> : null}

          {this.state.content3 ?
            <TouchableOpacity onPress={() => { this.setState({ outPut: 'Gigawatts' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}>Gigawatts</Text>

              </InputCard>
            </TouchableOpacity> : null}

          {this.state.content3 ?
            <TouchableOpacity onPress={() => { this.setState({ outPut: 'Solar Luminosity' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}>Solar Luminosity</Text>

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

