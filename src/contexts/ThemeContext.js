﻿import React, { Component } from 'react';

const ThemeContext = React.createContext();

class ThemeProvider extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            theme: null
        }
    }

    changeTheme = event => {
        let theme = event.target.value;
        console.log(theme)
        this.setState({
            theme: theme
        })
    }

    render() {
        return (
            <ThemeContext.Provider value={{
                theme: this.state.theme,
                changeTheme: this.changeTheme
            }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

const ThemeConsumer = ThemeContext.Consumer

export { ThemeProvider, ThemeConsumer, ThemeContext }