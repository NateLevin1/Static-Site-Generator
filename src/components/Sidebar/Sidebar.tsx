import React, { ChangeEvent, createRef, RefObject } from 'react';
import './Sidebar.css';
import Title from "./Title/Title";
import Example from "./Example/Example";
import Button from "../Topbar/Button/Button";


class Sidebar extends React.Component<{onComponentSave: (name: string|undefined, content: string|undefined)=>void, style:string},{componentScript: string, frameSrc: string}> {
  textarea: RefObject<HTMLTextAreaElement>;
  name: RefObject<HTMLInputElement>;
  constructor(props: {onComponentSave: (name: string|undefined, content: string|undefined)=>void, style:string}) {
    super(props);
    this.state = {
      componentScript: "<div style=\"color: $color;\">Red Text Here!</div>",
      frameSrc: `<!DOCTYPE html>
      <html lang="en">
      <body>
      <style>
        ${this.props.style}
      </style>
        <div style="color: $color;">Red Text Here!</div>
      </body>
      </html>`
    }
    this.textarea = createRef<HTMLTextAreaElement>();
    this.name = createRef<HTMLInputElement>();
  }
  updateExample = (e: ChangeEvent)=>{
    const target = e.target as HTMLTextAreaElement;
    let val = target.value;
    this.setState({frameSrc: `<!DOCTYPE html>
    <html lang="en">
    <head>
    <style>
      ${this.props.style}
    </style>
    </head>
    <body>
      ${val}
    </body>
    </html>`});
  }
  save = ()=>{
    this.props.onComponentSave(this.name.current?.value, this.textarea.current?.value);
  }
  render() {
    return (
      <aside className="Sidebar">
        <Title content="New Component"/>
        <textarea placeholder="Component Code Goes Here" defaultValue={this.state.componentScript} onChange={this.updateExample} className="code" style={{resize: "none"}} ref={this.textarea}></textarea>
        <Title content="Name" />
        <input placeholder="NameHere" defaultValue="NewComponent" className="name-input" ref={this.name}/>
        <Button content="Save" onClick={this.save} className="sidebar-save"/>
        <Example componentScript={this.state.componentScript} frameSrc={this.state.frameSrc}/>
      </aside>
    )
  }
}
  

export default Sidebar;