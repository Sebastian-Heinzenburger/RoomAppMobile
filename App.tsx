import { StyleSheet, Text, View, StatusBar, Dimensions, LogBox } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "./screens/Login";
import { Register } from "./screens/Register";
import { Welcome } from "./screens/Welcome";
import { TOS } from './screens/TOS';
import { Home } from './screens/Home';
import { Rooms } from './screens/Rooms';
import { Credits } from './screens/Credit';
import { Friends } from './screens/Friends';
import { colors } from './components/Colors';
import { AddFriends } from './screens/AddFriend';
import { Lerngruppen } from './screens/Lerngruppen';


const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs(true);

export default function App() {

  //@ts-ignore
  global.address = "192.168.178.75";

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.accent} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home'     component={Home} />
        <Stack.Screen name='Welcome'  component={Welcome} />
        <Stack.Screen name='Login'    component={Login}     options={{animation: "slide_from_bottom"}}/>
        <Stack.Screen name='Register' component={Register}  options={{animation: "slide_from_bottom"}}/>
        <Stack.Screen name='Rooms' component={Rooms}        options={{animation: "default"}}/>
        <Stack.Screen name='Friends' component={Friends}        options={{animation: "default"}}/>
        <Stack.Screen name='AddFriends' component={AddFriends}        options={{animation: "slide_from_right"}}/>
        <Stack.Screen name='Lerngruppen' component={Lerngruppen}        options={{animation: "default"}}/>
        <Stack.Screen name='TOS'      component={TOS}       options={{headerShown: true, title: "Nutzungsbedingungen", animation: 'flip'}}/>
        <Stack.Screen name='Credits'      component={Credits}  />     
      </Stack.Navigator>
    </NavigationContainer>
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
