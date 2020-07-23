import React from 'react';
import '../../src/App.css';


export default class Footer extends React.Component/*<acceptedProps, valueTypes>*/ {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render(){
        return (
            <div>
                <p id="copymark">&copy; MARIKO O'BARA 2020</p>
            </div>
        )
    }
};
 