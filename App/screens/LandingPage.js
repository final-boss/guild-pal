import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class LandingPage extends React.Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Guild Pal Landing</Text>
        <Button
          title='Add Personal API Key Here'
          onPress={() => navigate('EnterAPIKey')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
