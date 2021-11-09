import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function App() {
  const [number1, onChangeNumber1] = React.useState(1);
  const [number2, onChangeNumber2] = React.useState(2);
  const [number3, onChangeNumber3] = React.useState(3);
  const [number4, onChangeNumber4] = React.useState(4);
  const [positionSize, setPositionSize] = React.useState(null)

  const calculateSize = () =>{
    accountSize = parseInt(number1);
    accountRisk = parseInt(number2);
    entryPoint = parseInt(number3);
    exitPoint = parseInt(number4);
    size = (accountSize * (accountRisk / 100)) / (entryPoint - exitPoint);
    setPositionSize(
      size
    )

  }
  return (
    <DismissKeyboard>

    <View style={styles.container}>
      <Text style={styles.topRow}>Cryptositionator</Text>
      
      <View style={styles.midRow}>
      <Text style={styles.text}>Account Size</Text>
      <TextInput
      onChangeText={onChangeNumber1}
      value={number1}
      style={styles.input}
      
      label="Number Input"
      
      keyboardType="numeric"
      
      />
      <Text style={styles.text}>Desired Risk</Text>
      <TextInput
      style={styles.input}
      onChangeText={onChangeNumber2}
      value={number2}
      label="Number Input"
      
      keyboardType="numeric"
      
      />
      <Text style={styles.text}>Entry Price</Text>
      <TextInput
      style={styles.input}
      onChangeText={onChangeNumber3}
      value={number3}
      label="Number Input"
      
      keyboardType="numeric"
      
      />
      <Text style={styles.text}>Exit Price</Text>
      <TextInput
      style={styles.input}
      onChangeText={onChangeNumber4}
      value={number4}
      
      keyboardType="numeric"
      
      />
      </View>

      <View style={styles.midRow}>

        <Text style={styles.botRow}>Position Size {positionSize}
       </Text>
      
        <Button
        onPress={calculateSize}
        title="calculate" 
        color="#841584"
        />      
      
      
      </View>
      <StatusBar style="auto" />
    </View>
        </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    
    backgroundColor: '#0FF1CE',
    
    
  },
  input: {
    
    marginHorizontal: 18,
    marginVertical: 16,
    textAlign:'center',
    fontSize:30,
    width:150,
    height:60,
    backgroundColor: '#9fb3c7',
    borderColor:'black',
    borderWidth:2,
    borderRadius:15,
    
  },
  topRow: {
    textAlign:'center',
    marginTop:50,
    
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 40,
  },
  midRow: {
    marginTop:30,
    flexDirection:"row",
    flexWrap:'wrap',
    justifyContent:"space-evenly",
    
    
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    fontWeight:'bold',
    textAlignVertical:'center',
    justifyContent:'center',
    fontSize:20,
    width:100,
    height:60,
    marginHorizontal: 18,
    marginVertical: 16,
  },
  botRow: {
    textAlign:'center',
    marginTop:30,
    
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
