import React, { Component } from 'react'
import Header from '../../Header'
import Search from './Search'
import QuickSearch from './QuickSearch'
import "./Home.css"
export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="back">
                    <Header />
                    <Search />
                </div>
                <QuickSearch />
            </div>
        )
    }
}