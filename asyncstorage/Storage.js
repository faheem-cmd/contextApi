import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { AsyncStorage } from "react-native"



class Storage extends React.Component {
    constructor() {
        super()
        this.state = {
            inputText: null,
        }
    }

    saveData(inputText) {
        const Myname = inputText;
        AsyncStorage.setItem("Mydata", Myname)
        console.log(inputText)
        alert("Data saved")

    }

    recieveData = async () => {
        try {
            const getName = await AsyncStorage.getItem("Mydata");
            alert(getName);
            console.log(getName)
        }
        catch (error) {
            alert(error);
        }
    };

    deleteData() {
        AsyncStorage.removeItem("Mydata");
    }


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.content}>
                    <View style={styles.textInput}>
                        <TextInput placeholder="Enter any text" style={styles.enter}
                            onChangeText={(e) => this.setState({ inputText: e})}>

                        </TextInput>
                    </View>
                    <View style={styles.bttn}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => this.saveData(this.state.inputText)}>
                            <Text>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={this.recieveData}>
                            <Text>Retrive</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={this.deleteData}>
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}

export default Storage


const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'pink',
        justifyContent: 'center'
    },
    content: {
        padding: '3%'
    },
    enter: {
        padding: 0
    },
    textInput: {
        backgroundColor: 'white',
        padding: '4%',
        borderRadius: 10,
        margin: '5%'
    },
    bttn: {
        padding: '10%'

    },
    button: {
        backgroundColor: 'yellow',
        padding: 10,
        alignItems: 'center',
        margin: 10

    },

})