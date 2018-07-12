import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  header: {
    alignItems: 'center'
  },
  innerText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})

class SectionHeader extends Component {
  static propTypes = {
    innerText: PropTypes.string,
    styleOverrides: PropTypes.object
  }

  get containerStyles () {
    const { styleOverrides } = this.props
    if (_.isObject(styleOverrides)) {
      return Object.assign({ ...styles.header }, this.props.styleOverrides)
    } else {
      return styles.header
    }
  }

  render () {
    return (
      <View style={this.containerStyles}>
        <Text style={styles.innerText}>{this.props.innerText}</Text>
      </View>
    )
  }
}

export default SectionHeader