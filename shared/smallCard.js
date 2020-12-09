import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function smallCard (props){
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
    borderRadius: 5,
    elevation: 3,
    //backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    //shadowColor: '#333',
    //shadowOpacity: 0.3,
    //shadowRadius: 2,
    marginHorizontal: 15,
    marginVertical: 8,
    paddingBottom: 10,

    backgroundColor:'white',
    //backgroundColor:'#FE5054',
    //backgroundColor:'white',
    justifyContent: 'center',
    borderWidth:2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor:'#FE5A50',

    

    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 15,
        color:'black', 
    
           

         
    }
});