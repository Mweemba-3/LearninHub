import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { auth } from './firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ error, setError] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    try{
      await
      createUserWithEmailAndPassword(auth,
        email, password);
        setError('');
        navigation.navigate('Login');
    } catch ( err) {
      setError(err.message);
      console.error(" SignUp Error:", err);
    }
  };

  return (
    <View style={styles.container}>
      <Image
              source={require('../assets/images/icon.jpg')} // Replace with your app logo path
              style={styles.logo}
            />
      
      <Text style={styles.appName}>Learning-Hub</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign-Up</Text>
      </TouchableOpacity>

      {/* Back to Sign In */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already a member? Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f5f7',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 40,
    marginBottom: 20,
    borderRadius: 60,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0077b5',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#0077b5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 15,
    color: '#0077b5',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});