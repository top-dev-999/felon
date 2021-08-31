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

import { SocialIcon } from 'react-native-elements';
import Toast from 'react-native-easy-toast'
import actionTypes from '../actions';
import {connect} from 'react-redux';
import AppStatusBar from '../components/AppStatusBar';
import RoundButton from '../components/RoundButton';

import { 
  TOAST_SHOW_TIME, 
  ONE_SIGNAL_APP_ID, 
  GOOGLE_SIGNIN_WEB_CLIENT_ID,
  GOOGLE_SIGNIN_IOS_CLIENT_ID,
  Status 
} from '../constants.js'

import Fonts from '../theme/Fonts'
import Images from '../theme/Images';
import Colors from '../theme/Colors';
import Messages from '../theme/Messages'

import SplashScreen from 'react-native-splash-screen';

import RoundTextInput from '../components/RoundTextInput';
import {isValidEmail, checkInternetConnectivity} from '../functions'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class LoginScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor() {
    super()
    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      remember: false,
      isLoading: false,
      onesignalUserId: '',
    }
  }

  componentDidMount() {
    setTimeout(function () {
      SplashScreen.hide();
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.loginUserStatus != this.props.loginUserStatus) {
      if (this.props.loginUserStatus == Status.SUCCESS) {
        this.loginSuccess();
      } else if (this.props.loginUserStatus == Status.FAILURE) {
        this.onFailure(this.props.errorMessage);
      }      
    }

    if (prevProps.loginWithSocialStatus != this.props.loginWithSocialStatus) {
      if (this.props.loginWithSocialStatus == Status.SUCCESS) {
        this.loginWithSocialSuccess();
      } else if (this.props.loginWithSocialStatus == Status.FAILURE) {
        this.onFailure(this.props.errorMessage);
      } 
    }

    if (prevProps.restoreUserStatus != this.props.restoreUserStatus) {
      if (this.props.restoreUserStatus == Status.SUCCESS && this.props.currentUser && this.props.currentUser._id) {
        this.onMoveHome(false);
      } else if (this.props.restoreUserStatus == Status.FAILURE) {
        SplashScreen.hide();
      }
    }
  }

  loginSuccess() {
    this.props.navigation.navigate('MainTab');
  }
  componentWillUnmount() {

  }

  onSignUp() {
    this.props.navigation.navigate("SignUpAs");
  }

  onChangeEmail = (text) => {
    if (text && text != "" && isValidEmail(text)) {
      this.setState({email: text, emailError: null});
    } else {
      this.setState({email: text})
    }    
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
    this.setState({errorMessage: null});

    Keyboard.dismiss();

    let email = this.state.email.trim();
    let password = this.state.password.trim();

    var isValid = true;
    if (email == null || email.length <= 0 || !isValidEmail(email)) {
      this.setState({emailError: Messages.InvalidEmail});
      isValid = false;
    }

    if (password == null || password.length <= 0) {
      this.setState({passwordError: Messages.InvalidPassword});
      isValid = false;
    }

    if (isValid) {
      this.setState({isLoading: true}, () => { 
        this.props.dispatch({
          type: actionTypes.LOGIN_USER,
          email: email,
          password: password,
          // player_id: this.props.playerId,
          // lat: this.props.lat,
          // lng: this.props.lng,
        });
      });      
    }
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.white}}>
        <Image source={Images.auth_bg} style={styles.backgroundImage} />
        <ScrollView style={{flex: 1}}>
          <View style={{height: 300, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={Images.logo}/>
          </View>
          <View style={styles.container, styles.formView}>
          <RoundTextInput
                    placeholder="Email"
                    type="email"
                    prefixIcon="email"
                    placeholderTextColor="#939393"
                    value={this.state.email} 
                    errorMessage={this.state.emailError}
                    returnKeyType="next"                                       
                    onSubmitEditing={() => { this.passwordInput.focus() }}
                    onChangeText={this.onChangeEmail}
                  />
                  
                  <RoundTextInput
                    placeholder="Password"
                    type="password"
                    prefixIcon="password"
                    placeholderTextColor="#939393"
                    returnKeyType="done"
                    showPassword={true}
                    value={this.state.password} 
                    errorMessage={this.state.passwordError}
                    onRefInput={(input) => { this.passwordInput = input }}
                    onChangeText={(text) => this.setState({password: text, passwordError: null})} 
                    onSubmitEditing={() => { this.onLogin() }}
                  />
            <View style={styles.formElement}>
                <Text style={styles.forgetPasswordText}>Forget your password?</Text>
            </View>

            <View style={styles.formElement}>
              <RoundButton title='LOGIN' onPress={() => this.onLogin()} />
            </View>

            <View style={styles.formElement}>
              <View style={styles.signupText}>
                <Text style={styles.dontHaveAccountText}>Don't have an account?</Text>
                <Text style={styles.signUpText} onPress={() => this.onSignUp()}>Sign up</Text>
              </View>
            </View>    

            <View style={[{flexDirection: 'row', alignItems: 'center', paddingVertical: 10}]}>
              <View style={{flex: 1, height: 1, backgroundColor: '#B4BBC9'}} />
              <View>
                <Text style={{width: 50, textAlign: 'center', fontSize: 14}}>OR</Text>
              </View>
              <View style={{flex: 1, height: 1, backgroundColor: '#B4BBC9'}} />
            </View>

            <View style={styles.formElement}>
              <View style={styles.socialControl}>
                <TouchableOpacity style={styles.socialIcon}>
                  <Image 
                      style={styles.socialIconImage}
                      source={Images.btn_facebook}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                  <Image 
                      style={styles.socialIconImage}
                      source={Images.btn_twitter}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                  <Image 
                      style={styles.socialIconImage}
                      source={Images.btn_google}
                    />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Toast ref={ref => (this.toast = ref)}/>
        </ScrollView>
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

  welcomeTitle: {
    fontFamily: Fonts.arial,
    fontSize: 18,
    color: 'red'
  },

  textfield: {
    backgroundColor: Colors.ligehtGray,
    height: 52,
    borderWidth: 1,
    borderRadius: 26, 
    fontSize: 15,
    paddingHorizontal: 20,
    borderColor: Colors.textfieldBorder,
  },

  forgetPasswordText: {
      textAlign: 'right',
      color: '#333333',
      fontSize: 15,
  },

  formElement: {
      marginVertical: 12,
  },


  signupText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333333'
  },

  dontHaveAccountText: {
    fontSize: 14,
    color: '#333333',
  },

  signUpText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  
  socialControl: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 30
  },

  socialIcon: {
    marginHorizontal: 15
  },
  socialIconImage: {
    width: 50,
    height: 50
  }
})


function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser,
    loginUserStatus: state.user.loginUserStatus,
  };  
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);