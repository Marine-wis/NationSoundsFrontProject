// point d'entrée de l'application
import Groupe from './Components/Groupe'
import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GroupeDetail from './Components/GroupeDetail';
import { Feather } from '@expo/vector-icons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

//logo pour header
function LogoTitle() {
  return (
    <Image
      style={{ width: 120, height: 52, resizeMode: "center" }}
      source={require('./assets/logoNS.png')}
    />
  );
}

//navigation
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//navigation dans le groupe-> groupe détail
function GroupNavigator({navigation}) {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Groupes"
          component={Groupe}
          //header qu'il faudra ajouter à chaque stack.screen où il y en a besoin
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
              
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <Feather name="menu" size={35} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="DetailGroupe" 
        component={GroupeDetail} 
        //permet d'afficher le nom du groupe sélectionné
        options={({ route }) => ({ title: route.params.groupe.group_name })}/>
      </Stack.Navigator>
  )
}

//permet de faire le menu hamburger
//pour l'instant il n'y a qu'une seule page donc les 2 liens renvoient sur la même page
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Groupes" component={GroupNavigator} />
        <Drawer.Screen name="Test2" component={GroupNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
