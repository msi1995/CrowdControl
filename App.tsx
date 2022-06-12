import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { useState } from 'react'
import { StyleSheet, Image} from 'react-native';

import Splash from './assets/components/Splash';
import UserType from './assets/components/UserType';
import UserMain from './assets/components/UserMain';
import UserEvent from './assets/components/UserEvent';
import OrganizerMain from './assets/components/OrganizerMain';
import UserRequestHelp from './assets/components/UserRequestHelp';
import OrganizerEvent from './assets/components/OrganizerEvent';

export default function App() {

const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>


      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: true,
            headerTitle: () => (
                <Image style={{ marginTop: -10, borderRadius: 4, margin: 0, padding: 0, width: 360, height: 50 }} source={require("./assets/crowdcontrol.png")} />
              ),
            headerStyle:{
              backgroundColor: '#04b8bb',
            }
          }}
        />
        <Stack.Screen
          name="UserType"
          component={UserType}
          options={{ headerShown: true,
            headerTitle: () => (
                <Image style={{ marginTop: -10, marginLeft: -35, borderRadius: 4, margin: 0, padding: 0, width: 350, height: 50 }} source={require("./assets/crowdcontrol.png")} />
              ),
            headerStyle:{
              backgroundColor: '#04b8bb',
            }
          }}
        />
        <Stack.Screen
          name="UserMain"
          component={UserMain}
          options={{ headerShown: true,
            headerTitle: () => (
                <Image style={{ marginTop: -10, marginLeft: -35, borderRadius: 4, margin: 0, padding: 0, width: 350, height: 50 }} source={require("./assets/crowdcontrol.png")} />
              ),
            headerStyle:{
              backgroundColor: '#04b8bb',
            }
          }}
        />
        <Stack.Screen
          name="UserEvent"
          component={UserEvent}
          options={{ headerShown: true,
            headerTitle: () => (
                <Image style={{ marginTop: -10, marginLeft: -35, borderRadius: 4, margin: 0, padding: 0, width: 350, height: 50 }} source={require("./assets/crowdcontrol.png")} />
              ),
            headerStyle:{
              backgroundColor: '#04b8bb',
            }
          }}
        />
        <Stack.Screen
          name="OrganizerMain"
          component={OrganizerMain}
          options={{ headerShown: true,
            headerTitle: () => (
                <Image style={{ marginTop: -10, marginLeft: -35, borderRadius: 4, margin: 0, padding: 0, width: 350, height: 50 }} source={require("./assets/crowdcontrol.png")} />
              ),
            headerStyle:{
              backgroundColor: '#04b8bb',
            }
          }}
        />
        <Stack.Screen
          name="UserRequestHelp"
          component={UserRequestHelp}
          options={{ headerShown: true,
            headerTitle: () => (
                <Image style={{ marginTop: -10, marginLeft: -35, borderRadius: 4, margin: 0, padding: 0, width: 350, height: 50 }} source={require("./assets/crowdcontrol.png")} />
              ),
            headerStyle:{
              backgroundColor: '#04b8bb',
            }
          }}
        />
        <Stack.Screen
          name="OrganizerEvent"
          component={OrganizerEvent}
          options={{ headerShown: true,
            headerTitle: () => (
                <Image style={{ marginTop: -10, marginLeft: -35, borderRadius: 4, margin: 0, padding: 0, width: 350, height: 50 }} source={require("./assets/crowdcontrol.png")} />
              ),
            headerStyle:{
              backgroundColor: '#04b8bb',
            }
          }}
        />
        


      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const textStyles = StyleSheet.create({
  container: {
    color: '#ffffff',
    fontSize: 17,
    marginVertical: 10
  },
});
