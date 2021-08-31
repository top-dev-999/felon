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

class JobItem extends Component {

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
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.company} | {item.location}</Text>
              <Text style={styles.description}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )
        
    }
    
}

export default JobItem;

const styles = StyleSheet.create({
  title: {
    color: '#222B45',
    fontSize: 18
  },
  description: {
    fontSize: 14,
    color: '#8F9BB3'
  }  
})