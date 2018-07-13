import React from 'react'
import IntroScreenView from '../screens/IntroScreen/IntroScreen.js'
import renderer from 'react-test-renderer'

describe('IntroScreenView', () => {
  test('renders correctly', () => {
    const screen = renderer.create(<IntroScreenView />).toJSON()
    expect(screen).toMatchSnapshot()
  })
})
