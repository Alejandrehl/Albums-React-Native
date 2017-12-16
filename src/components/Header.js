import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Header extends Component<{}> {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: { 
  	fontSize: 20,
  },
  viewStyle: {
  	backgroundColor: 'white',
  	justifyContent: 'center',
  	alignItems: 'center',
  	height: 60,
  	paddingTop: 15,
  	shadowColor: '#000000',
  	shadowOffset: {
  		width: 0,
  		height: 2
  	},
  	shadowOpacity: 0.5,
  	elevation: 2,
  	position: 'relative',
  },
});
