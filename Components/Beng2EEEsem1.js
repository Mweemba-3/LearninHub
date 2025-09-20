import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';

export default function Beng2EEEsem1() {
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
              onPress={() => navigation.navigate('EEEDrawing')}
            >
          
              <Text style={styles.schoolText}>Engineering Drawing</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('EEEmaterials')}
            >
              <Text style={styles.schoolText}>Engineering Materials</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('EEEmathermatics')}
            >
          
              <Text style={styles.schoolText}>Engineering Mathermatics</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('EEEelectronics')}
            >
              <Text style={styles.schoolText}>Eletrical and Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('EEEstatics')}
            >
          
              <Text style={styles.schoolText}>Statics</Text>
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