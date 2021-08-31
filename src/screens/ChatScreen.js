import React, { Component } from 'react';
import {
	View,
	Image,
	Text,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	Keyboard,
	PermissionsAndroid,
	Platform,
	Dimensions,
	FlatList,
	ImageBackground,
	ScrollView,
	TextInput
} from 'react-native';

import { Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import AppStatusBar from '../components/AppStatusBar';



import Fonts from '../theme/Fonts'
import Images from '../theme/Images';
import Colors from '../theme/Colors';

import SeperatorLine from '../components/SeperatorLine';
import ChatInputItem from '../components/ChatInputItem';
import ChatItem from '../components/ChatItem';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class SettingScreen extends Component {
	static navigationOptions = {
		headerShown: false,
	};


	constructor() {
		super();
		this.state = {
			chat: [
				{
					id: 1,
					type: 'client',
					time: 'Today AT 7.00 A.M',
					text: 'Loprenfdsafsdf'
				},
				{
					id: 2,
					type: 'me',
					time: 'Today AT 7.00 A.M',
					text: 'Loprenfdsafsdf'
				},
			]
		};
	};

	componentDidMount() {
		
	}


	componentWillUnmount() {

	}

	_onPress(item) {
		console.log(item);
	}

	onBack() {
		console.log('on back');
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: Colors.green }}>
				{/* <AppStatusBar hidden /> */}
				{/* <Image source={Images.green_bg} style={styles.backgroundImage} /> */}
				<SafeAreaView style={{ flex: 1 }}>
					{/* <View style={styles.page_title_control}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<TouchableOpacity onPress={() => this.onBack()}>
								<Image source={Images.arrow_left} style={{ width: 9, height: 18 }}></Image>
							</TouchableOpacity>
							<Text style={styles.headerTitle}>Sara</Text>
						</View>
					</View> */}

					<View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: Colors.green }}>
						<ScrollView style={styles.chat_control} showsVerticalScrollIndicator={true}>
							{
								this.state.chat.map((item) => {
									return(
										<ChatItem key={item.id} type= {item.type}
												time= {item.time} text= {item.text} ></ChatItem>
									)
								})
							}
						</ScrollView>
						<ChatInputItem />
					</View>
				</SafeAreaView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center'
	},

	backgroundImage: {
		width: screenWidth,
		height: screenHeight,
		position: 'absolute',
		top: 0,
		left: 0
	},

	page_title_control: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 12,
		paddingHorizontal: '5%'
	},

	headerTitle: {
		color: Colors.white,
		fontSize: 17,
		fontWeight: 'bold',
		fontFamily: Fonts.opensans
	},

	chat_control: {
		flex: 1,
		backgroundColor: '#F6F7FA',
		paddingBottom: 10,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingHorizontal: '5%',
		paddingTop: 10
	},

	msg_back: {
		resizeMode: 'cover',
		width: null,
		height: null,
	}



})


function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	return {
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);