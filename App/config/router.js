import React from 'react'
import { StackNavigator } from 'react-navigation'

import EnterAPIKey from '../screens/EnterAPIKey'

const PrimaryNav = StackNavigator({
    EnterAPIKey: { screen: EnterAPIKey }
}, {
    headerMode: 'none',
    initialRouteName: 'EnterAPIKey'
})

export default PrimaryNav