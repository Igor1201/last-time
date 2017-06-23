import React from 'react';
import { Text, View } from 'react-native';
import * as firebase from 'firebase';
import * as joda from 'js-joda';
import _ from 'lodash';
import { Back } from '../compat/routing';
import { Chart } from '../compat/charts';

export class SingleActivityScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: null,
      events: [],
    };
  }

  componentWillMount() {
    const id = this.props.params.id;
    firebase.database().ref('/activities/' + id).once('value', (snapshot) => {
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
        <Text style={{ fontSize: 30 }}>
          { this.state.activity && this.state.activity.name }
        </Text>
        <Chart data={eventsData} />
        { events }
        <Back>
          <Text>Back</Text>
        </Back>
      </View>
    );
  }
}
