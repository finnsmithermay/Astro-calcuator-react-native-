


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

export default class convertMass extends Component {

  constructor(props) {

    super();
    this.state = {
      content1: false
    }
    this.state = {
      content2: false
    }
    this.state = {
      toEmpty: true
    }
    this.state = {
      fromEmpty: true
    }
    super(props);
    this.state = { f1: 0, result: '' };
    this.state = { f2: 0, result: '' };
    this.state = {
      from: 'Convert from',
      to: 'Convert to'
    };


  }
  componentHideAndShow1 = () => {
    this.setState(previousState => ({ content1: !previousState.content1 }))
    this.setState({ content2: false })

  }
  componentHideAndShow2 = () => {
    this.setState(previousState => ({ content2: !previousState.content2 }))
    this.setState({ content1: false })

  }



  render() {


    var f1 = this.state.f1;
    var f2 = this.state.f2;
    var result = 0;

    //Solar Mass -Tonne
    if ((this.state.from == 'Solar Mass') && (this.state.to == 'Tonne')) {
      result = (f1 * (1.989 * Math.pow(10, 27)));
    }
    if ((this.state.from == 'Tonne') && (this.state.to == 'Solar Mass')) {
      result = (f1 / (1.989 * Math.pow(10, 27)));
    }
    //Solar Mass -kilogram
    if ((this.state.from == 'Solar Mass') && (this.state.to == 'kilogram')) {
      result = (f1 * (1.989 * Math.pow(10, 30)));
    }
    if ((this.state.from == 'kilogram') && (this.state.to == 'Solar Mass')) {
      result = (f1 / (1.989 * Math.pow(10, 30)));
    }
    //Solar Mass-P
    if ((this.state.from == 'Solar Mass') && (this.state.to == 'Pound')) {
      result = (f1 * (4.385 * Math.pow(10, 30)));
    }
    if ((this.state.from == 'Pound') && (this.state.to == 'Solar Mass')) {
      result = (f1 / (4.385 * Math.pow(10, 30)));
    }
    //Solar Mass - Earth Mass
    if ((this.state.from == 'Solar Mass') && (this.state.to == 'Earth Mass')) {
      result = (f1 * 333030);
    }
    if ((this.state.from == 'Earth Mass') && (this.state.to == 'Solar Mass')) {
      result = (f1 / 333030);
    }

    //Earth Mass - Tonne
    if ((this.state.from == 'Earth Mass') && (this.state.to == 'Tonne')) {
      result = (f1 * (5.97218529989 * Math.pow(10, 21)));
    }
    if ((this.state.from == 'Tonne') && (this.state.to == 'Earth Mass')) {
      result = (f1 / (5.97218529989 * Math.pow(10, 21)));
    }
    //Earth Mass - kilogram
    if ((this.state.from == 'Earth Mass') && (this.state.to == 'kilogram')) {
      result = (f1 * (5.97218529989 * Math.pow(10, 24)));
    }
    if ((this.state.from == 'kilogram') && (this.state.to == 'Earth Mass')) {
      result = (f1 / (5.97218529989 * Math.pow(10, 24)));
    }

    //Earth Mass - P
    if ((this.state.from == 'Earth Mass') && (this.state.to == 'Pound')) {
      result = (f1 * (1.317 * Math.pow(10, 25)));
    }
    if ((this.state.from == 'Pound') && (this.state.to == 'Earth Mass')) {
      result = (f1 / (1.317 * Math.pow(10, 25)));
    }

    //P - T
    if ((this.state.from == 'Pound') && (this.state.to == 'Tonne')) {
      result = (f1 * v);
    }
    if ((this.state.from == 'Tonne') && (this.state.to == 'Pound')) {
      result = (f1 / 2205);
    }
    //P - kilogram
    if ((this.state.from == 'P') && (this.state.to == 'kilogram')) {
      result = (f1 * 2.205);
    }
    if ((this.state.from == 'kilogram') && (this.state.to == 'Pound')) {
      result = (f1 / 2.205);
    }

    //T - kilogram
    if ((this.state.from == 'kilogram') && (this.state.to == 'Tonne')) {
      result = (f1 / 1000);
    }
    if ((this.state.from == 'Tonne') && (this.state.to == 'kilogram')) {
      result = (f1 * 1000);
    }


    return (


      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();

      }} >


        <ScrollView style={globalStyles.pageContainer}>

          <View>
            {/* <Text style={globalStyles.pageTitle}> Convert Mass</Text> */}
          </View>


          <TextInput placeholder='Convert' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f1: (text) })} />

          <Text style={globalStyles.cardStuff}> {(result.toExponential())} </Text>

          {<Text style={globalStyles.cardStuff} > {(result)}  </Text>}


          <View style={globalStyles.buttonView}>

            <TouchableOpacity onPress={this.componentHideAndShow1}>
              <Text style={globalStyles.button}>{this.state.from}</Text>
            </TouchableOpacity >



            <TouchableOpacity onPress={this.componentHideAndShow2}>
              <Text style={globalStyles.button}>{this.state.to}</Text>
            </TouchableOpacity >


          </View>




          {this.state.content1 ?
            <TouchableOpacity onPress={() => { this.setState({ from: 'Solar Mass' }) }} >

              <InputCard>
                <Text style={globalStyles.titleText}> Solar Mass</Text>

              </InputCard>

            </TouchableOpacity> : null}


          {this.state.content1 ?
            <TouchableOpacity onPress={() => { this.setState({ from: 'Tonne' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}> Tonne</Text>

              </InputCard>
            </TouchableOpacity> : null}


          {this.state.content1 ?
            <TouchableOpacity onPress={() => { this.setState({ from: 'kilogram' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}> kilogram</Text>

              </InputCard>
            </TouchableOpacity> : null}

          {this.state.content1 ?
            <TouchableOpacity onPress={() => { this.setState({ from: 'Pound' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}> Pound</Text>

              </InputCard>
            </TouchableOpacity> : null}

          {this.state.content1 ?
            <TouchableOpacity onPress={() => { this.setState({ from: 'Earth Mass' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}>Earths Mass</Text>

              </InputCard>
              <EmptyCard>
                <Text style={globalStyles.titleText}></Text>

              </EmptyCard>
            </TouchableOpacity> : null}





          {this.state.content2 ? <TouchableOpacity onPress={() => { this.setState({ to: 'Solar Mass' }) }} >
            <InputCard>
              <Text style={globalStyles.titleText}> Solar Mass</Text>

            </InputCard>
          </TouchableOpacity> : null}


          {this.state.content2 ?
            <TouchableOpacity onPress={() => { this.setState({ to: 'Tonne' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}> Tonne</Text>

              </InputCard>
            </TouchableOpacity> : null}


          {this.state.content2 ?
            <TouchableOpacity onPress={() => { this.setState({ to: 'kilogram' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}> kilogram</Text>

              </InputCard>

            </TouchableOpacity> : null}


          {this.state.content2 ?
            <TouchableOpacity onPress={() => { this.setState({ to: 'Pound' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}>Pound</Text>

              </InputCard>

            </TouchableOpacity> : null}

          {this.state.content2 ?
            <TouchableOpacity onPress={() => { this.setState({ to: 'Earth Mass' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}>Earth Mass</Text>

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

