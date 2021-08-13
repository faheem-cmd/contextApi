import React, { Component } from 'react';
import MyContext from './Context';
import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import jwt_decode from 'jwt-decode';
// import '../../global';

class MyProvider extends Component {
  state = {
    loading: true,
    faheem:'hello',
    username:null,
    Name:null,
    password:null,

  };


componentDidMount() {
  console.log('from context')
}

myData = () => {
  console.log('rendering from provider')

}


setUsername = (e) => {
  this.setState({username:e})
  console.log(e)
}


Myname = (M) => {
  this.setState({name:M})
  console.log(this.state.name)
}

setPassword = (value) => {
  this.setState({password:value})
  console.log(this.state.password)
}



  render() {
    return (
      <MyContext.Provider
        value={{
          loading: this.state.loading,
          faheem:this.state.faheem,
          myData:this.myData,
          setUsername:this.setUsername,
          username:this.state.username,
          name:this.state.name,
          Myname:this.Myname,
          password:this.state.password,
          setPassword:this.setPassword,

        }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default MyProvider;
