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

import {connect} from 'react-redux';
import AppStatusBar from '../components/AppStatusBar';

import HouseItem from '../components/HouseItem';

import Fonts from '../theme/Fonts'
import Images from '../theme/Images';
import Colors from '../theme/Colors';

import RoundButton from '../components/RoundButton';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class JobDetailsScreen extends Component {
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
              <Text style={styles.headerTitle}>Graphic Designer</Text>
            </View>
            <View style={styles.headerIcons}>
              <Image source={Images.search} style={{width: 20, height: 20}}/>
              <Image source={Images.notification} style={{width: 20, height: 20, marginLeft: 20}} />
            </View>
          </View> */}

          <View style={styles.detail_control}>
            <View style={{flex: 1}}>
              <View style={styles.header}>
                <View>
                  <Text style={styles.title}>Graphic Designer</Text>
                  <Text style={styles.description}>Company Name | San francisco, CA</Text>
                </View>
                
              </View>
              <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
                
                <View style={styles.facility}>
                  <Text style={styles.subtitle}>Facilities </Text>
                  <View style={styles.facilty_content}>
                    <View style={styles.facility_row}>
                      <View style={styles.facility_row_item}>
                        <Image source={Images.icon_tick} 
                              style={styles.facility_icon}
                              />
                        <Text style={styles.facility_text}>Easy to reach</Text>
                      </View>
                      <View style={styles.facility_row_item}>
                        <Image source={Images.icon_tick} 
                              style={styles.facility_icon}
                              />
                        <Text style={styles.facility_text}>With a Sea View</Text>
                      </View>
                    </View>
                    <View style={styles.facility_row}>
                      <View style={styles.facility_row_item}>
                        <Image source={Images.icon_tick} 
                              style={styles.facility_icon}
                              />
                        <Text style={styles.facility_text}>Second Floor</Text>
                      </View>
                      <View style={styles.facility_row_item}>
                        <Image source={Images.icon_tick} 
                              style={styles.facility_icon}
                              />
                        <Text style={styles.facility_text}>Gym with 400 m</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.detail}>
                  <Text style={styles.subtitle}>Details</Text>
                  <Text style={styles.detail_description}>
                    Donec vestibulum at leo eu suscipit. Pellentesque vitae odio id tortor scelerisque fringilla sit amet a tellus. Sed in dui at leo pellentesque ullamcorper. In a luctus eros, ut convallis neque. Vestibulum sit amet consectetur dui. Cras rutrum mauris diam, nec vulputate justo gravida eu. Aenean scelerisque erat ac tellus sagittis blandit.
                  </Text>
                </View>
                <View style={styles.salary}>
                  <Text style={styles.subtitle}>Salary Range</Text>
                  <Text style={styles.salary_description}>
                    $100k ~ $120k
                  </Text>
                </View>
              </ScrollView>
            </View>
            <RoundButton title="APPLY NOW"></RoundButton>
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

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: 8
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

  detail_control: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingBottom: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16
  },
  title: {
    fontSize: 17
  },
  description: {
    fontSize: 12
  },
  price: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#DCE1E5',
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 7
  },

  subtitle: {
    color: '#1E2022'
  },

  
  facilty_content: {
    paddingVertical: 10
  },  
  facility_row: {
    flexDirection: 'row',
    paddingVertical: 5
  },  
  facility_row_item: {
    flex: 1, 
    flexDirection: 'row',
  },
  facility_icon: {
    marginRight: 10
  },
  facility_text: {
    color: '#565656',
    fontSize: 14
  },
  detail_description: {
    fontSize: 13,
    color: '#77838F',
    paddingVertical: 10
  },
  salary_description: {
    fontSize: 13,
    color: '#77838F',
    paddingVertical: 10
  },
  page_title_control: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: '5%'
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

export default connect(mapStateToProps,mapDispatchToProps)(JobDetailsScreen);