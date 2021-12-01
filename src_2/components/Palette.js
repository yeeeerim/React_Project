import React, { Component } from 'react'
import './Palette.css'

export default class Palette extends Component {
    render() {
        const {colors} = this.props;


        return (
            <div className="palette">
                <div className="color" style={{background: colors[0]}}></div>
                <div className="color" style={{background: colors[1]}}></div>
                <div className="color" style={{background: colors[2]}}></div>
                <div className="color" style={{background: colors[3]}}></div>
            </div>
        )
    }
}
