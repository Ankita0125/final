import { FlatList, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


  const data=[
    {
        id:"123",
        title :"Municipal Corporation",
        image:"https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-administration-icon-in-trendy-style-isolated-background-png-image_1538647.jpg",
        screen:"munlogin",

    },
    {
        id:"456",
        title:"User Login",
        image:"https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png",
        screen:"userlogin",

     
    },
];

const NavOptions = () => {
  const navigation=useNavigation();
  return (
    <FlatList
    data={data}
    vertical
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
        <TouchableOpacity 
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
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

export default NavOptions;

