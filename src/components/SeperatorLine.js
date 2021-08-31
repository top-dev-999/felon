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

class SeperatorLine extends Component {

    constructor() {
        super()
    }

    render() {
        const { item } = this.props;
        return(
          <View style={styles.hairline} />
        )
        
    }
    
}

export default SeperatorLine;

const styles = StyleSheet.create({
  hairline: {
    backgroundColor: '#E4E4E4',
    height: 1,
    width: '100%'
  },
})