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

import HouseItem from '../components/HouseItem';

import Fonts from '../theme/Fonts'
import Images from '../theme/Images';
import Colors from '../theme/Colors';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class HouseScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  
  constructor() {
    super();
    this.state = {
      houses: [
        {
          id: 1,
          title: '1592 Branch St, San francisco',
          type: 'Appartment',
          city: 'San francisco',
          state: 'CA',
          price: 550,
          unit: '$'
        },
        {
          id: 2,
          title: '1592 Branch St, San francisco',
          type: 'Appartment',
          city: 'San francisco',
          state: 'CA',
          price: 550,
          unit: '$'
        },
        {
          id: 3,
          title: '1592 Branch St, San francisco',
          type: 'Appartment',
          city: 'San francisco',
          state: 'CA',
          price: 550,
          unit: '$'
        },
        {
          id: 4,
          title: '1592 Branch St, San francisco',
          type: 'Appartment',
          city: 'San francisco',
          state: 'CA',
          price: 550,
          unit: '$'
        },
      ]
    };
  };

  componentDidMount() {

  }


  componentWillUnmount() {

  }

  toHouseDetail(item) {
    this.props.navigation.navigate('HouseDetails');
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.green}}>
        {/* <AppStatusBar /> */}
        {/* <Image source={Images.green_bg} style={styles.backgroundImage} /> */}
        <SafeAreaView style={{flex: 1}}>
          {/* <View style={styles.header}>
            <Text style={styles.headerTitle}>Housing</Text>
            <View style={styles.headerIcons}>
              <Image source={Images.search} style={{width: 20, height: 20}}/>
              <Image source={Images.notification} style={{width: 20, height: 20, marginLeft: 20}} />
            </View>
          </View> */}

          <View style={styles.headerTab}>
              <Text style={styles.bodyTitle}>Most Popular</Text>
              <Text style={styles.bodyFilterText}>Filter</Text>
          </View>

          <View style={styles.housesControl}>
              <View style={{ flex: 1, paddingBottom: 10}}>
                <FlatList
                  data = {this.state.houses}
                  renderItem={({ item, index, separators }) => (
                    <HouseItem item= {item}
                      onPress={() => this.toHouseDetail(item)}
                      />
                  )}
                />
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

  headerTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    paddingVertical: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20
  },

  headerTabButton: {
    flex: 1, 
    alignItems:'center', 
    justifyContent: 'center', 
    backgroundColor: Colors.green, 
    paddingVertical: 5, 
    height: 40,
    borderRadius: 20, 
    marginHorizontal: 20
  },

  headerTabButtonText: {
    color: Colors.white,
    fontSize: 18,
  },

  bodyTitle: {
    fontSize: 17,
    color: '#222B45',
    fontWeight: '400'
  },

  bodyFilterText: {
    fontSize: 15,
    color: Colors.green
  },

  

  housesControl: {
    flex: 1,
    paddingHorizontal: '5%',
    backgroundColor: Colors.white,
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

export default connect(mapStateToProps,mapDispatchToProps)(HouseScreen);