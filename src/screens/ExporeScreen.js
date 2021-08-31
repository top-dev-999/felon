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
  TextInput
} from 'react-native';

import {connect} from 'react-redux';
import AppStatusBar from '../components/AppStatusBar';

import { SearchBar } from 'react-native-elements';

import Fonts from '../theme/Fonts'
import Images from '../theme/Images';
import Colors from '../theme/Colors';
import { ScrollView } from 'react-native-gesture-handler';

import TrendingItem from '../components/TrendingItem';
import LifecycleItem from '../components/LifecycleItem';

import SearchInput from '../components/SearchInput';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class ExploreScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  
  constructor() {
    super();
    this.state = {
      trendings: [
        {
          id: 1,
          title: 'Nike sues Over',
          description: '1 mile away'
        },
        {
          id: 2,
          title: 'Nike sues Over',
          description: '1 mile away'
        },
        {
          id: 3,
          title: 'Nike sues Over',
          description: '1 mile away'
        },
      ],
      lifecycles: [
        {
          id: 1,
          name: 'Future of work',
          date: '4 Mar, 2021',
          isFavourite: false
        },
        {
          id: 2,
          name: 'Future of work',
          date: '4 Mar, 2021',
          isFavourite: false
        },
        {
          id: 3,
          name: 'Future of work',
          date: '4 Mar, 2021',
          isFavourite: false
        },
      ],
      isExploreSelected: false
    };
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
        <AppStatusBar
      backgroundColor="transparent"
      translucent={true}/>
        {/* <Image source={Images.green_bg} style={styles.backgroundImage} /> */}
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>EXPLORE</Text>
            <View style={styles.headerIcons}>
              <Image source={Images.notification} style={{width: 20, height: 20}} />
            </View>
          </View>
          <View style={{paddingHorizontal: '5%', paddingBottom: 5}}>
            <SearchInput />
          </View>
          <View style={styles.headerTab}>
            <TouchableOpacity style={styles.headerTabButton }>
              <Text style={styles.headerTabButtonText}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerTabButtonInactive}>
              <Text style={styles.headerTabButtonTextInactive}>Offers and Coupons</Text>
            </TouchableOpacity>
          </View>     

          <ScrollView style={{flex: 1}}>
            <View style={{flexDirection: 'row', alignItems:'baseline', justifyContent: 'space-between', 
                          paddingHorizontal: '5%', paddingVertical: 10, backgroundColor: Colors.white}}>
              <Text style={styles.bodyTitle}>Trending</Text>
              <Text style={styles.bodyFilterText}>View All</Text>
            </View>

            <View style={{flexDirection: 'row', paddingHorizontal: '2%', backgroundColor:'#F6F7FA'}}>
              
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}  
                >
                {
                  this.state.trendings.map((item) => {
                    return (
                      <TrendingItem item={item} key={item.id}></TrendingItem>
                    )
                  })
                }
                  
              </ScrollView>
            </View>
            
            <View style={{flexDirection: 'row', alignItems:'baseline', justifyContent: 'space-between', 
                          paddingHorizontal: '5%', paddingVertical: 10, backgroundColor: Colors.white}}>
              <Text style={styles.bodyTitle}>Millennial Lifestyle</Text>
              <Text style={styles.bodyFilterText}>View All</Text>
            </View>

            <View style={styles.lifecycleControl}>
                <View style={{paddingBottom: 10}}>
                  {
                    this.state.lifecycles.map((item) => {
                      return(
                        <LifecycleItem item={item} key={item.id} />
                      )
                    })
                  }
                </View>
            </View>
          
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
    height: 30,
    borderRadius: 20, 
    marginHorizontal: 10
  },
  headerTabButtonInactive: {
    flex: 1, 
    alignItems:'center', 
    justifyContent: 'center', 
    paddingVertical: 5, 
    height: 30,
    borderRadius: 20, 
    marginHorizontal: 10,
  },

  headerTabButtonText: {
    color: Colors.white,
    fontSize: 13,
  },

  headerTabButtonTextInactive: {
    color: '#B8BBC6',
    fontSize: 13
  },

  bodyTitle: {
    fontSize: 16,
  },

  bodyFilterText: {
    fontSize: 15,
    color: Colors.green
  },

  lifecycleControl: {
    
    paddingHorizontal: '5%',
    backgroundColor: Colors.white,
  },
  

  messageControl: {
    flex: 1,
    paddingHorizontal: '5%',
    backgroundColor: '#F6F7FA',
    paddingTop: 10,
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

export default connect(mapStateToProps,mapDispatchToProps)(ExploreScreen);