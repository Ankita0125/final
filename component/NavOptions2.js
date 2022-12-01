import { FlatList, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';


  const data=[
    {
        id:"100",
        title :"Waste pickups",
        image:"https://cdn-icons-png.flaticon.com/512/4666/4666996.png",
        screen:"WasteScreen",

    },
    {
        id:"200",
        title:"waste schedule",
        image:"https://img.icons8.com/ios-filled/512/view-shedule.png",
        screen:"ScheduleScreen",

     
    },
];

const NavOptions2 = () => {
  const origin = useSelector(selectOrigin);
  const navigation=useNavigation();
  return (
    <FlatList
    data={data}
  vertical
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
        <TouchableOpacity 
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 h-70  ml-5`}
          /* disabled={!origin}*/>
            {/*<View style ={tw`${!origin && "opacity-20"}`}>*/}
            <View>
              <Image
                style={{width:120,height:120,resizeMode:"contain"}}
                source={{uri:item.image}}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
              <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name='arrowright'
              color='white'
              type='antdesign'
              />
            </View>
        </TouchableOpacity>
    )}
    />
  );
};

export default NavOptions2;

