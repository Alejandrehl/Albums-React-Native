import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import axios from 'axios';
import CardSection from './CardSection';

export default class Card extends Component<{}> {

  render() {
    return (
      <View style={styles.containerStyle}>
      	{this.props.children}
      </View>
    );
  }

};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000000',
	  	shadowOffset: {
	  		width: 0,
	  		height: 2
	  	},
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
	}
}