import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity,Image, ImageBackground, StyleSheet, ScrollView } from 'react-native';

export default function SchoolofTechnology() {
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
              onPress={() => navigation.navigate('BengCivilyears')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         /> 
              <Text style={styles.schoolText}>Bachelor of Engineering(BEng) in Civil Engineering</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('BengEEEyears')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Engineering(BEng) in Electronics and Eletrical Engineering</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() =>  navigation.navigate('BengMechyears')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Engineering(BEng) in Mechanical Engineering</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('BengAgricyears')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Engineering(BEng) in Agricultural Engineering</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Science in Medical Physics</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('Computeryears')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Science in Computer Science</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Science in Mathermatics And Statistics</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('ITyears')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Science in Information Technology</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Science in Data Science</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Science in Cyber Security</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Engineering(BEng) in Geomatics Engineering</Text>
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