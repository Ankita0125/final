
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import {FlatList, TouchableOpacity,Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const data=[
  {
  id:"00",
  title:"Camera",
  image:"https://www.seekpng.com/png/detail/9-95119_camera-icon-classic-green-camera-icon-png.png",
  screen:"CameraImage",
  },
];

const Pickup = () => {
    const navigation=useNavigation();
    return (
    <FlatList
    data={data}
    vertical
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
        <TouchableOpacity
        onPress={()=> navigation.navigate(item.screen)}
        >
         <SafeAreaView>
                <Image 
                style={{
                    width:60,
                    height:60,
                    resizeMode:"contain",
                    marginLeft:10,
                    marginTop:20,
                }}
                source={{uri:item.image}} />
                
        
            </SafeAreaView>
        </TouchableOpacity>
         )}
    />
  )
}




export default Pickup;