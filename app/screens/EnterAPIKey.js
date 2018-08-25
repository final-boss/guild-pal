import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
//import  Toast, {DURATION} from 'react-native-easy-toast'

import APIHelper from '../Helpers/APIHelper'

class EnterAPIKey extends React.Component {

    static navigationOptions = {
        title: 'Enter API Key'
    }

    constructor(props) {
        super(props)
        this.state = { api: '' }
        APIHelper.apiKey = 'It Works'
    }

    saveAPIKey(){
        APIHelper.apiKey = this.state.api
        //this.refs.toast.show('hello world!')
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.container} >
                <Text>Please enter your API key</Text>
                <TextInput 
                    autoFocus={ true }
                    placeholder="API Key here"
                    onChangeText={
                        (api) => this.setState({api})
                    }
                />
                <Button  
                    title= 'Back To Home Page'
                    onPress={
                        () => this.saveAPIKey()
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