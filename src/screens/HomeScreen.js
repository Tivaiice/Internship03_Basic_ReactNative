import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  //`
  
  const name = 'Íce';
  return (
    <View>

      <Text style={{fontSize: 20,alignSelf:'center'}}>My name is {name}</Text>
      <Button 
        title="Click here!! Go to Component"
        onPress={() => navigation.navigate('Components')}    
      />

      <Button 
        title="Click here!! Go to List"
        onPress={() => navigation.navigate('List')}    
      />

      <Button 
        title="Click here!! Go to Image"
        onPress={() => navigation.navigate('Image')}    
      />

      <Button 
        title="Click here!! Go to Counter"
        onPress={() => navigation.navigate('Counter')}    
      />

      <Button 
        title="Click here!! Go to Color"
        onPress={() => navigation.navigate('Color')}    
      />

      <Button 
        title="Click here!! Go to Square"
        onPress={() => navigation.navigate('Square')}    
      />

      <Button 
        title="Click here!! Go to Text"
        onPress={() => navigation.navigate('Text')}    
      />

      <Button 
        title="Click here!! Go to Box"
        onPress={() => navigation.navigate('Box')}    
      />

    </View>
    )
};


export default HomeScreen;
 