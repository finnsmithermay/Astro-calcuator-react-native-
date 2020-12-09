

// import React, { Component } from 'react';
// import { Platform, StyleSheet, View, Text, Button } from 'react-native';


// export default class Contact extends Component {


import React from 'react'
import { StyleSheet, Button, View, TextInput, Text } from 'react-native'
import email from 'react-native-email'
import { globalStyles } from '../styles/global';
import { ScrollView } from 'react-native-gesture-handler';


export default class Contact extends React.Component {
    constructor(props) {

        super();

        super(props);

        this.state = {
            from: '',
            subject: '',
            content: '',
        };


    }
    render() {
        return (


            <ScrollView style={globalStyles.pageContainer}>




                <View style={styles.container}>
                    <Text style={globalStyles.contactBox}>If you wish to contact us regarding 
                    bugs or a feature you would like to see in the next update please use the 
                    form below or contact us directly at {"\n"}{"\n"}orionapplicationscontact@gmail.com.</Text>
                    <TextInput placeholder='From' style={globalStyles.contactCards} onChangeText={(text) => this.setState({ from: (text) })} />
                    <TextInput placeholder='Subject' style={globalStyles.contactCards} onChangeText={(text) => this.setState({ subject: (text) })} />
                    <TextInput placeholder='Meassage' multiline={true} style={globalStyles.largeCardStuff} onChangeText={(text) => this.setState({ content: (text) })} />


                    <View style={globalStyles.sendButton}>
                        <Button  title="Submit"  onPress={this.handleEmail} style={styles.buttonStyle}/>
                    </View>
                </View>
            </ScrollView>
        )
    }

    handleEmail = () => {
        const to = ['OrionApplicationsContact@gmail.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: [to], // string or array of email addresses
            bcc: this.state.from, // string or array of email addresses
            subject: this.state.subject,
            body: this.state.content
        }).catch(console.error)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },

    buttonStyle: {
        //color: 'white',
       
    }
})