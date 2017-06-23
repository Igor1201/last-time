import React from 'react';
import { ActivityIndicator, ListView, View, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import _ from 'lodash';
import { GroupListItem } from '../group/group-list-item';
import { ActivityListItem } from './activity-list-item';

export class ActivitiesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      loading: 0,
      activities: this.ds.cloneWithRows([]),
      groups: this.ds.cloneWithRows([]),
    };
  }

  componentWillMount() {
    firebase.database().ref('/activities').once('value', (snapshot) => {
      const activities = _.map(snapshot.toJSON(), (v, k) => _.assign({ key: k, id: k }, v));
      this.setState({
        activities: this.ds.cloneWithRows(activities),
        loading: this.state.loading + 1,
      });
    });
    firebase.database().ref('/groups').once('value', (snapshot) => {
      const groups = _.map(snapshot.toJSON(), (v, k) => _.assign({ key: k, id: k }, v));
      this.setState({
        groups: this.ds.cloneWithRows(groups),
        loading: this.state.loading + 1,
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        { (this.state.loading < 2) ?
          <ActivityIndicator /> :
          <View>
            <ListView
              enableEmptySections={true}
              dataSource={this.state.groups}
              renderRow={(a) => <GroupListItem {...a} />}/>
            <ListView
              enableEmptySections={true}
              dataSource={this.state.activities}
              renderRow={(a) => <ActivityListItem {...a} />}/>
          </View>
        }
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
  },
});
