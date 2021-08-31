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
  FlatList
} from 'react-native';

import {connect} from 'react-redux';
import AppStatusBar from '../components/AppStatusBar';

import JobItem from '../components/JobItem';

import Fonts from '../theme/Fonts'
import Images from '../theme/Images';
import Colors from '../theme/Colors';
import { ScrollView } from 'react-native-gesture-handler';

import ImageGalleryItem from '../components/ImageGalleryItem';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class ProfileScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  
  constructor() {
    super();
    this.state = {
      avatars: [
        {
          id: 1,
          url: ''
        },
        {
          id: 2,
          url: ''
        },
        {
          id: 3,
          url: ''
        },
      ], 
    }
  };

  componentDidMount() {

  }


  componentWillUnmount() {

  }

  _onPress(item) {
    console.log(item);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.green}}>
        {/* <AppStatusBar /> */}
        {/* <Image source={Images.green_bg} style={styles.backgroundImage} /> */}
        <SafeAreaView style={{flex: 1}}>
          {/* <View style={styles.header}>
            <Text style={styles.headerTitle}>My Profile</Text>
            <View style={styles.headerIcons}>
              <Image source={Images.setting} style={{width: 20, height: 20}}/>
            </View>
          </View> */}

          <View style={styles.profile_control}>
            <Image source={Images.profile_avatar} style={styles.profile_avatar} />
            <Text style={styles.profile_name}>Jone Smith</Text>
            <Text style={styles.profile_description}>25 Yo - San fransisco</Text>
          </View>

          <View style={styles.profile_content}>
            <View style={styles.profile_avatars_control}>
              <Text style={styles.profile_content_title}>Photos</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}  
                >
                {
                  this.state.avatars.map((item) => {
                    return (
                      <ImageGalleryItem item={item} key={item.id}></ImageGalleryItem>
                    )
                  })
                }
                  
              </ScrollView>
            </View>
            <View style={styles.profle_aboutme_control}>
              <Text style={styles.profile_content_title}>About Me</Text>
              <ScrollView>
                <Text style={styles.profile_aboutme}>Donec vestibulum at leo eu suscipit. Pellentesque vitae odio id tortor scelerisque fringilla sit amet a tellus. Sed in dui at leo pellentesque ullamcorper. In a luctus eros, ut convallis neque. Vestibulum sit amet consectetur dui.</Text>
              </ScrollView>
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

  backgroundImage: {
    width: screenWidth,
    height: screenHeight,
    position: 'absolute',
    top: 0,
    left: 0
  },

  welcomeTitle: {
    fontFamily: Fonts.arial,
    fontSize: 18,
    color: 'red'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: 10
  },

  headerTitle: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Fonts.opensans
  },

  headerIcons: {
    flexDirection: 'row'
  },

  profile_control: {
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    paddingBottom: 10,
    marginTop: screenHeight* 0.15/2 + 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20
  },

  profile_content: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    paddingHorizontal: '5%'
  },

  profile_avatar: {
    marginTop: screenHeight*(-0.15) / 2,
    height: screenHeight* 0.15,
    width: screenHeight* 0.15
  },

  profile_name: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  profile_description: {
    fontSize: 14,
    color: '#8F9BB3'
  },

  profile_content_title: {
    fontSize: 13,
    color: Colors.black,
    paddingVertical: 5
  },

  profile_aboutme: {
    color: '#77838F',
    fontSize: 13
  },

  profile_avatars_control: {
    paddingVertical: 5
  },

  profle_aboutme_control: {
    paddingVertical: 5
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

export default connect(mapStateToProps,mapDispatchToProps)(ProfileScreen);