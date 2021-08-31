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
  ScrollView,
} from 'react-native';

import { 
  TOAST_SHOW_TIME, 
  ONE_SIGNAL_APP_ID, 
  GOOGLE_SIGNIN_WEB_CLIENT_ID,
  GOOGLE_SIGNIN_IOS_CLIENT_ID,
  Status 
} from '../constants.js'

import actionTypes from '../actions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast from 'react-native-easy-toast'

import {connect} from 'react-redux';
import AppStatusBar from '../components/AppStatusBar';
import RoundTextInput from '../components/RoundTextInput';
import RoundButton from '../components/RoundButton';

import { validateEmail, getOnlyAlphabetLetters } from '../functions';
import LoadingOverlay from '../components/LoadingOverlay';

import Fonts from '../theme/Fonts'
import Images from '../theme/Images';
import Colors from '../theme/Colors';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class SignUpScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor() {
    super()
    this.state = {
      isLoading: false,
      user: {
        firstname: 'sam',
        lastname: 'saint',
        username: 'aun',
        email: 'dai@gmail.com',
        password: '123456',
        confirmPassword: '123456',
        gender: '',

        firstnameError: null,
        lastnameError: null,
        usernameError: null,
        emailError: null,
        passwordError: null,
        confirmPasswordError: null
      }
    }
  }

  componentDidMount() {
    const { gender } = this.props.route.params;
    const { user } = this.state;
    user.gender = gender;
    this.setState({ user: user });
  }

  componentDidUpdate(prevProps, prevState) {

    // Register Customer.
    if (prevProps.registerCustomerStatus != this.props.registerCustomerStatus) {
      if (this.props.registerCustomerStatus == Status.SUCCESS) {
        this.registerCustomerSuccess();
      } 
      else if (this.props.registerCustomerStatus == Status.FAILURE) {
        this.onFailure(this.props.errorMessage);
      }      
    }

    // Check Email.
    if (prevProps.checkEmailStatus != this.props.checkEmailStatus) {
      if (this.props.checkEmailStatus == Status.SUCCESS) {
        this.setState({isLoading: false});
        this.moveNextPage();
      } else if (this.props.checkEmailStatus == Status.FAILURE) {
        this.onFailure(this.props.errorMessage);
      }
    }
  }

  componentWillUnmount() {

  }

  signUp() {
    this.setState({isLoading: true});
    var { user } = this.state;
    this.props.dispatch({
      type: actionTypes.REGISTER_CUSTOMER,
      user: user,
    });
  }

  async registerCustomerSuccess() {
    this.setState({isLoading: false});
    this.props.navigation.navigate('MainTab');
  }

  onFailure(message) {
    this.setState({isLoading: false});
    if (message && message.length > 0) {
      this.toast.show(message, TOAST_SHOW_TIME);
    }
    else {
      this.toast.show(Messages.NetWorkError, TOAST_SHOW_TIME);
    }    
  }

  onLogin() {
    this.props.navigation.navigate("Login");
  }

  onChangeUser(type, value) {
    const user = this.state.user;

    if(type == 'firstname') {
      user.firstname = getOnlyAlphabetLetters(value);
      user.firstnameError = '';
    }

    if(type == 'lastname') {
      user.lastname = getOnlyAlphabetLetters(value);
      user.lastnameError = '';
    }

    if(type == 'username') {
      user.username = getOnlyAlphabetLetters(value);
      user.usernameError = '';
    }

    if(type == 'email') {
      user.email = value;
      user.emailError = '';
    }

    if(type == 'password') {
      user.password = value;
      user.passwordError = '';
    }

    if(type == 'confirmPassword') {
      user.confirmPassword = value;
      user.confirmPasswordError = '';
    }

    this.setState({user: user})
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.white}}>
        <AppStatusBar />
        <Image source={Images.auth_bg} style={styles.backgroundImage} />
        <SafeAreaView style={{flex: 1}}>
          <View style={{alignItems: 'center', marginVertical: screenHeight/20}}>
            <Text style={styles.title}>Sign up</Text>
          </View>
          <KeyboardAwareScrollView style={styles.container, styles.formView}>
            <RoundTextInput
                      placeholder="Firstname"
                      type="text"
                      placeholderTextColor="#939393"
                      value={this.state.user.firstname} 
                      errorMessage={this.state.user.firstnameError}
                      returnKeyType="next"                                       
                      onChangeText={(text) => this.onChangeUser('firstname', text)}
                    />
            <RoundTextInput
                      placeholder="Lastname"
                      type="text"
                      placeholderTextColor="#939393"
                      value={this.state.user.lastname} 
                      errorMessage={this.state.user.lastnameError}
                      returnKeyType="next"                                       
                      onChangeText={(text) => this.onChangeUser('lastname', text)}
                    />
            <RoundTextInput
                      placeholder="Username"
                      type="text"
                      placeholderTextColor="#939393"
                      value={this.state.user.username} 
                      errorMessage={this.state.user.usernameError}
                      returnKeyType="next"                                       
                      onChangeText={(text) => this.onChangeUser('username', text)}
                    />
            <RoundTextInput
                      placeholder="Email"
                      type="email"
                      placeholderTextColor="#939393"
                      value={this.state.user.email} 
                      errorMessage={this.state.user.emailError}
                      returnKeyType="next"                                       
                      onChangeText={(text) => this.onChangeUser('email', text)}
                    />
            <RoundTextInput
                      placeholder="Password"
                      type="password"
                      placeholderTextColor="#939393"
                      value={this.state.user.password} 
                      errorMessage={this.state.user.passwordError}
                      returnKeyType="next"                                       
                      onChangeText={(text) => this.onChangeUser('password', text)}
                    />
            <RoundTextInput
                      placeholder="Password Confirm"
                      type="password"
                      placeholderTextColor="#939393"
                      value={this.state.user.confirmPassword} 
                      errorMessage={this.state.user.confirmPasswordError}
                      returnKeyType="next"                                       
                      onChangeText={(text) => this.onChangeUser('confirmPassword', text)}
                    />
            <View style={styles.formElement}>
              <RoundButton title='SIGNUP' onPress={() => this.signUp()} />
            </View>
            <View style={styles.formElement}>
              <View style={styles.signupText}>
                <Text style={styles.alreadyHaveAccountText}>Alreat have an account?</Text>
                <Text style={styles.loginText} onPress={() => this.onLogin()}>Login</Text>
              </View>
            </View>  
          </KeyboardAwareScrollView>
          <Toast ref={ref => (this.toast = ref)}/>
          {
              this.state.isLoading
              ? <LoadingOverlay />
              : null
            }
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
    justifyContent: 'center',
  },

  backgroundImage: {
    width: screenWidth,
    height: screenHeight/2,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

  welcomeTitle: {
    fontFamily: Fonts.arial,
    fontSize: 18,
    color: 'white'
  },

  title: {
    color: Colors.green,
    fontSize: 29,
  },

  formElement: {
    marginVertical: 10,
  },

  formView: {
    width: '100%',
    paddingHorizontal: '5%',
  },

  signupText: {
    flex: 1,
    paddingBottom: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  alreadyHaveAccountText: {
    fontSize: 14
  },

  loginText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
})


function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser,
    registerCustomerStatus: state.user.registerCustomerStatus,
    checkEmailStatus: state.user.checkEmailStatus,
    errorMessage: state.user.errorMessage,
  };  
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpScreen);