import React from 'react';
import './AddProp.css';

class AddProp extends React.Component<{onClick: Function}, {}> {
    handleClick = ()=>{
        this.props.onClick();
    }
    render() {
        return (
            <div className="AddProp unselectable" onClick={this.handleClick}>
                +
            </div>
        )
    }
}
    

export default AddProp;