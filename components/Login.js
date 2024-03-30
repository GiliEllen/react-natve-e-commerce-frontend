import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { authUser } from '../api/usersApi';
import { useNavigation } from '@react-navigation/native'; // יבוא של פונקציית ניווט


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigation = useNavigation(); // השמת הפונקציה למשתנה

    const handleLogin = async () => {
    try {
      const response = await authUser(email, password);
      console.log(response);
      navigation.navigate('Home'); // ניווט לעמוד הבית במידה וההתחברות הצליחה
    } catch (error) {
      console.error(error);
      setError('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
  <Text style={styles.registerLink}>Register here →</Text>
</TouchableOpacity>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 40,
    paddingTop: 50
  },
  titleContainer: {
    alignSelf: 'flex-start',
    marginBottom: 40,
  },
  title: {
    fontSize: 27,
    color: 'black',
    fontWeight: 'bold',
    
  },
  input: {
    backgroundColor: 'white',
    width: 343,
    height: 64,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Changed to center
    marginTop: 10, // Adjusted margin top
  },
  button: {
    width: 343,
    height: 48,
    backgroundColor: '#db3022',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'right',
    color: '#222222',
  },
  registerLink: {
    color: '#db3022',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Login;
