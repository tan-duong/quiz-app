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
    text: PropTypes.string.isRequired,
    choose: PropTypes.func.isRequired,
    isSelected: PropTypes.bool,
  }

  render() {
    const {text} = this.props
    return (
      <TouchableOpacity style={isSelected ? [styles.container, styles.isSelected] : styles.container}
        onPress={this._choose}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    )
  }

  _choose = () => {
    const {choose} = this.props
    choose()
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
    selected:{
      backgroundColor: color.orange,
    },
    text: {
      fontSize: 20,
      fontWeight: "bold"
    }
  });