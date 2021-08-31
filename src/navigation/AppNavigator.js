import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { View, StyleSheet, Image, Text } from 'react-native';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpAsScreen from '../screens/SignUpAsScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

import EmployementsScreen from '../screens/EmployementsScreen';
import JobDetailsScreen from '../screens/JobDetailsScreen';
import DatingScreen from '../screens/DatingScreen';
import HousesScreen from '../screens/HousesScreen';
import HouseDetailsScreen from '../screens/HouseDetailsScreen';
import ExploreScreen from '../screens/ExporeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import ChatScreen from '../screens/ChatScreen';
import MainTab from './MainTab';

import Colors from '../theme/Colors';
import Images from '../theme/Images';

import { TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, gestureEnabled: false }}/>
        <Stack.Screen name="Setting" component={SettingScreen} options= {({navigation}) => ({ headerStyle: {
            backgroundColor: Colors.green,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          gestureEnabled: false,
          headerTitle: 'My Profile',
          headerTitleStyle: {
            color: Colors.white
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.headerIcons}  onPress={() => navigation.navigate('Setting')} >
                <Image source={Images.arrow_left} style={{width: 20, height: 20, resizeMode: 'contain'}}/>
            </TouchableOpacity>
          ),
          
          headerRightContainerStyle: {
            paddingRight: 15
          }
        })}/>
        <Stack.Screen name="JobDetails" component={JobDetailsScreen} options= {({navigation}) => ({ headerStyle: {
            backgroundColor: Colors.green,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          gestureEnabled: false,
          headerTitle: 'Graphic Designer',
          headerTitleStyle: {
            color: Colors.white
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.headerIcons}  onPress={() => navigation.navigate('Employments')} >
                <Image source={Images.arrow_left} style={{width: 20, height: 20, resizeMode: 'contain'}}/>
            </TouchableOpacity>
          ),
        })}/>
        <Stack.Screen name="HouseDetails" component={HouseDetailsScreen} options={{ headerShown: false, gestureEnabled: false }}/>
        <Stack.Screen name="SignUpAs" component={SignUpAsScreen} options={{ headerShown: false, gestureEnabled: false }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false, gestureEnabled: false }}/>
        <Stack.Screen name="Chat" component={ChatScreen} options= {({navigation}) => ({ headerStyle: {
            backgroundColor: Colors.green,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          gestureEnabled: false,
          
          headerTitleStyle: {
            color: Colors.white
          },
          headerLeft: () => (
            <TouchableOpacity style={[styles.headerIcons, {paddingLeft: 20, margin: 0}]}  onPress={() => navigation.navigate('Employments')} >
                <Image source={Images.arrow_left} style={{width: 20, height: 20, resizeMode: 'contain'}}/>
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View style={{flexDirection:'row', alignItems: 'center'}}>
              <Image source={Images.messageAvatar} style={{width: 36, height: 36, marginRight: 10}} />
              <Text style={{color: Colors.white, fontSize: 17}}>Anna</Text>
            </View>
          ),
        })}/>
        <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false, gestureEnabled: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({
  headerIcons: {
    flexDirection: 'row'
  },
})