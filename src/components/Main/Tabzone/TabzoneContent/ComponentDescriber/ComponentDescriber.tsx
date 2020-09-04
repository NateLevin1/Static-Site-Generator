import React from 'react';
import './ComponentDescriber.css';

class ComponentDescriber extends React.Component<{content: string, name: string}, {}> {
    render() {
        return (
            <div className="ComponentDescriber">
                <h3>{this.props.name}</h3>
                <code>{this.props.content}</code>
            </div>
        )
    }
}
    

export default ComponentDescriber;