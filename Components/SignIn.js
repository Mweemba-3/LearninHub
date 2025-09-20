import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Linking
} from 'react-native';
import { auth } from './firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import {
  signInWithEmailAndPassword,
  setPersistence,browserLocalPersistence
} from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace('Home');
      }
    });
    return unsubscribe;
  }, []);

  const handleSignIn = async () => {
    try {
      await
      signInWithEmailAndPassword(auth, email,password);
      setError('');
      navigation.navigate('Home');
    } catch(err){
    //  console.error("Login Error:", err.massage);
      setError('Login Failed. Please check your Internet Connection & Your Credentials and try again.');
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert('Reset Password', 'Please enter your email first.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        'Reset Password',
        'A password reset email has been sent to your email address.'
      );
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* App Logo & Name */}
      <Image
        source={require('../assets/images/icon.jpg')} // Replace with your app logo path
        style={styles.logo}
      />
      <Text style={styles.appName}>Learning-Hub</Text>

      {/* Title */}
      <Text style={styles.title}>Welcome Back!</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Error Message */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>New to Learning-Hub? Sign Up</Text>
      </TouchableOpacity>

      {/* WhatsApp Contact */}
      <View style={styles.contactContainer}>
        <Text style={styles.contactText}>Unable to Login or SignUp Contact IT:</Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://wa.me/+260961439127'
            )
          }
        >
          <Image
            source={require('../assets/images/whatsapp-100.png')}
            style={styles.whatsappLogo}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f7',
    alignItems: 'center',
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
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#555',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#0077b5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotText: {
    color: '#0077b5',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
  linkText: {
    color: '#0077b5',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 10,
    marginBottom: 30,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  contactText: {
    fontSize: 16,
    color: '#555',
    marginRight: 10,
  },
  whatsappLogo: {
    width: 40,
    height: 40,
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
  },
});