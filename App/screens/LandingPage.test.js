import React from 'react'
import LandingPage from './LandingPage'
import {Button} from 'react-native'
import {mount} from 'enzyme'

import renderer from 'react-test-renderer'
//import TestRenderer from 'react-test-renderer'

describe('LandingPage.js', () => {
  it('renders without crashing', () => {
    const someMockThing = {navigate: () => { return null }}
    const rendered = renderer.create(<LandingPage navigation={someMockThing} />).toJSON()

    expect(rendered).toBeTruthy()
  })

  it('should render a button', () => {
    //const wrapper = shallow(<LandingPage />)
    const someMockThing = {navigate: () => { return null }}
    const rendered = mount(<LandingPage navigation={someMockThing}/>)
    expect(rendered.find(Button)).to.have.length(1)
  })

  // it('navigate when button is pressed', () => {
  //   const mockCallBack = jest.fn()
  //   const mountedButtonWithCallBack = shallow(<Button handlePress={mockCallBack} />)
  //   mountedButtonWithCallBack.find('button').simulate('press')
  //   expect(mockCallBack.mock.calls.length).toEqual(1)
  // })
})
