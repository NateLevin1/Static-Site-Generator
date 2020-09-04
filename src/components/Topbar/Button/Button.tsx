import React from 'react';
import './Button.css';

class Button extends React.Component<{content: string, bg?: string, color?: string, onClick?: Function, className?:string}, {}> {
    click = ()=>{
        this.props.onClick?.();
    }
    render() {
        return (
            <div className={"Button unselectable "+this.props.className} style={{backgroundColor: this.props.bg, color: this.props.color}} onClick={this.click}>
                {this.props.content}
            </div>
        )
    }
}
    

export default Button;