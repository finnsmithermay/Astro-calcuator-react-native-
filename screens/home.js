import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacitys } from 'react-native';
import {globalStyles} from '../styles/global';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Card from '../shared/card';

export default function Home({navigation}){

    return(

    
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
            {/* <Button title ='go to review ' onPress={pressHandler}/> */}
            <View style={styles.backGround}> 


            <View>
                  {/* <Text style={globalStyles.title}> Astro Calculator </Text> */}
            </View>
            <ScrollView>
                    <TouchableOpacity onPress={() => {navigation.navigate('blackHole')}} >
                        <Card>
                        <Text style={globalStyles.titleText}> Black Hole Event Horizon</Text>

                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigation.navigate('luminosity')}} >
                        <Card>
                        <Text style={globalStyles.titleText}> Luminosity</Text>

                        </Card>
                    </TouchableOpacity>

                    {/* <TouchableOpacity onPress={() => {navigation.navigate('LYtoMeters')}} >
                        <Card>
                        <Text style={globalStyles.titleText}> Convert Light Years</Text>

                        </Card>
                    </TouchableOpacity> */}

                    {/* <TouchableOpacity onPress={() => {navigation.navigate('PtoMeters')}} >
                        <Card>
                        <Text style={globalStyles.titleText}> Convert Parcecs</Text>

                        </Card>
                    </TouchableOpacity> */}

                    <TouchableOpacity onPress={() => {navigation.navigate('DegreesToArc')}} >
                        <Card>
                        <Text style={globalStyles.titleText}> Convert Angles</Text>

                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigation.navigate('OrbitSpeed')}} >
                        <Card>
                        <Text style={globalStyles.titleText}> Orbit Speed</Text>

                        </Card>
                    </TouchableOpacity>
                    

                    {/* <TouchableOpacity onPress={() => {navigation.navigate('ConvertAU')}} >
                        <Card>
                        <Text style={globalStyles.titleText}> Convert AU</Text>

                        </Card>
                    </TouchableOpacity> */}

                

                    <TouchableOpacity onPress={() => {navigation.navigate('distanceConvert')}} >
                        <Card>
                        <Text style={globalStyles.titleText}> Convert Distance</Text>

                        </Card>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => {navigation.navigate('convertTemp')}} >
                        <Card>
                        <Text style={globalStyles.titleText}> Convert Tempurature</Text>

                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigation.navigate('convertMass')}} >
                        <Card>
                        <Text style={globalStyles.titleText}> Convert Mass</Text>

                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigation.navigate('blackholeTempurature')}} >
                        <Card>
                        <Text style={globalStyles.titleText}>black hole Tempurature</Text>

                        </Card>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => {navigation.navigate('escapeVeocity')}} >
                        <Card>
                        <Text style={globalStyles.titleText}>Escape Veocity</Text>

                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigation.navigate('paralax')}} >
                        <Card>
                        <Text style={globalStyles.titleText}>Paralax</Text>

                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigation.navigate('StarMass')}} >
                        <Card>
                        <Text style={globalStyles.titleText}>Mass of Stars</Text>

                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigation.navigate('WiensLaw')}} >
                        <Card>
                        <Text style={globalStyles.titleText}>Wiens Law Surface Temp</Text>

                        </Card>
                    </TouchableOpacity>
                    

                    <TouchableOpacity onPress={() => {navigation.navigate('acceleration')}} >
                        <Card>
                        <Text style={globalStyles.titleText}>Acceleration from gravity</Text>

                        </Card>
                    </TouchableOpacity>
                   
                    <TouchableOpacity onPress={() => {navigation.navigate('gravityForce')}} >
                        <Card>
                        <Text style={globalStyles.titleText}>Gravitational force</Text>

                        </Card>
                    </TouchableOpacity>
                   

                    </ScrollView>
        </View>
        </View>

    )
}

const styles = StyleSheet.create({
   


    
        

})