import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native-webview';
 
const buddy="http://discountbuddy.pythonanywhere.com/";

export default function App() {
  return (
    <View style={styles.container}>
       <View style={{ width:'100%', height:'100%'}}>
       <WebView
        source={{ uri: buddy }}
      />

       </View>

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