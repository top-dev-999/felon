import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    TextInput, 
    Image, 
    Text, 
    ScrollView, 
    TouchableOpacity,
    ImageBackground,
    Dimensions
} from 'react-native';

import Fonts from '../theme/Fonts'
import Images from '../theme/Images'
import Colors from '../theme/Colors'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class HouseItem extends Component {

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
            <ImageBackground source={Images.house} style={styles.houseitem}>
              <View style={{paddingHorizontal: 10, paddingVertical: 10, borderRadius: 10, height: screenHeight/4, flexDirection: 'column-reverse' }}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
                  <Text style={styles.houseAddress}>{item.type} . {item.city}, {item.state}</Text>
                  <Text style={styles.housePrice}>{item.unit}{item.price}</Text>
                </View>
                <Text style={styles.houseTitle}>{item.title}</Text>
              </View>
            </ImageBackground>

          </TouchableOpacity>
        )
        
    }
    
}

export default HouseItem;

const styles = StyleSheet.create({
  houseitem: {
    flex: 1,
    width: null,
    height: null
  },
  houseAddress: {
    fontSize: 12,
    color: Colors.white
  },
  houseTitle: {
    fontSize: 17,
    color: Colors.white
  },
  housePrice: {
    fontSize: 17,
    color: Colors.white
  }
})