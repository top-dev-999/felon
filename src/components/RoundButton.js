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

class RoundButton extends Component {

    constructor() {
        super()
    }

    render() {

      return (
          <TouchableOpacity style={styles.roundButton} onPress={() => this.props.onPress()}>
              <Text style={styles.roundButtonText}>{this.props.title}</Text>
          </TouchableOpacity>
      )
    }
    
}

export default RoundButton;

const styles = StyleSheet.create({
  roundButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 26,
    height: 52,
    backgroundColor: Colors.green,
    width: '100%'
  },

  roundButtonText: {
      color: Colors.white,
      fontSize: 15
  },
})