import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './src/components/common/Index';
import { LoginForm } from './src/components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyD5X6b2iTdo5WaT9epEBPXSzs-Ylenr_cQ",
      authDomain: "sencechat.firebaseapp.com",
      databaseURL: "https://sencechat.firebaseio.com",
      projectId: "sencechat",
      storageBucket: "sencechat.appspot.com",
      messagingSenderId: "87424703711"
    }
    firebase.initializeApp(config)

    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        this.setState({
          loggedIn: true
        })
      } else {
        this.setState({
          loggedIn: false
        })
      }
    })

  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={ () => firebase.auth().signOut() }>
              Salir
            </Button>
          </CardSection>
        )

      case false:
        return <LoginForm />

      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Acceso" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;