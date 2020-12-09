import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header'
import React from 'react';

const screens = {
     About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation}/>,
        }
        }
    },
 
} 
    


const aboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
       // headerTintColor: '#7B8AFA',
        

    }
}); 

export default aboutStack;