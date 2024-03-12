import * as React from 'react';

import { Button, View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HomeScreen({ navigation }) {

    return (

        <View style={{ flex: 1 }}>

            <View style={stylestop.container}>

                <View>

                    <Text style={stylestop.title}>Atividade</Text>

                </View>

                <View style={stylestop.navigation}>

                    <Button

                        title="Idade"

                        onPress={() => navigation.navigate('IdadeScreen')} />

                    <Button

                        title="Área Quadrado"

                        onPress={() => navigation.navigate('QuadradoScreen')} />

                    <Button

                        title="Área Triangulo"

                        onPress={() => navigation.navigate('TrianguloScreen')} />

                </View>

            </View>

        </View>

    );

}

const Stack = createNativeStackNavigator();

function App() {

    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Idade" component={IdadeScreen} />
                <Stack.Screen name="Quadrado" component={QuadradoScreen} />
                <Stack.Screen name="Triangulo" component={TrianguloScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );

}



const stylestop = StyleSheet.create({

    container: {

        backgroundColor: 'black',

        padding: 20,

        flexDirection: 'column', // Alterado de 'row' para 'column'

        justifyContent: 'flex-start', // Alterado de 'space-between' para 'flex-start'

        position: 'absolute',

        alignItems: 'center',

        top: 10,

        left: 0,

        right: 0,

    },



    title: {

        color: 'white',

        fontSize: 18,

        fontWeight: 'bold',

        marginBottom: 5,

    },



    navigation: {

        flexDirection: 'row',

        marginTop: 10,

        fontSize: 100,

        gap: 10,

    },

});


export default App;