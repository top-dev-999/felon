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
import JobItem from './JobItem';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class ChatItem extends Component {

    constructor() {
        super()
    }

    render() {
        const { type, time, text } = this.props;
        return(
            (type == 'client') ? 
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                <View style={{ backgroundColor: Colors.white, borderRadius: 5 }}>
                    <Text style={{ padding: 10, maxWidth: screenWidth*0.7 }}>{text}</Text>
                </View>
                <Text style={{ fontSize: 10, fontWeight: '100', marginHorizontal: 5, maxWidth: screenWidth*0.2}}>{time}</Text>
            </View> :
            <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                <View style={{ backgroundColor: Colors.green, borderRadius: 5 }}>
                    <Text style={{ padding: 10 }}>{text}</Text>
                </View>
                <Text style={{ fontSize: 10, fontWeight: '100', marginHorizontal: 5 }}>{time} </Text>
            </View>
        )
        
    }
    
}

export default ChatItem;

const styles = StyleSheet.create({
  
})