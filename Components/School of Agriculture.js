import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image,TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';

export default function SchoolofAgric() {
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
              <Text style={styles.schoolText}>Bachelor of Science(BSc) in Agriculture </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Science(BSc) in Land and Water Resources Management </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() =>  navigation.navigate('')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Science(BSc) in Agricultural Business Management </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Science(BSc) in Environmental Studies</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Science(BSc) in Agricultural Economics</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.schoolButton}
              onPress={() => navigation.navigate('')}
            >
            <Image  source={require('../assets/images/Mulungushi University.jpg')}
                        style={styles.image}
                         />
              <Text style={styles.schoolText}>Bachelor of Science(BSc) in Agronomy</Text>
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
  image:{
    width:50,
    height:50,
    marginRight:10,
    borderRadius:25,
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