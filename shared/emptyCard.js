import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function emptyCard (props){
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
    flex: 1,
    card: {

    backgroundColor:'white',
    color:'white',
    //backgroundColor:'#FE5054',
    //backgroundColor:'white',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',


    

    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 15,
        
    
           

         
    }
});