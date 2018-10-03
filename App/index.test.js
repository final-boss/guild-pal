import React from 'react'
import App from './index'

import renderer from 'react-test-renderer'

describe('index.js', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON()
    expect(rendered).toBeTruthy()
  })
})
