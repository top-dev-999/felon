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

class ImageGalleryItem extends Component {

    constructor() {
        super()
    }

    render() {
        const { item } = this.props;
        return(
          <TouchableOpacity style={{marginHorizontal: 5, aspectRatio: 1, 
            width: screenWidth/3, backgroundColor:Colors.white}}>
            <Image source={Images.friend} style={{width: '100%', borderRadius: 20}} />
          </TouchableOpacity>
        )
        
    }
    
}

export default ImageGalleryItem;

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