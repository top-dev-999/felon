import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    TextInput, 
    Image, 
    Text, 
    ScrollView, 
    TouchableOpacity,
    Dimensions
} from 'react-native';

import Fonts from '../theme/Fonts'
import Images from '../theme/Images'
import Colors from '../theme/Colors'


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class TrendingItem extends Component {

    constructor() {
        super()
    }

    render() {
        const { item } = this.props;
        return(
          <TouchableOpacity style={{marginHorizontal: 5, aspectRatio: 1.1, 
            borderRadius: 10, width: screenWidth/2.3, backgroundColor:Colors.white}}>
            <Image source={Images.friend} style={{flex: 7, width: '100%'}} />
            <View style={{flex: 3, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'flex-start'}}>
              <Text style={styles.friendName}>{item.title}</Text>
              <Text style={styles.friendDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )
        
    }
    
}

export default TrendingItem;

const styles = StyleSheet.create({
  friendName: {
    color: '#222B45',
    fontSize: 13,
  },

  friendDescription: {
    fontSize: 10,
    color: '#8F9BB3',
  }, 
})