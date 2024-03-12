import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Função de verificação de faixa etária
const verificarFaixaEtaria = (idade) => {
  const idadeInt = parseInt(idade);
  if (idadeInt >= 0 && idadeInt <= 12) {
    return 'Criança';
  } else if (idadeInt >= 13 && idadeInt <= 17) {
    return 'Adolescente';
  } else if (idadeInt >= 18 && idadeInt <= 20) {
    return 'Jovem';
  } else if (idadeInt >= 21 && idadeInt <= 60) {
    return 'Adulto';
  } else if (idadeInt > 60) {
    return 'Idoso';
  } else {
    return 'Idade inválida';
  }
};

export default function App() {
  const [idade, setIdade] = useState('');
  const [faixaEtaria, setFaixaEtaria] = useState('');

  const handleVerificarFaixaEtaria = () => {
    const faixa = verificarFaixaEtaria(idade);
    setFaixaEtaria(faixa);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificador de Faixa Etária</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        onChangeText={(text) => setIdade(text)}
        value={idade}
        keyboardType="numeric"
      />
      <Button title="Verificar" onPress={handleVerificarFaixaEtaria} />
      <Text style={styles.faixaEtaria}>{faixaEtaria}</Text>
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
    marginBottom: 20,
  },
  faixaEtaria: {
    marginTop: 20,
    fontSize: 18,
  },
});
