import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { red } from 'ansi-colors';

const { width, height } = Dimensions.get("window");

export default class ToDo extends React.Component {
  state = {
    isEditing: false,
    isCompleted: false,
  }

  render() {
    const { isCompleted } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleComplete}>
          <View style={[
            styles.circle,
            isCompleted ? styles.completedCircle : styles.uncompletedCircle
          ]} />
        </TouchableOpacity>
        <Text style={styles.text}>Hello I'm ToDo</Text>
      </View>
    );
  }

  toggleComplete = () => {
    this.setState({
      isCompleted: !this.state.isCompleted
    });
    console.log(this.state.isCompleted);
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 30,
    height: 30,
    borderWidth: 3,
    borderRadius: 15,
    marginRight: 10,
  },
  completedCircle: {
    borderColor: '#bbb',
  },
  uncompletedCircle: {
    borderColor: '#F23657',
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    marginVertical: 20,
  }
})
