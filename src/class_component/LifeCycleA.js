import React, { Component } from 'react'

export default class LifeCycleA extends Component {

    
    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
    }

    constructor() {
        super()//special method
        this.state = {
            name: "Prince"
        }
        console.log("LifeCycleA constuctor")
    }

    static getDerivedStateFromProps() {
        console.log("LifeCycleA getDerivedStateFromProps")
        return null;
    }

    handleNameChange = (event) => {
        console.log(event.target.value)
        this.setState({
            name: event.target.value//newname => word
        })
    }

    render() {
        console.log("LifeCycleA render")
        return (
            <div>LifeCycleA
                <h1>{this.state.name}</h1>
                <input type="text" value={this.state.name} onChange={this.handleNameChange} />
            </div>
        )
    }

}