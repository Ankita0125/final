import { StyleSheet, Text, View , SafeAreaView,Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../component/NavOptions';
//import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
      <Image 
            style={{
              width:110,
              height:100,
              resizeMode:"contain",
             }}
             source={{
              uri:"https://tse2.mm.bing.net/th?id=OIF.dIp8CXTEAe0kWvfVwdgifQ&pid=Api&P=0",
             }}
  
          />
      
     
           <NavOptions style={styles.text}></NavOptions>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text:{
        color:"blue",
        
    },

});