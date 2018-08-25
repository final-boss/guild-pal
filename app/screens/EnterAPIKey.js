import React from 'react'
import { View, Text, TextInput, StyleSheet, AsyncStorage } from 'react-native'

class EnterAPIKey extends React.Component {

    static navigationOptions = {
        title: 'Enter API Key'
    }

    constructor(props) {
        super(props)
    }

    async saveKey(api) {
        try {
             await AsyncStorage.setItem('userAPIKey', api)
        } catch (error) {
            console.log("Error saving data" + error)
        }
    }

    async getKey() {
        try {
            const api = await AsyncStorage.getItem('userAPIKey')
            this.setState({retrivedAPIKey: api})
        } catch (error) {
            console.log("Error retrieving data" + error)
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <Text>Please enter your API key</Text>
                <TextInput 
                    autoFocus={ true }
                    placeholder="API Key here"
                    onChangeText={
                        (api) => this.saveKey(api)
                    }
                />
            </View>
        );
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

export default EnterAPIKey