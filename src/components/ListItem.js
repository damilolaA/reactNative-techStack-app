import React, { Component } from 'react';
import { 
	Text, 
	TouchableWithoutFeedback, 
	View,
	LayoutAnimation 
} from 'react-native';
import { connect } from 'react-redux'
import { CardSection } from './common/CardSection';
import * as actions from '../actions';

class ListItem extends Component {

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		const { library, selectedLibraryId } = this.props;
		
		if(library.id === selectedLibraryId) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }}>
						{library.description}
					</Text>
				</CardSection>
			);
		}
	}

	render() {
		const { titleStyle } = styles;
		const { id, title } = this.props.library;

		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection >
						<Text style={titleStyle }>
							{this.props.library.title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

const mapStateToProps = state => {
	return { selectedLibraryId: state.selectedLibraryId }
}

export default connect(mapStateToProps, actions)(ListItem);