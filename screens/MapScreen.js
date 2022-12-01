import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions2 from '../component/NavOptions2';

const MapScreen = () => {
    return (
      <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
          <Image 
            style={{
              width:100,
              height:100,
              resizeMode:"contain",
             }}
             source={{
              uri:"https://links.papareact.com/gzs",
             }}
  
          />
             <NavOptions2></NavOptions2>
        </View>
      </SafeAreaView>
    );
  };
  
  export default MapScreen;
  
  const styles = StyleSheet.create({
      text:{
          color:"blue",
      },
  
  });