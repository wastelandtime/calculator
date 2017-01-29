import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getCounter } from '../actions';

class CounterBoard extends Component {
  render() {
    return (
      <View>
        <Text>BELOW SHOULD DISPLAY 0</Text>
        <Text>{this.props.count}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    step: state.step
  };
};

export default connect(mapStateToProps, { getCounter })(CounterBoard);
