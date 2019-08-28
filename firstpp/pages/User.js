import Layout from '../components/Layout';
import React, { Component } from 'react'
import { log } from 'util';

export default class User extends Component {
    static async getInitialProps({query}){
      
        return query
    }
    constructor(props){
        super(props)
    }
    render() {
        
        return (
            <Layout>
            <h1>Hi, This is a User {this.props.name} Page</h1>
        </Layout>
    
        )
    }
}


