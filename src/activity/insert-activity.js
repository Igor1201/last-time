import React from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import * as firebase from 'firebase';

export class InsertActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Insert new activity</Text>
        <TextInput
          placeholder='Activity name'
          style={styles.nameInput}
          onChangeText={(name) => this.setState({ name })} />
        <Button title='Insert' onPress={() => this.insertActivity()} />
      </View>
    );
  }

  insertActivity() {
    if (this.state.name.trim() !== '') {
      const key = firebase.database().ref('/activities').push().key;
      firebase.database().ref(`/activities/${key}`).set({
        name: this.state.name,
        color: '#8884d8',
      });
    }
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
});
