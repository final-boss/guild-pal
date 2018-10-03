import React from 'react'
import {Button} from 'react-native'
import LandingPage from './LandingPage'

import renderer from 'react-test-renderer'
import TestRenderer from 'react-test-renderer'
//const TestRenderer = require('react-test-renderer')

describe('LandingPage.js', () => {
  it('renders without crashing', () => {
    const someMockThing = {navigate: () => { return null }}
    const rendered = renderer.create(<LandingPage navigation={someMockThing} />).toJSON()

    expect(rendered).toBeTruthy()
  })

  it('renders one button', () => {
    // const rendered = renderer.create(Button).toJSON()
    // expect(rendered).toBeTruthy()
    const saveButton = instance.find(
      (el) => el.type == Button
        && el.children
        && el.children[0] == 'Add Personal API Key Here'
    )
    expect(saveButton).toEqual(false)
  })

  // it('navigate when button is pressed', () => {
  //   const mockCallBack = jest.fn();
  //   const mountedButtonWithCallBack = shallow(<Button handlePress={mockCallBack} />)
  //   mountedButtonWithCallBack.find('button').simulate('press')
  //   expect(mockCallBack.mock.calls.length).toEqual(1)
  // })
})
