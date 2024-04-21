// screens/BMICalculatorScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const BMICalculatorScreen = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBMICategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
      determineBMICategory(bmiValue);
    }
  };

  const determineBMICategory = (bmiValue) => {
    if (bmiValue < 18.5) {
      setBMICategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBMICategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBMICategory('Overweight');
    } else {
      setBMICategory('Obesity');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Kalculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Berat Badan (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Tinggi Badan (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />
      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Hitung BMI</Text>
      </TouchableOpacity>
      {bmi && <Text style={styles.result}>BMI: {bmi}</Text>}
      {bmiCategory && <Text style={styles.category}>Kategori: {bmiCategory}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#EAD8C0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 20,
    marginTop: 20,
  },
  category: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default BMICalculatorScreen;
