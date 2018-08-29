import {AsyncStorage} from 'react-native'
class APIHelper {
  async saveKey (userAPIKey) {
    try {
      await AsyncStorage.setItem('userAPIKey', userAPIKey)
    } catch (error) {
      console.log('Error saving data' + error)
    }
  }

  async getKey () {
    try {
      const userAPIKey = await AsyncStorage.getItem('userAPIKey')
      return userAPIKey
    } catch (error) {
      console.log('Error retrieving data' + error)
    }
  }
}
