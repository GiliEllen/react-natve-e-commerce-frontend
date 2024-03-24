import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ProfilePage from '../profilePage/ProfilePage';
import MainScreen from '../mainScreen/MainScreen';

const Stack = createNativeStackNavigator();

const UserProfileScreen = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name='ProfilePage' component={ProfilePage} options={{ headerShown: false }}/>
        <Stack.Screen name='MainScreen' component={MainScreen}/>
        {/* <Stack.Screen name='Orders' component={Orders}/> */}
        {/* <Stack.Screen name='Settings' component={Settings}/> */}
    </Stack.Navigator>
  )
}

export default UserProfileScreen