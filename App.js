/*
* File: App.java
* Author: Kovács Dorina
* Copyright: 2023, Kovács Dorina
* Group: Szoft II/N
* Date: 2023-04-04
* Github: https://github.com/Kdorina/
* Licenc: GNU GPL
*/


import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import image from "./assets/horse1.jpg";
export default function App() {
  const[long , setLong]=useState('');
  const[perimeter, setPerimeter]=useState('');
  const[result , setResult]=useState('');

  function calcWeight(){
    let result = (long*long*perimeter)/11877;
    setResult(result);
  }
  return (
    <View style={{backgroundImage:`url(${image})`, 
    backgroundRepeat: 'no-repeat',
    flex:1, backgroundSize:'cover',
    alignItems:'center'}} >
      <Text style={styles.mainTitle}>Ló súly számítás</Text>

      <View style={styles.content}>
          <Text style={styles.inputTitle}>Mellkas kerülete(cm)</Text>
          <TextInput style={styles.input} onChangeText={(res) => setPerimeter(res)}></TextInput>

          <Text style={styles.inputTitle}>Hossz(cm)</Text>
          <TextInput style={styles.input} onChangeText={(res) => setLong(res)}></TextInput>

          <TouchableHighlight onPress={calcWeight} >
            <Text style={{margin:10,
    background: "linear-gradient(45deg, #fff, #76BBC0)", 
    padding:15,
    width:300,
    textAlign:'center',
    borderRadius:25,
    fontWeight:600}}>Számít</Text>
          </TouchableHighlight>

          <Text style={styles.inputTitle}>Eredmény</Text>
          <TextInput style={styles.input} value={result} onChangeText={(res)=> setResult(res)}
          editable={false} selectTextOnFocus={false}></TextInput>

      </View>
      <footer style={styles.footer}>Kovács Dorina, Szoft II/N , 2023-04-04</footer>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddd',
    alignItems: 'center',
    
  },
  mainTitle:{
    marginTop:100,
    fontSize:25,
    fontWeight:500,
    color:"#19324D",
    backgroundColor:"rgba(255,255,255,0.56)",
    padding:10,
    borderRadius:10,
    width:350,
    textAlign:'center'
  },
  content:{
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
    backgroundColor: 'rgba(255,255,255,0.56)',
    padding:20,
    borderRadius:10

  },
  inputTitle:{
    display:'flex',
    alignItems: 'center',
    justifyContent: 'left',
    fontSize:17,
    marginTop:10
    
  },
  input:{
    backgroundColor:'#fff',
    padding:10,
    width:300,
    borderRadius:10,
    marginTop:10,
    marginBottom:10
  },
  footer:{
    marginTop:70,
    color:'#fff',
    fontFamily:'Arial, Helvetica, sans-serif',
    fontWeight:600,

  }
});
