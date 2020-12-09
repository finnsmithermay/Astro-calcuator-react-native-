

import React, { Component, useState, useEffect} from 'react';
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


export default class escapeVelocity extends Component {

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
      from: 'Mass In',
      to: 'Radius In',
      outPut: 'Output'
    };


  }
  componentHideAndShow1 = () => {
    this.setState(previousState => ({ content1: !previousState.content1 }))
    this.setState({content2: false})
    this.setState({content3: false})

  }
  componentHideAndShow2 = () => {
    this.setState(previousState => ({ content2: !previousState.content2 }))
    this.setState({content1: false})
    this.setState({content3: false})
  }


  componentHideAndShow3 = () => {
    this.setState(previousState => ({ content3: !previousState.content3 }))
    this.setState({content2: false})
    this.setState({content1: false})
  }

  render() {


    var f1 = this.state.f1;
    var f2 = this.state.f2;
    var f3 = this.state.f3;

    var result = 0;
    
    var G = 6.678 * Math.pow(10, -11)
    var sMass = (1.98 * Math.pow(10, 30)); 
    var eMass = (5.9722 * Math.pow(10, 24)); 

    var eRaius = (6.378 * Math.pow(10, 6)); 
    var sRaius = (6.957 * Math.pow(10, 8)); 



    //mass change
    if(this.state.from == 'Solar Mass'){
      f1 = f1 * sMass;
    }
    if(this.state.from == 'Earth Mass'){
      f1 = f1 * eMass;

    }
    if(this.state.from == 'KGs'){
        //do nothing 
        f1 = f1;
    }
    if(this.state.from == 'Pounds'){
      f1 = f1 / 2.205;

    }
    //radius change
    if(this.state.to == 'Earth Radii'){
      f2 = f2 * eRaius;
    }
    if(this.state.to == 'sun Radii'){
      f2 = f2 * sRaius;
    }
    if(this.state.to == 'Kilometer'){
      f2 = f2 * 1000;
    }
    if(this.state.to == 'Mile'){
      f2 = f2 * 1609.34;
    }
    if(this.state.to == 'Meters'){
      f2 = f2;
    }
    
    //output change

    var A = (2 * G * f1) / f2;
    var answer = Math.sqrt(A);

    if(this.state.outPut == 'Meters'){
      f3 = answer;
    }
    if(this.state.outPut == 'KM/S'){
      answer = answer / 1000;
    }
    if(this.state.outPut == 'Mi/s'){
      answer = answer / 1609;
    }
    if(this.state.outPut == 'mph'){
      answer = answer * 2.23694;
    }
    if(this.state.outPut == 'KM/h'){
      answer = answer * 3.6;
    }
    if(this.state.outPut == 'Light speed (c)'){
      answer = answer / 299792458;
    }

    //ifs converting all possible inputs to KG and Meters 



    return (


      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();

      }} >


        <ScrollView style={globalStyles.pageContainer}>

        <View>
              {/* <Text style={globalStyles.pageTitle}>Escape Velocity</Text> */}
            </View>


        <TextInput placeholder='Mass' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f1: (text) })} />
        <TextInput placeholder='Radius' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f2: (text) })} />

        {<Text style={globalStyles.cardStuff}> {(answer)} </Text>}


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




            {this.state.content1 ?
                    <TouchableOpacity onPress={() => {this.setState({from: 'Solar Mass'})} } >

                        <InputCard>
                        <Text style={globalStyles.titleText}> Solar Mass</Text>

                        </InputCard>

                    </TouchableOpacity> : null}
                   
                    
                   
                    {this.state.content1 ?
                    <TouchableOpacity onPress={() => {this.setState({from: 'Earth Mass'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}>Earths Mass</Text>

                        </InputCard>
                        
                    </TouchableOpacity> : null}


                    {this.state.content1 ?
                    <TouchableOpacity onPress={() => {this.setState({from: 'KGs'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}>KGs</Text>

                        </InputCard>
                        
                    </TouchableOpacity> : null}

                    {this.state.content1 ?
                    <TouchableOpacity onPress={() => {this.setState({from: 'Pounds'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}>Pounds</Text>

                        </InputCard>
                        <EmptyCard>
                  <Text style={globalStyles.titleText}></Text>

                </EmptyCard>
                    </TouchableOpacity> : null}

            {/* </View> */}


                   {this.state.content2 ? <TouchableOpacity onPress={() => {this.setState({to: 'Earth Radii'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}> Earth Radii</Text>

                        </InputCard>
                    </TouchableOpacity> : null}
                    
                    
                    {this.state.content2 ?
                    <TouchableOpacity onPress={() => {this.setState({to: 'Sun Radii'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}> Sun Radii</Text>

                        </InputCard>
                    </TouchableOpacity> : null}
                    
                   
                   
                    {this.state.content2 ?
                    <TouchableOpacity onPress={() => {this.setState({to: 'Kilometer'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}> Kilometer</Text>

                        </InputCard>
                        
                    </TouchableOpacity> : null}

                    
                    
                    {this.state.content2 ?
                    <TouchableOpacity onPress={() => {this.setState({to: 'Mile'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}> Miles</Text>

                        </InputCard>
                        
                    </TouchableOpacity> : null}

                    {this.state.content2 ?
                    <TouchableOpacity onPress={() => {this.setState({to: 'Meters'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}> Meters</Text>

                        </InputCard>
                        <EmptyCard>
                  <Text style={globalStyles.titleText}></Text>

                </EmptyCard>
                    </TouchableOpacity> : null}



                    {this.state.content3 ?
                    <TouchableOpacity onPress={() => {this.setState({outPut: 'KM/S'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}> KM/S</Text>

                        </InputCard>
                        
                    </TouchableOpacity> : null}

                    {this.state.content3 ?
                    <TouchableOpacity onPress={() => {this.setState({outPut: 'M/S'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}> M/s</Text>

                        </InputCard>
                        
                    </TouchableOpacity> : null}


                    {this.state.content3 ?
                    <TouchableOpacity onPress={() => {this.setState({outPut: 'KM/h'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}> KM/h</Text>

                        </InputCard>
                        
                    </TouchableOpacity> : null}

                    {this.state.content3 ?
                    <TouchableOpacity onPress={() => {this.setState({outPut: 'mph'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}> mph</Text>

                        </InputCard>
                        
                    </TouchableOpacity> : null}

                    {this.state.content3 ?
                    <TouchableOpacity onPress={() => {this.setState({outPut: 'Mi/s'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}>Mi/s</Text>

                        </InputCard>
                        
                    </TouchableOpacity> : null}

                    {this.state.content3 ?
                    <TouchableOpacity onPress={() => {this.setState({outPut: 'Light speed (c)'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}>Light speed (c)</Text>

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

