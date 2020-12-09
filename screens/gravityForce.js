


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


export default class gravityForce extends Component {

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
    this.state = { f3: 0, result: '' };


    this.state = {
      from: 'Mass 1',
      from2: 'Mass 2',

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
    var f4 = this.state.f4;

    var result = 0;
    
    var G = 6.678 * Math.pow(10, -11)
    var sMass = (1.98 * Math.pow(10, 30)); 
    var eMass = (5.9722 * Math.pow(10, 24)); 

    var eRaius = (6.378 * Math.pow(10, 6)); 
    var sRaius = (6.957 * Math.pow(10, 8)); 
    


    //mass 1 change
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
    //mass 2 change

    if(this.state.from == 'Solar Mass'){
        f4 = f4 * sMass;
      }
      
      if(this.state.from == 'Earth Mass'){
        f4 = f4 * eMass;
      }
  
      if(this.state.from == 'KGs'){
          //do nothing 
          f4 = f4;
      }
      if(this.state.from == 'Pounds'){
        f4 = f4 / 2.205;
  
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

    var A = ( G * (f1 * f4)) / (f2*f2);
    var answer = A;



    if(this.state.outPut == 'newtons'){
      f3 = answer;
    }
    if(this.state.outPut == 'KG'){
      answer = answer / 9.80665;
    }
   

    return (


      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();

      }} >


        <ScrollView style={globalStyles.pageContainer}>

        <View>
              {/* <Text style={globalStyles.pageTitle}>Escape Velocity</Text> */}
            </View>


        <TextInput placeholder='Mass 1' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f1: (text) })} />
        <TextInput placeholder='Mass 2' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f4: (text) })} />

        <TextInput placeholder='Radius' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f2: (text) })} />

        {<Text style={globalStyles.cardStuff}> {(answer)} </Text>}


        <View style={globalStyles.buttonView}>
        <TouchableOpacity onPress={this.componentHideAndShow1}>
        <Text style={globalStyles.buttonSmall4}>{this.state.from}</Text>
        </TouchableOpacity > 

        <TouchableOpacity onPress={this.componentHideAndShow1}>
        <Text style={globalStyles.buttonSmall4}>{this.state.from2}</Text>
        </TouchableOpacity > 



        <TouchableOpacity onPress={this.componentHideAndShow2}>
        <Text style={globalStyles.buttonSmall4}>{this.state.to}</Text> 
        </TouchableOpacity >

        <TouchableOpacity onPress={this.componentHideAndShow3}>
        <Text style={globalStyles.buttonSmall4}>{this.state.outPut}</Text> 
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
                    <TouchableOpacity onPress={() => {this.setState({from: 'KG'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}>KG</Text>

                        </InputCard>
                        <EmptyCard>
                  <Text style={globalStyles.titleText}></Text>

                </EmptyCard>
                    </TouchableOpacity> : null}

            {/* </View> */}
                    
                   
                   
                    {this.state.content2 ?
                    <TouchableOpacity onPress={() => {this.setState({to: 'Kilometer'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}> Kilometer</Text>

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
                    <TouchableOpacity onPress={() => {this.setState({outPut: 'newtons'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}>Newtons</Text>

                        </InputCard>
                        
                    </TouchableOpacity> : null}


                
                

                    {this.state.content3 ?
                    <TouchableOpacity onPress={() => {this.setState({outPut: 'KG'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}>KG of force</Text>

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

