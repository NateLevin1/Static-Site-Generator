import React from 'react';
import './Sidebar.css';
import Title from "./Title/Title";
import Example from "./Example/Example";


class Sidebar extends React.Component {
  render() {
    return (
      <aside className="Sidebar">
        <Title content="New Component"/>
        <textarea placeholder="Component Code Goes Here" className="code" style={{resize: "none"}}></textarea>
        <Example />
      </aside>
    )
  }
}
  

export default Sidebar;