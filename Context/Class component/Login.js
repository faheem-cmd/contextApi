import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import Navigation from './Navigation'
import MyContext from './Contexts/Context'

class Login extends React.Component {
    static contextType = MyContext;
    constructor() {
        super()
        this.state = {
            isDisabled: false,
            username: null,
            password: null,
        }
    }



    componentDidMount() {
        this.context.myData()

    }

    render() {

        const checkFilled = () => {
            // console.log(username)
            //check field is not null
            if (this.state.username != null && this.state.password != null) {
                console.log('inside')

                if (this.state.username.length > 0 && this.state.password.length > 0) {
                    this.setState({ isDisabled: false });
                    console.log('button enabled')
                }
                else {
                    this.setState({ isDisabled: true });
                    console.log('button disbled')
                }
            }
        }


        return (

            <View style={styles.container}>
                <View style={styles.imagecontainer}>
                    <Image style={styles.image} source={require('./logo.png')} />
                </View>
                <Text style={styles.title}>
                    Login to Your Account {this.context.faheem}
                </Text>
                <View style={styles.username}>
                    <TextInput onSubmitEditing={() => checkFilled()}
                        onChangeText={(suttu) => this.context.setUsername(suttu)} placeholder='username' style={styles.input}></TextInput>

                </View>


                <View style={styles.textpassword}>
                    <TextInput
                        onSubmitEditing={() => checkFilled()}
                        onChangeText={(faheem) => this.setState({ password: faheem })} placeholder='password' style={styles.password}></TextInput>
                </View>
                <View style={styles.forgotview}>
                    <Text style={styles.forgot}>Forgot password ?</Text>
                    <Text style={styles.reset}> Reset</Text>

                </View>
                <TouchableOpacity disabled={this.state.isDisabled} style={[styles.button, this.state.isDisabled && styles.isDisabled]} onPress={() => this.props.navigation.navigate('HomePage')}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>


                <View style={{ width: '100%', paddingHorizontal: '10%' }}>
                    <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, }}
                        onPress={() => this.props.navigation.navigate('Storage')}>
                        <Text>btn</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.signup}>
                    <Text>Dont have an account?</Text>
                    <Text style={styles.reset} onPress={() => this.props.navigation.navigate('Signup')}> Sign up</Text>

                </View>

            </View>

        )
    }
}


export default Login

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 20,
        width: '100%',
        marginTop: 160,
    },
    username: {
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
        padding: 12,
        borderRadius: 10,
        marginVertical: 25,

    },
    input: {
        padding: 0,
        width: '100%',
    },
    textpassword: {
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
        padding: 12,
        borderRadius: 10,

    },
    password: {
        padding: 0,
        width: '100%',

    },
    forgotview: {
        paddingTop: 30,
        width: '100%',
        flexDirection: 'row',

    },
    forgot: {
        fontSize: 14,

    },
    reset: {
        color: '#B93A3A',
        fontWeight: 'bold',

    },
    button: {
        width: '100%',
        backgroundColor: '#B93A3A',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        margin: 30,

    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
    },
    signup: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-end',

    },
    fontcolor: {
        color: 'blue',
    },
    resetbtn: {
        color: 'green',
    },
    bg: {
        backgroundColor: '#E5E5E5',
    },
    image: {
        height: 100,
        width: 100,

    },
    imagecontainer: {
        height: 0,
        width: 0,
        alignItems: 'center',
        marginVertical: 10,
    },
    isDisabled: {
        backgroundColor: 'gray',
    }


})