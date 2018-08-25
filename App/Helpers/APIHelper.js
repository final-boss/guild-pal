import React from 'react'
import {AsyncStorage} from 'react-native'
class APIHelper extends React.Component {

    constructor() {super()}
    async saveKey(api) {
        try {
             await AsyncStorage.setItem('userAPIKey', api)
        } catch (error) {
            console.log("Error saving data" + error)
        }
    }

    async getKey() {
        try {
            const value = await AsyncStorage.getItem('userAPIKey')
            this.setState({retrivedAPIKey: api})
        } catch (error) {
            console.log("Error retrieving data" + error)
        }
    }
}