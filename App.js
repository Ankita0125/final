import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import userlogin from './screens/userlogin';
import munlogin from './screens/munlogin';
import ScheduleScreen from './screens/ScheduleScreen';
import WasteScreen from './screens/WasteScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import UserScreen from './screens/UserScreen';
import Information from './screens/Information';
import Pickup from './screens/Pickup';





export default function App() {
  const Stack=createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            
  <Stack.Screen
   name="Home"
    component={HomeScreen}
  options={{
   headerShown:false,
  }}/>
         
          <Stack.Screen name='userlogin'
  component={userlogin}
  options={{headerShown:false}}
  /> 
          <Stack.Screen name='munlogin'
  component={munlogin}
  options={{headerShown:false}}
  /> 


  
            <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen
            name="WasteScreen"
            component={WasteScreen}
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen
            name="ScheduleScreen"
            component={ScheduleScreen}
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen
            name="UserScreen"
            component={UserScreen}
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen
            name="Information"
            component={Information}
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen
            name="Pickup"
            component={Pickup}
            options={{
              presentation:"fullScreenModal",headerShown:false
            }}
            />
          </Stack.Navigator>
          
        </SafeAreaProvider>
      </NavigationContainer>
      
    </Provider>
    
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
