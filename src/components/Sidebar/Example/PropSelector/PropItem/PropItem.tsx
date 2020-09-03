import React from 'react';
import './PropItem.css';

class PropItem extends React.Component<{default?: string, defaultContent?: string}, {}> {
    render() {
        return (
            <li className="PropItem">
                <code className="PropItem">${this.props.default}</code> = <input defaultValue={this.props.defaultContent} />
            </li>
        )
    }
}
    

export default PropItem;