import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Header({ navigation }) {

    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={35} onPress={openMenu} style={styles.icon} />

            <View>
                <Text style={styles.headerText}>Astro Calculator    </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        //backgroundColor:'white',
     

    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 27,
        alignItems: 'center',
        //color: '',
        letterSpacing: 0,
       // color:'#FE5A50',
        color:'white',

    },
    icon: {
        left: -30,
        paddingBottom: 10,
        color:'white',

    }
});