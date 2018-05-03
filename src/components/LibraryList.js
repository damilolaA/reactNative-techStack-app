import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


class LibraryList extends Component {

	keyExtractor(item, index) {
		return item.title;
	}

	renderItem(item) {
		return <ListItem item={item}/>
	}

	render() {
		return(
			<FlatList 
				data={this.props.libraries}
				renderItem={this.renderItem}
				keyExtractor={this.keyExtractor}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {libraries: state.libraries};
}

export default connect(mapStateToProps)(LibraryList);