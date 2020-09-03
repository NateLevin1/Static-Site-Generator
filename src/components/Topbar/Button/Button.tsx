import React from 'react';
import './Button.css';

class Button extends React.Component<{content: string, bg?: string, color?: string}, {}> {
    render() {
        return (
            <div className="Button unselectable" style={{backgroundColor: this.props.bg, color: this.props.color}}>
                {this.props.content}
            </div>
        )
    }
}
    

export default Button;