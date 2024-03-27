import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { authenticateUser } from './api'; // ייבוא הפונקציה לאימות משתמש מה-API שיצרנו

const Login = () => {
  // הגדרת משתנים עבור פרטי ההתחברות
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    // שליחת בקשת אימות משתמש לשרת
    try {
      const response = await authenticateUser(email, password);
      console.log(response); // אם האימות הצליח, תמיד נקבל תגובה מהשרת
      // כאן אפשר להוסיף פעולות נוספות, כמו הפניה לדף ראשי, הצגת הודעת הצלחה וכדומה
    } catch (error) {
      console.error(error); // אם יש שגיאה באימות המשתמש, נדפיס אותה
      setError('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
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
      {error && <Text style={styles.error}>{error}</Text>}
      <Button title="Login" onPress={handleLogin} />
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

export default Login;
