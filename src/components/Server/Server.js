import React, { Component } from 'react';
import axios from 'axios';

export default class Server extends Component {
    state = {
        persons:[

        ]
    }

    componentDidMount() {
        axios.get(`https://fakestoreapi.com/products`).then(res => {
            this.setState({persons: res.data})
        })
    }

    render() {
        return (
            <ul>
                {this.state.persons.map(person => <li key={person.id}><img src={person.image}/>{person.title}</li>)}
            </ul>
        )
    }
}
