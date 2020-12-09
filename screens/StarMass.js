
import React, { Component, } from 'react';
import {
  AppRegistry, StyleSheet, Platform, TouchableOpacity, Text, TextInput, View, Button, Form, Container,
  Header, Content, CardItem, Body, Item, Input, Picker,
} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SmallCard from '../shared/smallCard';
import EmptyCard from '../shared/emptyCard';
import InputCard from '../shared/inputCard';



export default class StarMass extends Component {

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
      V: 'Velocity units',
      R: 'Radius units',
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



    var V = f1;
    var G = 6.678 * Math.pow(10, -11)
    var R = f2;

    //converts
    //V
    if (this.state.V == 'KM/S') {
      V = V * 1000;
    }
    if (this.state.V == 'MI/H') {
      V = V * 1600.34;
    }
    if (this.state.V == 'M/S') {
      V = V;
    }
    //R
    if (this.state.R == 'Miles') {
      R = R * 1609.34;
    }
    if (this.state.R == 'Kilometers') {
      R = R * 1000;
    }
    if (this.state.R == 'AU') {
      R = R * (1.496 * Math.pow(10, 11));
    }
    if (this.state.R == 'Meters') {
      R = R;
    }

    var ans = V * R / G;




    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();

      }} >
        <ScrollView style={globalStyles.pageContainer}>

          <View>

            <View>
              {/* <Text style={globalStyles.pageTitle}> Orbital Speed</Text> */}
            </View>

            <TextInput placeholder='Enter Speed Of Orbit:' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f1: (text) })} />
            <TextInput placeholder='Enter Seperation Distance:' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f2: (text) })} />



            {<Text style={globalStyles.cardStuff} >  {((V * V) * R / G)} KG{this.state.Output}</Text>}



            <View style={globalStyles.buttonView}>
              <TouchableOpacity onPress={this.componentHideAndShow1}>
                <Text style={globalStyles.button}>{this.state.V}</Text>
              </TouchableOpacity >



              <TouchableOpacity onPress={this.componentHideAndShow2}>
                <Text style={globalStyles.button}>{this.state.R}</Text>
              </TouchableOpacity >





            </View>

            {this.state.content1 ?
              <TouchableOpacity onPress={() => { this.setState({ V: 'M/S' }) }} >
                <InputCard>
                  <Text style={globalStyles.titleText}>M/S</Text>

                </InputCard>

              </TouchableOpacity> : null}

            {this.state.content1 ?
              <TouchableOpacity onPress={() => { this.setState({ V: 'KM/S' }) }} >
                <InputCard>
                  <Text style={globalStyles.titleText}>KM/S</Text>

                </InputCard>

              </TouchableOpacity> : null}

            {this.state.content1 ?
              <TouchableOpacity onPress={() => { this.setState({ V: 'MI/S' }) }} >
                <InputCard>
                  <Text style={globalStyles.titleText}>MI/S</Text>

                </InputCard>

                <EmptyCard>
                  <Text style={globalStyles.titleText}></Text>

                </EmptyCard>
              </TouchableOpacity> : null}



            {this.state.content2 ? <TouchableOpacity onPress={() => { this.setState({ R: 'Meters' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}>Meters</Text>

              </InputCard>
            </TouchableOpacity> : null}

            {this.state.content2 ? <TouchableOpacity onPress={() => { this.setState({ R: 'AU' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}>AU</Text>

              </InputCard>
            </TouchableOpacity> : null}

            {this.state.content2 ? <TouchableOpacity onPress={() => { this.setState({ R: 'Kilometers' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}>Kilometers</Text>

              </InputCard>
            </TouchableOpacity> : null}
            {this.state.content2 ? <TouchableOpacity onPress={() => { this.setState({ R: 'Miles' }) }} >
              <InputCard>
                <Text style={globalStyles.titleText}>Miles</Text>

              </InputCard>

              <EmptyCard>
                <Text style={globalStyles.titleText}></Text>

              </EmptyCard>
            </TouchableOpacity> : null}






          </View>

        </ScrollView>

      </TouchableWithoutFeedback>

    );
  }
}

