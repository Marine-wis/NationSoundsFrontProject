// point d'entrée de l'application
import Groupe from './Components/Groupe'
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Components/Header'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Groupes" component={Groupe} options={{header: () => <Header/>}}/> */}
        <Stack.Screen name="Groupes" component={Groupe} options={{header: () => {}}}/>
        <Stack.Screen name="DetailGroupe" component={Groupe}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
