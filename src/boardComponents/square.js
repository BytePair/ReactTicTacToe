import React from 'react';

/* custom components */

/* styling */
import '../css/square.css';


class Square extends React.Component {

    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

export default Square;