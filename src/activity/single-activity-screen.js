import React from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import * as firebase from 'firebase';
import * as joda from 'js-joda';
import _ from 'lodash';
import { Back } from '../compat/routing';
import { Chart } from '../compat/charts';
import PropTypes from 'prop-types';

class EditActivityName extends React.Component {
  static contextTypes = {
    Toast: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  render() {
    return (
      <View style={styles.editActivityContainer}>
        <TextInput
          placeholder={this.props.name}
          style={styles.nameInput}
          onChangeText={(name) => this.setState({ name })} />
        <Button title='Change' onPress={() => this.onPressChange()} />
      </View>
    );
  }

  onPressChange() {
    if (this.props.id && this.state.name.trim() !== '') {
      firebase.database().ref(`/activities/${this.props.id}/name`).set(this.state.name, () => {
        this.context.Toast.getToast().show('Name changed');
      });
    }
    this.props.onDone();
  }
}

export class SingleActivityScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: null,
      events: [],
      editing: false,
    };
  }

  componentWillMount() {
    const id = this.props.params.id;
    firebase.database().ref('/activities/' + id).on('value', (snapshot) => {
      this.setState({
        activity: snapshot.val(),
      });
    });
    firebase.database().ref('/events/' + id).on('value', (snapshot) => {
      const events = _.map(_.keys(snapshot.toJSON()), (v) => joda.LocalDateTime._ofEpochMillis(v, joda.ZoneOffset.ofHours(-3)));
      this.setState({ events });
    });
  }

  componentWillUnmount() {
    const id = this.props.params.id;
    firebase.database().ref('/activities/' + id).off('value');
    firebase.database().ref('/events/' + id).off('value');
  }

  render() {
    const events = _.map(this.state.events, (e) => <Text key={e.toString()}>{e.toString()}</Text>);
    const eventsData = _(this.state.events)
      .map((e) => {
        return e.toLocalDate().toString();
      })
      .countBy()
      .map((v, k) => {
        return { day: k, count: v };
      })
      .value();

    return (
      <View style={{ flex: 1 }}>
        { this.state.editing ?
          <EditActivityName
            id={this.props.params.id}
            name={this.state.activity.name}
            onDone={() => this.setState({ editing: false })} /> :
          <Text
            style={{ fontSize: 30 }}
            onPress={() => this.setState({ editing: true })}>
            { this.state.activity && this.state.activity.name }
          </Text> }
        <Chart data={eventsData} />
        { events }
        <Back>
          <Text>Back</Text>
        </Back>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    margin: 5,
    padding: 10,
    borderColor: '#999999',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  nameInput: {
    marginVertical: 5,
    padding: 5,
    borderColor: '#999999',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  titleText: {
    fontSize: 24,
  },
  editActivityContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
