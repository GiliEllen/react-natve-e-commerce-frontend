import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
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
      {error && <Text style={styles.error}>{error}</Text>}
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Register;
