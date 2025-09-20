import React from 'react';
import { Text,StyleSheet,ImageBackground, View } from 'react-native';

export default function Journalism4thyr() {
  return (
  <View style={styles.container}>
           <ImageBackground
             source={ require('../assets/images/mweemba.jpg')}
             style={styles.background} >
             <Text style={styles.text}>
             Coming Soon!!!
             </Text>
             </ImageBackground>
            </View>
  
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',

  },
  text:{
    color:'orange',
    alignItems:'center',
    alignContent:'center',
  },
  background:{
    flex:1,
    backgroundSize:'cover',
    justifyContent: "center",
    alignContent:"center",
},
})
