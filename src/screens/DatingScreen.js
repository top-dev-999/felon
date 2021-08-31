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

import FriendCardItem from '../components/FriendCardItem';
import MessageItem from '../components/MessageItem';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class DatingScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  
  constructor() {
    super();
    this.state = {
      friends: [
        {
          id: 1,
          name: 'Adam Smith',
          age: 25,
          location: 'San fransisco, CA'
        },
        {
          id: 2,
          name: 'Jone Doe',
          age: 20,
          location: 'San fransisco, CA'
        },
        {
          id: 3,
          name: 'Sara',
          age: 10,
          location: 'San fransisco, CA'
        },
      ],
      messages: [
        {
          id: 1,
          name: 'Anna',
          description: 'Some text may be here.....',
          time: '10:00 AM'
        },
        {
          id: 2,
          name: 'Sara',
          description: 'Some text may be here.....',
          time: '10:00 AM'
        },
        {
          id: 3,
          name: 'Launa',
          description: 'Some text may be here.....',
          time: '10:00 AM'
        },
        {
          id: 4,
          name: 'Samantha',
          description: 'Some text may be here.....',
          time: '10:00 AM'
        },
      ]
    };
  };

  componentDidMount() {

  }


  componentWillUnmount() {

  }

  toChat(item) {
    this.props.navigation.navigate('Chat');
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.green}}>
        {/* <AppStatusBar style={{paddingVertical: 0, color: 'white',}} /> */}
        {/* <Image source={Images.green_bg} style={styles.backgroundImage} /> */}
        <SafeAreaView style={{flex: 1}}>
          {/* <View style={styles.header}>
            <Text style={styles.headerTitle}>Dating</Text>
            <View style={styles.headerIcons}>
              <Image source={Images.search} style={{width: 20, height: 20}}/>
              <Image source={Images.notification} style={{width: 20, height: 20, marginLeft: 20}} />
            </View>
          </View> */}

          <View style={styles.headerTab}>
              <Text style={styles.bodyTitle}>People who may know you</Text>
              <Text style={styles.bodyFilterText}>Filter</Text>
          </View>

          <View style={{flexDirection: 'row', paddingHorizontal: '2%', backgroundColor:'#F6F7FA'}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}  
              >
              {
                this.state.friends.map((item) => {
                  return (
                    <FriendCardItem item={item} key={item.id}></FriendCardItem>
                  )
                })
              }
                
            </ScrollView>
          </View>
          
          <View style={styles.messageControl}>
              <Text style={styles.bodyTitle}>Messages</Text>
              <View style={{ flex: 1, paddingVertical: 10}}>
                <FlatList
                  data = {this.state.messages}
                  renderItem={({ item, index, separators }) => (
                    <MessageItem item= {item}
                        onPress={() => this.toChat(item)}
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
    fontSize: 16,
  },

  bodyFilterText: {
    fontSize: 15,
    color: Colors.green
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

export default connect(mapStateToProps,mapDispatchToProps)(DatingScreen);