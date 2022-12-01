import { FlatList, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/themed';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { selectOrigin } from '../slices/navSlice';

const data=[
  {
  id:"111",
  title:"Information",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTqU1jFJjIBgX4SdcBfV57rCe3GQ27tcGXg&usqp=CAU",
  screen:"Information",
  },
  {
  id:"222",
  title:"Schedule pickup",
  image:"https://thumbs.dreamstime.com/b/time-delivery-schedule-pickup-icon-beautiful-design-fully-editable-commercial-print-media-web-any-type-projects-152725063.jpg",
  screen:"Pickup",
  },
];

const NavOptions3 = () => {
  const origin = useSelector(selectOrigin);
  const navigation=useNavigation();
  return (
    <FlatList
    data={data}
   vertical
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
        <TouchableOpacity 
       /* disabled={!origin}*/
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
         {/*   <View style ={tw`${!origin && "opacity-20"}`}>*/}
         <View>
              <Image
                style={{width:120,height:120,resizeMode:"contain"}}
                source={{uri:item.image}}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
              <Icon
              style={tw`p-2 bg-black rounded-full w-10\ mt-4`}
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

export default NavOptions3;

