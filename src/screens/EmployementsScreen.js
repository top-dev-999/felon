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


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class EmploymentsScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  
  constructor() {
    super();
    this.state = {
      jobs : [
        {
          id: 1,
          title: "Graphic Designer",
          company: "Company Name",
          location: "San francisco, CA",
          date: "Mar 5 2021"
        },
        {
          id: 2,
          title: "Statistician",
          company: "Company Name",
          location: "San francisco, CA",
          date: "Mar 5 2021"
        },
        {
          id: 3,
          title: "IT Manager",
          company: "Company Name",
          location: "San francisco, CA",
          date: "Mar 5 2021"
        },
        {
          id: 4,
          title: "Marketer",
          company: "Company Name",
          location: "San francisco, CA",
          date: "Mar 5 2021"
        },
        {
          id: 5,
          title: "Web Developer",
          company: "Company Name",
          location: "San francisco, CA",
          date: "Mar 5 2021"
        },
        {
          id: 6,
          title: "Driver",
          company: "Company Name",
          location: "San francisco, CA",
          date: "Mar 5 2021"
        },
        {
          id: 7,
          title: "Cleaner",
          company: "Company Name",
          location: "San francisco, CA",
          date: "Mar 5 2021"
        },
        {
          id: 8,
          title: "Singer",
          company: "Company Name",
          location: "San francisco, CA",
          date: "Mar 5 2021"
        },
        {
          id: 9,
          title: "Book Writer",
          company: "Company Name",
          location: "San francisco, CA",
          date: "Mar 5 2021"
        },
        {
          id: 10,
          title: "Barber",
          company: "Company Name",
          location: "San francisco, CA",
          date: "Mar 5 2021"
        },
      ]
    }
  }

  componentDidMount() {

  }


  componentWillUnmount() {

  }

  toJobDetails(item) {
    this.props.navigation.navigate('JobDetails');

  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.green}}>
        {/* <AppStatusBar /> */}
        {/* <Image source={Images.green_bg} style={styles.backgroundImage} /> */}
        <SafeAreaView style={{flex: 1}}>
          

          <View style={styles.headerTab}>
            <TouchableOpacity style={[styles.headerTabButton, styles.selectedTabButton]}>
              <Text style={[styles.headerTabButtonText, styles.selectedTabText]}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerTabButton}>
              <Text styles={styles.headerTabButtonText}>My Applications</Text>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, backgroundColor: Colors.bgGray}}>
            <View style={{flexDirection: 'row', alignItems:'baseline', justifyContent: 'space-between', 
                          paddingHorizontal: '5%', paddingTop: 10}}>
              <Text style={styles.bodyTitle}>Trending</Text>
              <Text style={styles.bodyFilterText}>Filter</Text>
            </View>

            <View style={{paddingHorizontal: '5%', flex: 1, paddingVertical: 10}}>
              <FlatList
                data = {this.state.jobs}
                renderItem={({ item, index, separators }) => (
                  <JobItem item= {item}
                          onPress = {() => this.toJobDetails(item)} />
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
    paddingVertical: 20
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
    paddingVertical: 5, 
    height: 30,
    borderRadius: 20, 
    marginHorizontal: 10
  },

  headerTabButtonText: {
    color: '#B8BBC6',
    fontSize: 13,
  },

  selectedTabButton: {
    backgroundColor: Colors.green
  },

  selectedTabText: {
    color: Colors.white
  },

  bodyTitle: {
    fontSize: 17,
  },

  bodyFilterText: {
    fontSize: 15,
    color: Colors.green
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

export default connect(mapStateToProps,mapDispatchToProps)(EmploymentsScreen);