import React from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import { Link } from '../compat/routing';

export class ActivityListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <View style={styles.activityView}>
        <Link to={'/activity/' + this.props.id}>
          <Text style={styles.activityName}>[{this.state.count}] {this.props.name}</Text>
        </Link>
        <TouchableHighlight onPress={() => this.addEvent()}>
          <View style={[styles.buttonView, { backgroundColor: this.props.color }]}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  componentWillMount() {
    firebase.database().ref(`/events/${this.props.id}`).on('value', (snapshot) => {
      this.setState({ count: snapshot.numChildren() });
    });
  }

  componentWillUnmount() {
    firebase.database().ref(`/events/${this.props.id}`).off('value');
  }

  addEvent() {
    const date = new Date().getTime();
    firebase.database().ref(`/events/${this.props.id}/${date}`).set(1);
  }
}

const styles = StyleSheet.create({
  activityView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    padding: 10,
    borderColor: '#999999',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  activityName: {
    color: '#333333',
    fontSize: 24,
  },
  buttonView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(33, 150, 243)',
    borderRadius: 2,
    padding: 5,
    width: 34,
    height: 34
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    height: 24
  },
});
