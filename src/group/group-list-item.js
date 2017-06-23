import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import * as firebase from 'firebase';
import _ from 'lodash';
import { Link } from '../compat/routing';

export class GroupListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      group: null,
      activities: [],
    };
  }

  render() {
    const buttons = _.map(this.state.activities || [], (activity) => {
      return (
        <View key={activity.id} style={{ flex: 1, alignItems: 'center' }}>
          <Text>
            { activity.name }
          </Text>
          <TouchableHighlight onPress={() => this.addEvent(activity.id)}>
            <View style={[styles.buttonView, { backgroundColor: activity.color }]}>
              <Text style={styles.buttonText}>+</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    });

    return (
      <View style={styles.activityView}>
        <Link style={{ flex: 1 }} to={'/group/' + this.props.id}>
          <Text style={styles.activityName}>{this.props.name}</Text>
        </Link>
        { buttons }
      </View>
    );
  }

  componentWillMount() {
    const id = this.props.id;
    firebase.database().ref('/groups/' + id).once('value', (snapshot) => {
      const group = snapshot.val();
      this.setState({ group });
      (group.activities || []).forEach((aId) => {
        firebase.database().ref('/activities/' + aId).once('value', (snapshot) => {
          const activities = _(this.state.activities)
            .concat({
                ...snapshot.val(),
              id: aId,
            })
            .orderBy('name')
            .value();
          this.setState({ activities });
        });
      });
    });
  }

  componentWillUnmount() {
    firebase.database().ref(`/groups/${this.props.id}`).off('value');
    (this.state.activities || []).forEach((activity) => {
      firebase.database().ref('/activities/' + activity.id).off('value');
    });
  }

  addEvent(activity) {
    const date = new Date().getTime();
    firebase.database().ref(`/events/${activity}/${date}`).set(1);
  }
}

const styles = StyleSheet.create({
  activityView: {
    flex: 1,
    flexDirection: 'row',
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
