import React from 'react';
import { AsyncStorage, Platform, StyleSheet, View, Button, ScrollView, Dimensions } from 'react-native';
import * as firebase from 'firebase';
import { LoginScreen } from './login-screen';
import { MainScreen } from './main-screen';
import { SingleActivityScreen } from './activity/single-activity-screen';
import { SingleGroupScreen } from './group/single-group-screen';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Route, Router } from './compat/routing';
import Toast from 'react-native-easy-toast'

const initializeOnce = _.once(() => {
  const config = {
    apiKey: 'AIzaSyCeBVaIXYwjEpU289jf7JCeq0zMfzWUxoU',
    authDomain: 'last-time-b6bf0.firebaseapp.com',
    databaseURL: 'https://last-time-b6bf0.firebaseio.com',
  };
  firebase.initializeApp(config);

  if (Platform.OS !== 'web') {
    global.localStorage = class {
      static clear() {
        AsyncStorage.clear();
      }

      static getItemPromise(keyName) {
        return new Promise((resolve, reject) => {
          AsyncStorage.getItem(keyName, (e, value) => {
            if (e) reject(e);
            else resolve(value);
          });
        })
      }

      static async getItem(keyName) {
        return await this.getItemPromise(keyName);
      }

      static key(key) {
        return null;
      }

      static removeItem(keyName) {
        AsyncStorage.removeItem(keyName);
      }

      static setItem(keyName, keyValue) {
        AsyncStorage.setItem(keyName, keyValue);
      }
    };
  }
});
initializeOnce();

class ToastHolder {
  constructor() {
    this.toast = null;
  }

  setToast(toast) {
    this.toast = toast;
  }

  getToast() {
    return this.toast;
  }
}

export class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.toast = new ToastHolder();
  }

  static childContextTypes = {
    Toast: PropTypes.object,
  };

  getChildContext() {
    return {
      Toast: this.toast,
    };
  }

  updateRef(ref) {
    this.toast.setToast(ref);
  }

  render() {
    return (
      <View style={styles.root}>
        <ScrollView>
          <Router>
            <View>
              <Route path='/' component={ ExampleApp } />
              <Route path='/activity/:id' component={ SingleActivityScreen } />
              <Route path='/group/:id' component={ SingleGroupScreen } />
            </View>
          </Router>
        </ScrollView>
        <Toast ref={(ref) => this.updateRef(ref)} />
      </View>
    );
  }
}

export class ExampleApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      //console.log('user', user);
      this.setState({ user });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.user ? <MainScreen /> : <LoginScreen /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
  },
});
