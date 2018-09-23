import React from 'react'

import renderer from 'react-test-renderer'
import EnterAPIKey from './EnterAPIKey'

describe('Landing.js', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<EnterAPIKey />).toJSON()
    expect(rendered).toBeTruthy()
  })

//   it('saves a string to the database', => {
//       //make async and await
//       const expectedString = "Test String"
//       expect(expectedString).
//   })

})
