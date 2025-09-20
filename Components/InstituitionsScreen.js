import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text,TouchableOpacity,Image,ImageBackground, ScrollView,StyleSheet, View } from 'react-native';


export default function InstituitionsScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
    source={ require('../assets/images/mulib.jpg')}
    style={styles.background} >
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
    <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('CBU')}>
    <Image 
    source={require('../assets/images/CBU.jpg')}
    style={styles.image}
     />
      <Text
      styles={styles.buttontext}>Copperbelt University</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('Cavendish University')}>
    <Image 
    source={require('../assets/images/Canvendish University.jpg')}
    style={styles.image}
     />
      <Text
      styles={styles.buttontext}>Canvendish University</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('Chalimbana University')}>
    <Image 
    source={require('../assets/images/Chalimbana University.jpg')}
    style={styles.image}
     />
      <Text
      styles={styles.buttontext}>Chalimbana University</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('Eden University')}>
    <Image 
    source={require('../assets/images/Eden.jpg')}
    style={styles.image}
     />
      <Text
      styles={styles.buttontext}>Eden University</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('Kwame')}>
    <Image 
    source={require('../assets/images/Kwame Khuruma Uni.jpg')}
    style={styles.image}
     />
      <Text
      styles={styles.buttontext}>Kwame Khurumah University</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('LMMU')}>
    <Image 
    source={require('../assets/images/LMMU.jpg')}
    style={styles.image}
     />
      <Text
      styles={styles.buttontext}>Levy Mwanawasa Medical University</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('Mulungushi')}>
    <Image 
    source={require('../assets/images/Mulungushi University.jpg')}
    style={styles.image}
     />
      <Text
      styles={styles.buttontext}>Mulungushi University</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate("UNZA")}>
    <Image 
    source={require('../assets/images/University of Zambia.jpg')}
    style={styles.image}
     />  
      <Text styles={styles.buttontext}>University of Zambia</Text>
    
    </TouchableOpacity>
    </ScrollView>
    </View>
    </ImageBackground>
  );
}
 
const styles = StyleSheet.create({
  container:{
    flex: 0,
    alignItems:'center',
    background: "#213A57",
    flexDirection:"column"
  },
  button: {
      width:"300",
      margin:8,
      padding:10,
      backgroundColor:'#ffffff',
      borderRadius:10,
      shadowColor:'#000',
      shadowOffset: { width:30,height:5},
      shadowOpacity:0.2,
      shadowRadius:10,
      elevation:5,
  },
  image:{
    width:50,
    height:50,
    marginRight:10
  },
  buttontext:{
    fontSize: 16,
    fontWeight: 'bold',
    alignItems:'center',
    color: '#fff',
    marginLeft: 10,
  },
  background:{
    flex:1,
    justifyContent: "center",
    alignContent:"center",
},
});