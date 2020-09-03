import React from 'react';
import './Topbar.css';
import Branding from "./Branding/Branding";
import Button from "./Button/Button";


class Topbar extends React.Component {
  render() {
    return (
      <div className="Topbar">
        <Branding />
        <div className="Topbar-button-container">
          <Button content="New Component" />
          <Button content="Compile" bg="#5C5E5E" color="white"/>
        </div>
      </div>
    )
  }
}
  

export default Topbar;