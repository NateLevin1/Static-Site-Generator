import React from 'react';
import './Example.css';
import Title from "../Title/Title";
import PropSelector from "./PropSelector/PropSelector";


class Example extends React.Component<{}, {}> {
    render() {
        return (
            <div className="Example">
                <Title content="Live Example"/>
                <PropSelector />
                <iframe className="live-example" title="live"></iframe>
            </div>
        )
    }
}
    

export default Example;