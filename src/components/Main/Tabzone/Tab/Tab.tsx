import React from 'react';
import './Tab.css';

class Tab extends React.Component<{content: string, selected: boolean, onClick: Function}, {}> {
    click = ()=>{
        this.props.onClick(this.props.content);
    }
    render() {
        return (
            <div className={this.props.selected ? "Tab unselectable selected" : "Tab unselectable"} onClick={this.click}>
                {this.props.content}
            </div>
        )
    }
}
    

export default Tab;