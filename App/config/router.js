import React from 'react'
import { createStackNavigator } from 'react-navigation'

import EnterAPIKey from '../screens/EnterAPIKey'
import LandingPage from '../screens/LandingPage'

const PrimaryNav = createStackNavigator({
   LandingPage: { screen: LandingPage},
    EnterAPIKey: { screen: EnterAPIKey }
}, {
    initialRouteName: 'LandingPage'
})

export default PrimaryNav