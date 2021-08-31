import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  PermissionsAndroid, 
  Platform,
  Dimensions,
  TextInput,
  Button,
  ScrollView
} from 'react-native';

import { SocialIcon } from 'react-native-elements'

import {connect} from 'react-redux';
import AppStatusBar from '../components/AppStatusBar';
import RoundTextInput from '../components/RoundTextInput';

import Fonts from '../theme/Fonts'
import Images from '../theme/Images';
import Colors from '../theme/Colors';
import RoundButton from '../components/RoundButton';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class SignUpAsScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor() {
    super();
    this.state = {
      gender: 'male',
    }
  }

  componentDidMount() {

  }


  componentWillUnmount() {

  }


  onNext() {
    const { gender } = this.state;

    this.props.navigation.navigate("SignUp", { gender: gender });
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.white}}>
        <AppStatusBar />
        <Image source={Images.auth_bg} style={styles.backgroundImage} />
        <SafeAreaView style={{flex: 1, paddingHorizontal: '10%',}}>
          <View style={{alignItems: 'center', marginVertical: screenHeight/20}}>
            <Text style={styles.title}>Sign up as</Text>
          </View>


          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <ScrollView>
              <View>
                <TouchableOpacity style={[styles.genderButton, this.state.gender == 'male' ? styles.selectedGender : null]} onPress={() => this.setState({gender: 'male'})}>
                  <View style={{flex: 6, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={[this.state.gender == 'male' ? styles.selectedGenderText : styles.genderButtonText]}>Male</Text>
                  </View>
                  <View style={{flex: 4, paddingTop: '10%', paddingRight: '10%'}}>
                    <Image source={Images.male} style={styles.genderButtonImage}></Image>
                  </View>            
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}}>
                <TouchableOpacity style={[styles.genderButton, this.state.gender == 'female' ? styles.selectedGender : null]} onPress={() => this.setState({gender: 'female'})}>
                  <View style={{flex: 3, paddingHorizontal: '10%', paddingTop: '10%'}}>
                    <Image source={Images.female} style={styles.genderButtonImage}></Image>
                  </View>   
                  <View style={{flex: 7, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={[this.state.gender == 'female' ? styles.selectedGenderText : styles.genderButtonText]}>Female</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View style={{paddingBottom: 20}}>
              <RoundButton title='Next' onPress={() => this.onNext()}/>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',                    
    flexDirection: 'column',
    justifyContent: 'center'
  },

  formView: {
    width: '100%',                  
    paddingHorizontal: '5%', 
  },

  backgroundImage: {
    width: screenWidth,
    height: screenHeight/2,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

  title: {
    color: Colors.green,
    fontSize: 36,
  },

  genderButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
    height: screenHeight/3.8,
  },

  selectedGender: {
    borderWidth: 3,
    borderColor: Colors.green
  },


  genderButtonImage: {
    resizeMode: 'stretch',
    height: '100%',
    width: '100%',
  },

  genderButtonText: {
    fontSize: 30,
    color: Colors.text_black,
  },

  selectedGenderText: {
    color: Colors.green,
    fontSize: 30,
  }
  
})


function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

function mapStateToProps(state) {
  return {
  };  
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpAsScreen);