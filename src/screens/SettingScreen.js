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
  FlatList,
  ImageBackground,
  ScrollView
} from 'react-native';

import {ListItem} from 'react-native-elements';

import {connect} from 'react-redux';
import AppStatusBar from '../components/AppStatusBar';



import Fonts from '../theme/Fonts'
import Images from '../theme/Images';
import Colors from '../theme/Colors';

import SeperatorLine from '../components/SeperatorLine';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class SettingScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  
  constructor() {
    super();
    this.state = {
    };
  };

  componentDidMount() {

  }


  componentWillUnmount() {

  }

  _onPress(item) {
    console.log(item);
  }

  onBack() {
    console.log('on back');
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.green}}>
        {/* <AppStatusBar /> */}
        {/* <Image source={Images.green_bg} style={styles.backgroundImage} /> */}
        <SafeAreaView style={{flex: 1}}>
          {/* <View style={styles.page_title_control}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.onBack()}>
                <Image source={Images.arrow_left} style={{width: 20, height: 20}}></Image>
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Settings</Text>
            </View>
          </View> */}

          <ScrollView style={styles.setting_control}>
            <View style={styles.setting_item}>
              <Image source={Images.setting_profile}></Image>
              <Text style={styles.setting_text}>Edit Profile</Text>
            </View>
            <SeperatorLine />
            <View style={styles.setting_item}>
              <Image source={Images.setting_profile}></Image>
              <Text style={styles.setting_text}>Push Notification</Text>
            </View>
            <SeperatorLine />
            <View style={styles.setting_item}>
              <Image source={Images.setting_profile}></Image>
              <Text style={styles.setting_text}>Activity History</Text>
            </View>
            <SeperatorLine />
            <View style={styles.setting_item}>
              <Image source={Images.setting_profile}></Image>
              <Text style={styles.setting_text}>Upgrade to PRO</Text>
            </View>
            <SeperatorLine />
            <View style={styles.setting_item}>
              <Image source={Images.setting_profile}></Image>
              <Text style={styles.setting_text}>Security & Privacy</Text>
            </View>
            <SeperatorLine />
            <View style={styles.setting_item}>
              <Image source={Images.setting_profile}></Image>
              <Text style={styles.setting_text}>Help</Text>
            </View>
            <SeperatorLine />
          </ScrollView>
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

  backgroundImage: {
    width: screenWidth,
    height: screenHeight,
    position: 'absolute',
    top: 0,
    left: 0
  },

  page_title_control: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: '5%'
  },

  headerTitle: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Fonts.opensans
  },

  setting_control: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingBottom: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  setting_item: {
    flexDirection: 'row',
    padding: 20
  },
  setting_text: {
    paddingLeft: 16,
    fontSize: 16,
    color: '#454D5B'
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

export default connect(mapStateToProps,mapDispatchToProps)(SettingScreen);