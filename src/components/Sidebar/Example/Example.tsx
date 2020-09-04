import React from 'react';
import './Example.css';
import Title from "../Title/Title";
import PropSelector from "./PropSelector/PropSelector";


class Example extends React.Component<{componentScript: string, frameSrc: string}, {items: Array<{name: string, content: string}>}> {
    constructor(props: {componentScript: string, frameSrc: string}) {
        super(props);
        this.state = {
            items:[{name:"color", "content":"red"}]
        }
    }
    onAdd = ()=>{
        let newItems = this.state.items;
        if(!this.state.items[this.state.items.length - 1] || (this.state.items[this.state.items.length - 1].name !== "")) {
            newItems.push({name:"", "content":""});
            this.setState({items: newItems});
        }
    }
    onNameChange = (newVal: string, oldVal: string)=>{
        const indexOfChanged = this.state.items.indexOf(this.state.items.filter((obj: {name: string, content: string})=>{ return obj.name === oldVal; })[0]);
        let fixed = this.state.items;
        fixed[indexOfChanged] = {name: newVal, content: fixed[indexOfChanged].content};
        this.setState({items: fixed});
    }
    onContentChange = (newVal: string, name: string)=>{
        const indexOfChanged = this.state.items.indexOf(this.state.items.filter((obj: {name: string})=>{ return obj.name === name; })[0]);
        let fixed = this.state.items;
        fixed[indexOfChanged] = {name: name, content: newVal};
        this.setState({items: fixed});
    }
    onRemove = (name: string)=>{
        const indexOfChanged = this.state.items.indexOf(this.state.items.filter((obj: {name: string})=>{ return obj.name === name; })[0]);
        let fixed = this.state.items;
        fixed.splice(indexOfChanged, 1);
        // Below is horrible practice but all I could get to work
        this.setState({items: []});
        setTimeout(()=>{
            this.setState({items: fixed});
        }, 0);
    }
    getAdjustedSrc = ()=>{
        let val = this.props.frameSrc;
        const items = this.state.items;
        items.forEach((obj: {name: string, content: string})=>{
            val = val.replace(new RegExp("\\$"+obj.name, "g"), obj.content);
        });
        return val;
    };
    render() {
        return (
            <div className="Example">
                <Title content="Live Example"/>
                <PropSelector onAdd={this.onAdd} onNameChange={this.onNameChange} onRemove={this.onRemove} onContentChange={this.onContentChange} items={this.state.items}/>
                <iframe className="live-example" title="live" srcDoc={this.getAdjustedSrc()}></iframe>
            </div>
        )
    }
}
    

export default Example;