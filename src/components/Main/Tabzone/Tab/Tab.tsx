import React from 'react';
import './Tab.css';

class Tab extends React.Component<{content: string}, {}> {
    render() {
        return (
            <div className="Tab unselectable">
                {this.props.content}
            </div>
        )
    }
}
    

export default Tab;