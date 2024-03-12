import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas de destino
import IdadeScreen from './IdadeScreen';
import QuadradoScreen from './QuadradoScreen';
import TrianguloScreen from './TrianguloScreen';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Atividade</Text>
                </View>
                <View style={styles.navigation}>
                    <Button
                        title="Idade"
                        onPress={() => navigation.navigate('Idade')} />
                    <Button
                        title="Área Quadrado"
                        onPress={() => navigation.navigate('Quadrado')} />
                    <Button
                        title="Área Triângulo"
                        onPress={() => navigation.navigate('Triangulo')} />
                </View>
            </View>
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
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
