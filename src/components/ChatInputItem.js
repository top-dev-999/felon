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

class ChatInputItem extends Component {

    constructor() {
        super()
    }

    render() {
        return(
            <View style={styles.chat_input_control}>
                <TextInput style={styles.chat_input} 
                        underlineColorAndroid="transparent" placeholder="Message">
                </TextInput>
                <TouchableOpacity>
                    <View style={styles.chat_send_control}>
                        <Image source={Images.icon_send} style={{width: 23, height: 23}} />
                    </View>
                </TouchableOpacity>
            </View>
        )
        
    }
    
}

export default ChatInputItem;

const styles = StyleSheet.create({
  chat_input_control: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: Colors.white,  
    paddingHorizontal: '5%', 
    paddingBottom: 10
  },

  chat_input: {
    flex: 1, 
    height: 50, 
    borderColor: Colors.green, 
    borderWidth: 2, 
    borderRadius: 20, 
    paddingHorizontal: 10
  },
  chat_send_control: {
    backgroundColor: Colors.green, 
    padding: 12, 
    borderRadius: 23.5, 
    marginLeft: 5
  }
})