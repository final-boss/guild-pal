import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

class EnterAPIKey extends React.Component {

    constructor(props) {
        super(props)
        this.state = { api: '' }
    }

    //Next grab the api value

    render() {
        return (
            <View style={styles.container} >
                <Text>Please enter your API key</Text>
                <TextInput 
                    autoFocus={ true }
                    placeholder="API Key here"
                    onChangeText={(api) => this.setState({api})}
                    value={this.state.api}
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