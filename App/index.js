import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import PrimaryNav from './config/router'
import LandingPage from './screens/LandingPage'

export default class App extends React.Component {
  render () {
    return (
      <PrimaryNav />
    )
  }
}
