import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';

export default function Computer2sem1() {
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
              onPress={() => navigation.navigate('ComputerArch')}
            >
              <Text style={styles.schoolText}>Computer Architecture ICT-221</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('DigitalD')}
            >
              <Text style={styles.schoolText}>Digital Design ICT-241</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() =>  navigation.navigate('Descrete')}
            >
              <Text style={styles.schoolText}>Descrete Mathermatics ICT-201</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('Java1')}
            >
              <Text style={styles.schoolText}>Intro to OOP and Java ICT-261</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('Statistics')}
            >
              <Text style={styles.schoolText}>Statistics and Empirical Methods of Computing ICT-402</Text>
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