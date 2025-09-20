import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

export default function CavendishUniversity() {
  return (
    <View style={styles.container}>
          <ImageBackground
            source={ require('../assets/images/cavendish1.jpg')}
            style={styles.background} >
            <Text style={styles.text}>
            
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
    color:'red',
    fontWeight:'bold',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  background:{
    flex:1,
    backgroundSize:'cover',
    justifyContent: "center",
    alignContent:"center",
},
})
