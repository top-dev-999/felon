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

import { Icon } from 'react-native-elements'

import Fonts from '../theme/Fonts'
import Images from '../theme/Images'
import Colors from '../theme/Colors'

class SearchInput extends Component {

	constructor() {
		super()
	}

	render() {
		return (
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="search"
					underlineColorAndroid="transparent"
				/>
				<Image source={Images.icon_search} style={styles.icon} />
			</View>
		)

	}

}

export default SearchInput;

const styles = StyleSheet.create({
	inputContainer: {
		position: 'relative',
    justifyContent: 'center',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  },
  input: {
    height: 44,  
		backgroundColor: Colors.white,
		borderRadius: 5,
		paddingLeft: 10,
		paddingRight: 32,
  },
  icon: {
    position: 'absolute',
    right: 10,
		top: 16,
		width: 12, 
		height: 12
  }
})