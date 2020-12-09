import {createStackNavigator} from 'react-navigation-stack';
import Contact from '../screens/contact';
import Header from '../shared/header'
import React from 'react';

const screens = {
    Contact: {
        screen: Contact,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation}/>,
        }
        }
    },
 
} 
    


const contactStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
       // headerTintColor: '#7B8AFA',
        

    }
}); 

export default contactStack;