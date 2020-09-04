import React from 'react';
import './Main.css';
import Preview from './Preview/Preview';
import Tabzone from './Tabzone/Tabzone';

class Main extends React.Component<{content: Array<{content: string, type?: string}>, selected: string, onSelect: (selected: string)=>void, doc: string}, {}> {
    onSelect = (selected: string)=>{
        this.props.onSelect(selected);
    }
    render() {
        return (
            <main className="Main">
                <Preview doc={this.props.doc}/>
                <Tabzone content={this.props.content} selected={this.props.selected} onSelect={this.onSelect}/>
            </main>
        )
    }
}
    

export default Main;