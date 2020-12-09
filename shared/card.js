import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function inputCardCard (props){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    //make a card touch and a card content
    card: {
    borderRadius: 13,
    elevation: 3,
    //backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    //shadowColor: '#333',
    //shadowOpacity: 0.3,
    //shadowRadius: 2,
    marginHorizontal: 8,
    marginVertical: 8,
    
    
    //backgroundColor:'#FE5054',
    //backgroundColor:'#FE5054',
    backgroundColor:'#FE5A50',

    //borderWidth:3,
   // borderColor:'black',
    

    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 15,
    
           

         
    }
});