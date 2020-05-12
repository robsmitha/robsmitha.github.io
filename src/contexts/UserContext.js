import React, { Component } from 'react';
import { gitHubService } from './../services/github.service';

const UserContext = React.createContext();

class UserProvider extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            user: {
                loading: true,
                success: false,
                data: null
            }
        }
    }

    componentDidMount(){
        this.getUser()
    }

    async getUser(){
        const data = await gitHubService.getUser()
        this.setState({
            user: {
                loading: false,
                success: data !== null,
                data: data
            }
        })
    }
    
    render() {
        return (
            <UserContext.Provider value={{
                user: this.state.user
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer, UserContext }