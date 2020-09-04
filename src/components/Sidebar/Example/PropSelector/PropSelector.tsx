import React from 'react';
import './PropSelector.css';
import PropItem from "./PropItem/PropItem";
import AddProp from './AddProp/AddProp';


class PropSelector extends React.Component<{onAdd: Function, onNameChange: (newVal: string, oldVal: string)=>void, onContentChange: (newVal: string, name: string)=>void, onRemove: (name: string)=>void, items: Array<{name: string, content: string}>}, {}> {
    addProp = ()=>{
        this.props.onAdd();
    }
    nameChangeHandler = (newVal: string, oldVal: string)=>{
        this.props.onNameChange(newVal, oldVal);
    }
    contentChangeHandler = (newVal: string, name: string)=>{
        this.props.onContentChange(newVal, name);
    }
    removeHandler = (name: string)=>{
        this.props.onRemove(name);
    }
    render() {
        return (
            <ul className="PropSelector">
                {this.props.items.map((item: {name: string, content: string}, index: number)=>{
                    return <PropItem key={index.toString()/**<- This is bad practice but also the only thing that works */} name={item.name} content={item.content} onNameChange={this.nameChangeHandler} onContentChange={this.contentChangeHandler} onRemove={this.removeHandler} />
                })}
                <AddProp onClick={this.addProp}/>
            </ul>
        )
    }
}
    

export default PropSelector;