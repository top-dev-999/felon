/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import { Provider } from 'react-redux';
 import { PersistGate } from 'redux-persist/lib/integration/react';
 import {store, persistor} from './src/store';
 import {
   View,
   Text,
   TextInput,
 } from 'react-native';
 import AppNavigator from './src/navigation/AppNavigator'
 
 class Root extends Component {
   constructor() { 
     super(); 
     Text.defaultProps = {allowFontScaling: false};
     TextInput.defaultProps = {allowFontScaling: false};
   }
 
   render() {
     return (
       <Provider store={store}>
         <PersistGate loading={<View><Text>Loading</Text></View>} persistor={persistor}>
           <AppNavigator
             screenProps={{}}
           />
         </PersistGate>
       </Provider>
     );
   }
 };
 export default Root;