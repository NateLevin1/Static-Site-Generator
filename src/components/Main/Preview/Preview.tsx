import React from 'react';
import './Preview.css';

class Preview extends React.Component<{doc: string}, {}> {
    render() {
        return (
            <iframe className="Preview" title="preview" srcDoc={this.props.doc}>
            </iframe>
        )
    }
}
    

export default Preview;