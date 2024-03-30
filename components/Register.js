import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createUser } from  '../api/usersApi'; 

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Password does not match');
      return;
    }

    try {
      const response = await createUser(email, password);
      console.log(response); 
     
    } catch (error) {
      console.error(error); 
      setError('Failed to create user');
    }
  };

  return (
    <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Register</Text>
    </View>
        <TextInput
        placeholder="Name"
        onChangeText={setName}
        value={name}
        style={styles.input}
      />
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
      <TextInput
        placeholder="Confirm Password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.registerLink}>Login →</Text>
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
      
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign up</Text>
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
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
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

export default Register;
