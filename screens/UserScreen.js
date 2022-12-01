import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions3 from '../component/NavOptions3';

const UserScreen = () => {
    return (
      <SafeAreaView style={tw` h-full mt-7`}>
      
             <NavOptions3></NavOptions3>
     
      </SafeAreaView>
    );
  };
  
  export default UserScreen;
  
  const styles = StyleSheet.create({
      text:{
          color:"blue",
      },
  
  });