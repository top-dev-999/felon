import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    TextInput, 
    Image, 
    Text, 
    ScrollView, 
    TouchableOpacity 
} from 'react-native';

import Fonts from '../theme/Fonts'
import Images from '../theme/Images'
import Colors from '../theme/Colors'

class MessageItem extends Component {

    constructor() {
        super()
    }

    render() {
        const { item, onPress } = this.props;
        return(
          <TouchableOpacity
            style={{marginVertical: 5}}
            key={item.id}
            onPress={onPress}
          >
            <View style={styles.messageItem}>
              <Image source={Images.messageAvatar} width='40' height='40' />
              <View style={{flex: 1, justifyContent: 'flex-start', paddingLeft: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
        
    }
    
}

export default MessageItem;

const styles = StyleSheet.create({
  time: {
    fontSize: 11,
    color: '#929292'
  },
  description: {
    fontSize: 12,
    color: '#313131'
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#5D5D5D'
  },
  messageItem: { 
    backgroundColor: 'white', 
    borderRadius: 10, 
    flexDirection: 'row', 
    padding: 10,
  }
})