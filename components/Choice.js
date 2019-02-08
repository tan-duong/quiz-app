import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'
import color from '../constants/color'

export default class Choice extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <TouchableOpacity style={styles.container}
        onPress={this._choose}
      >
        <Text style={styles.text}>A. Blue Whale</Text>
      </TouchableOpacity>
    )
  }

  _choose = () => {

  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: color.white,
      width: "90%",
      //alignItems: "center",
      borderRadius: 8,
      borderWidth: 1,
      marginBottom: 5,
      padding: 10,
      borderColor: color.grey
    },
    text: {
      fontSize: 20,
      fontWeight: "bold"
    }
  });