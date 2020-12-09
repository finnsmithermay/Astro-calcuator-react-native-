
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
import InputCard from '../shared/inputCard';
import EmptyCard from '../shared/emptyCard';

export default class paralax extends Component {

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
    this.state = {
        Input: 'Input units',
        Output: 'Output units',
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
  
    var arc = f1;
    if(this.state.Input == 'Degrees'){
    arc = arc * 3600;
    }

    if(this.state.Input == 'Arc Minutes'){
    arc = arc * 60;
    }
    if(this.state.Input == 'Arc Seconds'){
    arc = arc;
    }

    var ans = 1/arc;
    
    if(this.state.Output == 'Light Years'){
        ans = ans * 3.26156;
    }

    if(this.state.Output == 'AU'){
        ans = ans * 206265;
    }

    if(this.state.Output == 'Parsecs'){
        ans = ans;
    }

    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();

      }} >
        <ScrollView style={globalStyles.pageContainer}>

          <View>

            <View>
              {/* <Text style={globalStyles.pageTitle}> Orbital Speed</Text> */}
            </View>

            <TextInput placeholder='Enter angle in Arc seconds:' style={globalStyles.cardStuff} keyboardType='numeric' onChangeText={(text) => this.setState({ f1: (text) })} />



    {<Text style={globalStyles.cardStuff} >  {(ans).toFixed(5)} {this.state.Output}</Text>}



                    <View style={globalStyles.buttonView}>
                    <TouchableOpacity onPress={this.componentHideAndShow1}>
                    <Text style={globalStyles.button}>{this.state.Input}</Text>
                    </TouchableOpacity > 



                    <TouchableOpacity onPress={this.componentHideAndShow2}>
                    <Text style={globalStyles.button}>{this.state.Output}</Text> 
                    </TouchableOpacity >


            

                   
            </View>

                    {this.state.content1 ?
                    <TouchableOpacity onPress={() => {this.setState({Input: 'Degrees'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}>Degrees</Text>

                        </InputCard>
                        
                    </TouchableOpacity> : null}

                    {this.state.content1 ?
                    <TouchableOpacity onPress={() => {this.setState({Input: 'Arc Minutes'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}>Arc Minutes</Text>

                        </InputCard>
                        
                    </TouchableOpacity> : null}

                    {this.state.content1 ?
                    <TouchableOpacity onPress={() => {this.setState({Input: 'Arc Seconds'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}>Arc Seconds</Text>

                        </InputCard>
                        
                    </TouchableOpacity> : null}



                       {this.state.content2 ? <TouchableOpacity onPress={() => {this.setState({Output: 'Parsecs'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}>Parsecs</Text>

                        </InputCard>
                    </TouchableOpacity> : null}

                    {this.state.content2 ? <TouchableOpacity onPress={() => {this.setState({Output: 'AU'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}>AU</Text>

                        </InputCard>
                    </TouchableOpacity> : null}

                    {this.state.content2 ? <TouchableOpacity onPress={() => {this.setState({Output: 'Light Years'})}} >
                        <InputCard>
                        <Text style={globalStyles.titleText}>Light Years</Text>

                        </InputCard>
                    </TouchableOpacity> : null}



          </View>

        </ScrollView>

      </TouchableWithoutFeedback>

    );
  }
}

