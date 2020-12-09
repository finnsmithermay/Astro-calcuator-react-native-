

import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import email from 'react-native-email'
import { globalStyles } from '../styles/global';

export default class About extends Component {

  constructor() {
    super();
    this.state = {
      content: true
    }
  }



  render() {

    return (
      <ScrollView style={globalStyles.pageContainer}>




                <View style={globalStyles.contactBox}>
                    <Text style={styles.headerText}>NAME  HERE is an educational tool built for the purpose of making solving common astrophysics equations easier and less time consuming so you have more time to learn. </Text>
                   

                   
                </View>
            </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    color:'black',
  },

});