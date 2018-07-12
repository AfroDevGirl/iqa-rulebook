import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import _ from 'lodash'

const styles = StyleSheet.create({
  paragraph: {
    padding: 10
  }
});

class Paragraph extends Component {
  static propTypes = {
    innerText: PropTypes.string,
    styleOverrides: PropTypes.object
  }

  get styles () {
    const { styleOverrides } = this.props
    if (_.isObject(styleOverrides)) {
      return Object.assign({...styles.paragraph}, this.props.styleOverrides)
    } else {
      return styles.paragraph
    }
  }

  render () {
    return (
      <View style={this.styles}>
        <Text>{this.props.innerText}</Text>
      </View>
    )
  }
}

export default Paragraph
