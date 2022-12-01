import { View, Text, FlatList, TouchableOpacity,Image} from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const data=[
    {
    id:"111",
    title:"Information",
    image:"https://cdn-icons-png.flaticon.com/128/604/604573.png",
    screen:"Information",
    },
    {
    id:"222",
    title:"Schedule pickup",
    image:"https://cdn-icons-png.flaticon.com/128/2203/2203124.png",
    screen:"Pickup",
    },
    {
        id:"333",
        title:"WasteClassifier",
        image:"https://cdn-icons-png.flaticon.com/128/2985/2985659.png",
        screen:"CameraImage",
        },
];

const NavOptions3 = () => {
    const navigation=useNavigation();
  return (
    
    <FlatList
    data={data}
    vertical
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
        
        <TouchableOpacity
        onPress={()=> navigation.navigate(item.screen)} 
        style={tw`p-2 pl-6 pb-8 pt-4 bg-white-200  w-100 mb-1 mt-4 rounded-3xl`}
         >
            <View >
                <Image 
                style={{width:120,height:120,resizeMode:"contain", marginLeft:115, marginTop:30,  borderRadius:40}}
                source={{uri:item.image}} />
                <Text style={tw`mt-2 text-2xl text-center font-semibold`}>{item.title}</Text>
                <Icon 
                style={tw`p-2 bg-black rounded-full w-70 ml-100 mt-4 mr-4`}
                    name="arrowright"
                    color="white"
                    type="antdesign"
                />
        
            </View>
        </TouchableOpacity>
    )}
    />
  )
}

export default NavOptions3;