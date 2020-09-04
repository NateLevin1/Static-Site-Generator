import React from 'react';
import './TabzoneContent.css';

class TabzoneContent extends React.Component<{}, {}> {
    render() {
        return (
            <div className="TabzoneContent">
                {this.props.children}
            </div>
        )
    }
}
    

export default TabzoneContent;