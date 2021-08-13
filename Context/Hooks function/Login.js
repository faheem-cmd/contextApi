/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import MyContext from './Contexts/Context'

const Login = ({ navigation }) => {
    const [isDisabled, setIsDisabled] = useState(false)
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const context = useContext(MyContext)

    const checkFilled = () => {
        console.log(username)
        //check field is not null
        if (username != null && password != null) {
            console.log('inside')

            if (username.length > 0 && password.length > 0) {
                setIsDisabled(false);
                console.log('button enabled')
            }
            else {
                setIsDisabled(true);
                console.log('button disbled')
            }
        }
        // else{
        //     console.log(username)
        // }
    };
    return (
        <View style={[styles.container, isDisabled && styles.bg]}>
            <View style={styles.imagecontainer}>
                <Image style={styles.image} source={require('./logo.png')} />
            </View>
            <Text style={[styles.title, isDisabled && styles.fontcolor]}>
                Login to Your Account
            </Text>
            <View style={styles.username}>
                <TextInput
                    onSubmitEditing={() => checkFilled()}
                    onChangeText={(suttu) => context.setMyname(suttu)} placeholder='username' style={styles.input}></TextInput>

            </View>
            <View style={styles.textpassword}>
                <TextInput
                    onSubmitEditing={() => checkFilled()}
                    onChangeText={(faheem) => setPassword(faheem)} placeholder='password' style={styles.password}></TextInput>

            </View>
            <Text>{password}</Text>
            <View style={styles.forgotview}>
                <Text style={styles.forgot}>Forgot password ?</Text>
                <Text style={[styles.reset, isDisabled && styles.resetbtn]}> Reset</Text>

            </View>
            <TouchableOpacity disabled={isDisabled} style={[styles.button, isDisabled && styles.isDisabled]}
                onPress={() => navigation.navigate('Homes')}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <View style={{ width: '100%', paddingHorizontal: '10%' }}>
                <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, }}
                    onPress={() => navigation.navigate('Storage')}>
                    <Text>btn</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.signup}>
                <Text>Dont have an account?</Text>
                <Text style={styles.reset} onPress={() => navigation.navigate('Signup')}> Sign up</Text>

            </View>

        </View>
    )

}

export default Login

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'pink',
        // justifyContent: 'center',
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
        color: 'red',

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
        // backgroundColor: 'tomato',

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
        // position: 'absolute',
        // bottom: 40,
        flex: 1,
        alignItems: 'flex-end',

    },
    isDisabled: {
        backgroundColor: 'gray',
    },
    isEnabled: {
        backgroundColor: 'tomato',
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
    }


})