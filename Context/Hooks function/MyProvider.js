import React, { Component } from 'react';
import MyContext from './Context';
import axios from 'axios';

class MyProvider extends Component {
    state = {
        username:null,

    };


    setMyname = (e) => {
        this.setState({username:e})
    }


    render() {
        return (
            <MyContext.Provider
                value={{
                    username:this.state.username,
                    setMyname:this.setMyname,

                }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
export default MyProvider;
