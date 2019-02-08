import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'
import PropTypes from 'prop-types'
import color from '../constants/color'

export default class Question extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>What is the largest animal in the planet?</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: color.white,
      width: "90%",
      //alignItems: "center",
      borderRadius: 8,
      borderWidth: 2,
      borderColor: color.yellow,
      marginTop: 20,
      marginBottom: 50,
      padding: 10,
    },
    text: {
      fontSize: 20,
      fontWeight: "bold"
    }
  });