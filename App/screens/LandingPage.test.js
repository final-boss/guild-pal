import React from 'react'
import App from './LandingPage'

import renderer from 'react-test-renderer'

describe('LandingPage.js', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON()
    expect(rendered).toBeTruthy()
  })
})