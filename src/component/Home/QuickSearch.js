import React, { Component } from 'react'
import "./QuickSearch.css"
import { QuickDisplay } from './QuickDisplay'

const qurl = "http://localhost:5500/quickSearch"

export default class QuickSearch extends Component {

    constructor() {
        super()
        this.state = {
            mealType: ""
        }
    }

    render() {
        return (
            <div className="container-fluid">

                <div className="heading">
                    <h1>Quick Searches</h1>
                    <p>Discover restaurants by type of meal</p>
                </div>
                <QuickDisplay mealData={this.state.mealType} />

            </div>
        )
    }

    componentDidMount() {
        fetch(`${qurl}`, { method: "GET" })
            .then((res) => res.json())
            .then((data) => this.setState({ mealType: data }))
    }
}
