/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   StatusBar,
   View,
 } from 'react-native';
 
 import { Colors } from 'react-native/Libraries/NewAppScreen';
 import HomeScreen from './app/Screens/HomeScreen';
 
 const App = () => {
   const backgroundStyle = {
     backgroundColor: "black",
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={'dark-content'} />
         <View
           style={{
             backgroundColor:  Colors.black
           }}>
             <HomeScreen/>
           </View>
     </SafeAreaView>
   );
 };
 
 export default App;
 