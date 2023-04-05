import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[long , setLong]=useState('');
  const[perimeter, setPerimeter]=useState('');
  const[result , setResult]=useState('');

  function calcWeight(){
    let result = (long*long*perimeter)/11877;
    setResult(result);
  }
  return (
    <View style={styles.container}>
      <Text>Ló súly számítás</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
