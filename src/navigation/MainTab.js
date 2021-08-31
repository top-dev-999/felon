import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Images from '../theme/Images'

import { View, StyleSheet, Image, Text } from 'react-native';

import TabBarItem from './TabBarItem';
import ExporeScreen from '../screens/ExporeScreen';
import HousesScreen from '../screens/HousesScreen';
import EmployementsScreen from '../screens/EmployementsScreen';
import DatingScreen from '../screens/DatingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Colors from '../theme/Colors';

import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ExploreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={ExporeScreen} 
        options={{ headerShown: false, gestureEnabled: false }}
        // options={{ headerStyle: {
        //     backgroundColor: Colors.green,
        //     elevation: 0, // remove shadow on Android
        //     shadowOpacity: 0, // remove shadow on iOS
        //   },
        //   gestureEnabled: false,
        //   headerTitle: 'Explore',
        //   headerTitleStyle: {
        //     color: Colors.white
        //   },
        //   headerLeft: null,
        //   headerRight: () => 
        //     <View style={styles.headerIcons}>
        //         <Image source={Images.notification} style={{width: 20, height: 20}}/>
        //     </View>,
        //   headerRightContainerStyle: {
        //     paddingRight: 15
        //   }
        // }}
      />
    </Stack.Navigator>
  );
}

function HousesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Houses" component={HousesScreen} options={{ headerStyle: {
          backgroundColor: Colors.green,
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
        gestureEnabled: false,
        headerTitle: 'Houses',
        headerTitleStyle: {
          color: Colors.white
        },
        headerLeft: null,
        headerRight: () => 
          <View style={styles.headerIcons}>
              <Image source={Images.search} style={{width: 20, height: 20}}/>
              <Image source={Images.notification} style={{width: 20, height: 20, marginLeft: 20}} />
          </View>,
        headerRightContainerStyle: {
          paddingRight: 15
        }
      }}/>
    </Stack.Navigator>
  );
}
function EmploymentsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Employments" component={EmployementsScreen} options={{ headerStyle: {
          backgroundColor: Colors.green,
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
        gestureEnabled: false,
        headerTitle: 'Employments',
        headerTitleStyle: {
          color: Colors.white
        },
        headerLeft: null,
        headerRight: () => 
          <View style={styles.headerIcons}>
              <Image source={Images.search} style={{width: 20, height: 20}}/>
              <Image source={Images.notification} style={{width: 20, height: 20, marginLeft: 20}} />
          </View>,
        headerRightContainerStyle: {
          paddingRight: 15
        }
      }}/>
    </Stack.Navigator>
  );
}

function DatingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dating" component={DatingScreen} options={{ headerStyle: {
          backgroundColor: Colors.green,
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
        gestureEnabled: false,
        headerTitle: 'Dating',
        headerTitleStyle: {
          color: Colors.white
        },
        headerLeft: null,
        headerRight: () => 
          <View style={styles.headerIcons}>
              <Image source={Images.search} style={{width: 20, height: 20}}/>
              <Image source={Images.notification} style={{width: 20, height: 20, marginLeft: 20}} />
          </View>,
        headerRightContainerStyle: {
          paddingRight: 15
        }
      }}/>
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} options= {({navigation}) => ({ headerStyle: {
          backgroundColor: Colors.green,
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
        gestureEnabled: false,
        headerTitle: 'My Profile',
        headerTitleStyle: {
          color: Colors.white
        },
        headerLeft: null,
        headerRight: () => 
          <TouchableOpacity style={styles.headerIcons}  onPress={() => navigation.navigate('Setting')} >
              <Image source={Images.setting} style={{width: 20, height: 20}}/>
          </TouchableOpacity>,
        headerRightContainerStyle: {
          paddingRight: 15
        }
      })}/>
    </Stack.Navigator>
  )
}

class MainTab extends React.Component {
  render() {
      return (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  var icon;
                  var selectedIcon;

                  if (route.name === 'ExploreStack') {
                    icon = Images.icon_explore_inactive;
                    selectedIcon = Images.icon_explore_active;
                  }
                  else if (route.name === 'HousesStack') {
                    icon = Images.icon_houses_inactive;
                    selectedIcon = Images.icon_houses_active;
                  }
                  else if (route.name === 'EmploymentsStack') {
                    icon = Images.icon_employments_inactive;
                    selectedIcon = Images.icon_employments_active;
                  }
                  else if (route.name === 'DatingStack') {
                    icon = Images.icon_dating_inactive;
                    selectedIcon = Images.icon_dating_active;
                  }
                  else if (route.name === 'ProfileStack') {
                    icon = Images.icon_profile_inactive;
                    selectedIcon = Images.icon_profile_active;
                  }

                  return <TabBarItem 
                    page={route.name}
                    icon={icon} 
                    selectedIcon={selectedIcon}
                    focused={focused} 
                  />;
                  
                },
              })}
              tabBarOptions={{
                showLabel: false,
              }}
            >
              <Tab.Screen name="ExploreStack" component={ExploreStack} />
              <Tab.Screen name="HousesStack" component={HousesStack} />
              <Tab.Screen name="EmploymentsStack" component={EmploymentsStack} />
              <Tab.Screen name="DatingStack" component={DatingStack} />
              <Tab.Screen name="ProfileStack" component={ProfileStack} />
            </Tab.Navigator>
      );      
  }
}

export default MainTab;

const styles = StyleSheet.create({
  headerIcons: {
    flexDirection: 'row'
  },
})