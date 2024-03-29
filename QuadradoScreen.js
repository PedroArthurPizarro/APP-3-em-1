import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function App() {
  const [side, setSide] = useState('');
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [squareArea, setSquareArea] = useState(null);
  const [triangleArea, setTriangleArea] = useState(null);

  const calculateSquareArea = () => {
    const area = parseFloat(side) * parseFloat(side);
    setSquareArea(area);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área</Text>
      <TextInput
        style={styles.input}
        placeholder="Lado do quadrado"
        onChangeText={(text) => setSide(text)}
        keyboardType="numeric"
        value={side}
      />
      <Button title="Calcular Área do Quadrado" onPress={calculateSquareArea} color="green" />
      {squareArea !== null && <Text style={styles.result}>Área do Quadrado: {squareArea}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 30,
  },

  Button: {
    color: '#fff',
    backgroundColor: 'green',
  },

  result: {
    marginTop: 20,
    fontSize: 18,
  },
});
