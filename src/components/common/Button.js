import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenPressed, children }) => {

	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity style={buttonStyle} onPress={whenPressed}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>	
	);
}

const styles = {
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderColor: '#007aff',
		borderRadius: 5,
		borderWidth: 1,
		marginLeft: 5,
		marginRight: 5
	},
	textStyle: {
		fontSize: 16,
		fontWeight: '600',
		color: '#007aff',
		alignSelf: 'center',
		paddingTop: 10,
		paddingBottom: 10
	}
}

export { Button };