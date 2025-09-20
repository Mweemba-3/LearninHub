import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity,Image, ImageBackground, StyleSheet, ScrollView } from 'react-native';

export default function SchoolofEducation() {
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
              onPress={() => navigation.navigate('')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         /> 
              <Text style={styles.schoolText}>Bachelor of Science in ICT with Education</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Science in Mathermatics with Education</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() =>  navigation.navigate('')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Science in Argriculture with Education</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Business Administration and Entrepreneurship with Education</Text>
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
  image:{
    width:50,
    height:50,
    marginRight:10,
    borderRadius:25,
  },
});