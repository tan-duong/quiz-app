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
    question: PropTypes.string.isRequired
  }

  render() {
    const {question} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{question}</Text>
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