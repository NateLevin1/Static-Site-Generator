import React, { ChangeEvent } from 'react';
import './PropItem.css';

class PropItem extends React.Component<{name?: string, content?: string, onNameChange: (newValue: string, oldValue: string)=>void, onContentChange: (newValue: string, name: string)=>void, onRemove: (name:string)=>void}, {name:string}> {
    constructor(props: {name: string, content?: string, onNameChange: (newValue: string, oldValue: string)=>void, onContentChange: (newValue: string, name: string)=>void, onRemove: (name:string)=>void}) {
        super(props);
        this.state = {
            name: props.name
        }
    }
    changeHandler = (e: ChangeEvent)=>{
        const target = e.target as HTMLInputElement;
        const val = target.value;
        if(target.classList.contains("PropItemName")) {
            this.props.onNameChange(val, this.state.name);
            this.setState({name: val});
        } else {
            this.props.onContentChange(val, this.state.name);
        }
    }
    removeHandler = ()=>{
        this.props.onRemove(this.state.name);
    }
    render() {
        return (
            <li className="PropItem">
                <span className="PropItem" onClick={this.removeHandler}>×</span>
                <code className="PropItem">$
                    <input defaultValue={this.props.name} className="PropItemName" onChange={this.changeHandler}/>
                </code> 
                = 
                <input defaultValue={this.props.content} onChange={this.changeHandler}/>
            </li>
        )
    }
}
    

export default PropItem;