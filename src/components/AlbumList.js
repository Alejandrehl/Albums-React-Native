import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class AlbumList extends Component<{}> {
  componentWillMount(){
    console.log('componentWillMount in AlbumList');
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});