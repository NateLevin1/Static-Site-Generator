import React from 'react';
import './Title.css';

class Title extends React.Component<{content: string}, {}> {
    render() {
        return (
            <h1 className="Title">
                {this.props.content}
            </h1>
        )
    }
}


export default Title;