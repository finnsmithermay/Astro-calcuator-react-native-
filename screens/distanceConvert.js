


import React, { Component, useState, useEffect } from 'react';
import {
  AppRegistry, StyleSheet, Platform, TouchableOpacity, Text, TextInput, View, Button, Form, Container,
  Header, Content, CardItem, Body, Item, Input, Picker,
} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import InputCard from '../shared/inputCard';
import EmptyCard from '../shared/emptyCard';


export default class distanceConvert extends Component {

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

    //var Light Year to Parsec
    //var Parsec to Light Year
    //var Light Year to au 
    //var au to Light Year 

    // if((this.state.from == 'Light Year')&& (this.state.to == 'Light Year')){
    //   result = f1;
    // }
    // if((this.state.from == 'AY')&& (this.state.to == 'AU')){
    //   result = f1;
    // }
    // if((this.state.from == 'Parsec')&& (this.state.to == 'Parsec')){
    //   result = f1;

    // }
    // if((this.state.from == 'Kilometer')&& (this.state.to == 'Kilometer')){
    //   result = f1;

    // }
    // if((this.state.from == 'MI')&& (this.state.to == 'MI')){
    //   result = f1;

    // }
    //Light Year - AU   
    if ((this.state.from == 'Light Year') && (this.state.to == 'Astronomical unit')) {
      result = f1 * 63241;
    }
    if ((this.state.from == 'Astronomical unit') && (this.state.to == 'Light Year')) {
      result = f1 / 63241;
    }
    //Light Year-Parsec
    if ((this.state.from == 'Light Year') && (this.state.to == 'Parsec')) {
      result = f1 / 3.262;
    }
    if ((this.state.from == 'Parsec') && (this.state.to == 'Light Year')) {
      result = f1 * 3.262;
    }
    //Astronomical unit - Parsec
    if ((this.state.from == 'Astronomical unit') && (this.state.to == 'Parsec')) {
      result = f1 / 206265;
    }
    if ((this.state.from == 'Parsec') && (this.state.to == 'Astronomical unit')) {
      result = f1 * 206265;
    }

    //MI - Kilometer
    if ((this.state.from == 'Kilometer') && (this.state.to == 'Mile')) {
      result = f1 / 1.609;
    }
    if ((this.state.from == 'Mile') && (this.state.to == 'Kilometer')) {
      result = f1 * 1.609;
    }
    //Mi - Parsec
    if ((this.state.from == 'Parsec') && (this.state.to == 'Mile')) {
      result = f1 * ((1.917 * Math.pow(10, 13)));
    }
    if ((this.state.from == 'Mile') && (this.state.to == 'Parsec')) {
      result = f1 / ((1.917 * Math.pow(10, 13)));
    }

    //mi - Light Year 
    if ((this.state.from == 'Light Year') && (this.state.to == 'Mile')) {
      result = f1 * ((5.879 * Math.pow(10, 12)));
    }
    if ((this.state.from == 'Mile') && (this.state.to == 'Light Year')) {
      result = f1 / ((5.879 * Math.pow(10, 12)));
    }


    //mi - Astronomical unit

    if ((this.state.from == 'Astronomical unit') && (this.state.to == 'Mile')) {
      result = f1 * ((9.296 * Math.pow(10, 7)));
    }
    if ((this.state.from == 'Mile') && (this.state.to == 'Astronomical unit')) {
      result = f1 / ((9.296 * Math.pow(10, 7)));
    }

    //Kilometer - Parsec

    if ((this.state.from == 'Kilometer') && (this.state.to == 'Parsec')) {
      result = f1 / ((3.086 * Math.pow(10, 13)));
    }
    if ((this.state.from == 'Parsec') && (this.state.to == 'Kilometer')) {
      result = f1 * ((3.086 * Math.pow(10, 13)));
    }

    //Kilometer - Light Year 

    if ((this.state.from == 'Kilometer') && (this.state.to == 'Light Year')) {
      result = f1 / ((9.461 * Math.pow(10, 12)));
    }
    if ((this.state.from == 'Light Year') && (this.state.to == 'Kilometer')) {
      result = f1 * ((9.461 * Math.pow(10, 12)));
    }

    //Kilometer - Astronomical unit

    if ((this.state.from == 'Kilometer') && (this.state.to == 'Astronomical unit')) {
      result = f1 / ((1.496 * Math.pow(10, 8)));
    }
    if ((this.state.from == 'Astronomical unit') && (this.state.to == 'Kilometer')) {
      result = f1 * ((1.496 * Math.pow(10, 8)));
    }

    return (


      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();

      }} >


        <ScrollView style={globalStyles.pageContainer}>




          <TextInput placeholder='Convert' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f1: (text) })} />

          <Text style={globalStyles.cardStuff}> {(result.toExponential())} </Text>

          {<Text style={globalStyles.cardStuff}> {(result)} </Text>}


          <View style={globalStyles.buttonView}>
            <TouchableOpacity onPress={this.componentHideAndShow1}>
              <Text style={globalStyles.button}>{this.state.from}</Text>
            </TouchableOpacity >



            <TouchableOpacity onPress={this.componentHideAndShow2}>
              <Text style={globalStyles.button}>{this.state.to}</Text>
            </TouchableOpacity >
          </View>




          {this.state.content1 ?
            <TouchableOpacity onPress={() => { this.setState({ from: 'Light Year' }) }} >

              <InputCard>
                <Text style={globalStyles.titleText}> Light Years</Text>

              </InputCard>

            </TouchableOpacity> : null}


          {this.state.content1 ?
            <TouchableOpacity onPress={() => { this.setState({ from: 'Astronomical unit' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}> Astronomical unit</Text>

              </InputCard>
            </TouchableOpacity> : null}


          {this.state.content1 ?
            <TouchableOpacity onPress={() => { this.setState({ from: 'Parsec' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}> Parcecs</Text>

              </InputCard>
            </TouchableOpacity> : null}



          {this.state.content1 ?
            <TouchableOpacity onPress={() => { this.setState({ from: 'Kilometer' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}> Kilometer</Text>

              </InputCard>

            </TouchableOpacity> : null}



          {this.state.content1 ?
            <TouchableOpacity onPress={() => { this.setState({ from: 'Mile' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}> Miles</Text>

              </InputCard>
              <EmptyCard>
                  <Text style={globalStyles.titleText}></Text>

                </EmptyCard>
            </TouchableOpacity> : null}

          {/* </View> */}


          {this.state.content2 ? <TouchableOpacity onPress={() => { this.setState({ to: 'Light Year' }) }} >
            <InputCard>
              <Text style={globalStyles.titleText}> Light Years</Text>

            </InputCard>
          </TouchableOpacity> : null}


          {this.state.content2 ?
            <TouchableOpacity onPress={() => { this.setState({ to: 'Astronomical unit' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}> Astronomical unit</Text>

              </InputCard>
            </TouchableOpacity> : null}


          {this.state.content2 ?
            <TouchableOpacity onPress={() => { this.setState({ to: 'Parsec' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}> Parcecs</Text>

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

              <EmptyCard>
                  <Text style={globalStyles.titleText}></Text>

                </EmptyCard>
            </TouchableOpacity> : null}

        </ScrollView>

      </TouchableWithoutFeedback>

    );
  }
}

