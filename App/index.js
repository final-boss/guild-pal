import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Guild Pal</Text>
        <Button 
          title="Add Personal API Key Here"
          onPress={() => this.props.navigation.navigate('EnterAPIKey') } 
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
