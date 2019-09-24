import React from 'react';
import logo from './logo.svg';
import './App.css';

class Btn extends React.Component {
    constructor(props) {
        super(props);
        this.Click = this.Click.bind(this);
    }


    Click() {
        document.querySelector('.wrapper').style.backgroundColor = '#555'
        document.querySelector('h1').style.color = '#fff'
    }

    render() {
        return (
            <button onClick={this.Click} className="clicker">Другой стиль </button>
        )
    }
}

export default Btn