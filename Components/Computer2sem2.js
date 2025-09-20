import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';

export default function Computer2sem2() {
     const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <ImageBackground
            source={require('../assets/images/muatm.jpg')}
            style={styles.background}
          >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          
          <View style={styles.schoolsContainer}>
            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('Algorithms')}
            >
          
              <Text style={styles.schoolText}>ICT202 - Data Structures & Algorithms</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('Intjava')}
            >
              <Text style={styles.schoolText}>ICT 262 - Intermediate Java Programming</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() =>  navigation.navigate('Database')}
            >
              <Text style={styles.schoolText}>ICT 271 Database</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('Networking')}
            >
              <Text style={styles.schoolText}>ICT 242 Networking & Communication</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('Operating')}
            >
              <Text style={styles.schoolText}>ICT 222 Operating Systems</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'grey'
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  schoolsContainer: {
    width: '100%',
    marginTop: 20,
  },
  schoolButton: {
    backgroundColor: '#00000070',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  schoolText: {
    fontSize: 20,
    color: '#fff',
  },
});