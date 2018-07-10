import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'

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

  render () {
    return (
      <View style={styles.paragraph}>
        <Text>{this.props.innerText}</Text>
      </View>
    )
  }
}

export default Paragraph
