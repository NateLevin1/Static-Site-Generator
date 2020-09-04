import React, { ChangeEvent } from 'react';
import './Tabzone.css';
import Tab from './Tab/Tab';
import TabzoneContent from './TabzoneContent/TabzoneContent';
import ComponentDescriber from './TabzoneContent/ComponentDescriber/ComponentDescriber';

class Tabzone extends React.Component<{content: Array<{content: string, type?: string}>, selected: string, onSelect: (selected: string)=>void}, {}> {
    tabSelect = (selected: string)=>{
        this.props.onSelect(selected);
    }
    textareaKeydown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        let el = e.target as HTMLTextAreaElement;
        if(e.keyCode===9 || e.which===9){
            e.preventDefault();
            var s = el.selectionStart;
            el.value = el.value.substring(0,el.selectionStart) + "\t" + el.value.substring(el.selectionEnd);
            el.selectionEnd = s+1; 
        }
    }
    render() {
        return (
            <div className="Tabzone">
                <div className="Tabzone-tabs">
                    <Tab content="Input HTML" selected={this.props.selected === "Input HTML"} onClick={this.tabSelect}/>
                    <Tab content="Components" selected={this.props.selected === "Components"} onClick={this.tabSelect}/>
                    <Tab content="Input CSS" selected={this.props.selected === "Input CSS"} onClick={this.tabSelect}/>
                    <Tab content="Output HTML" selected={this.props.selected === "Output HTML"} onClick={this.tabSelect}/>
                </div>
                <TabzoneContent>
                    {this.props.content.map((val: {content: string, type?: string, textareaChange?:(e:ChangeEvent)=>void}, index: number)=>{
                        const newlineIndex = val.content.indexOf("\n");
                        const contentArr = [val.content.slice(0, newlineIndex), val.content.slice(newlineIndex)];
                        switch(val.type) {
                            case "h1":
                                return <h1 key={index}>{val.content}</h1>
                            case "p":
                                return <p key={index}>{val.content}</p>
                            case "textarea":
                                return <textarea key={index+val.content/**Stupid but works */} onChange={val.textareaChange} onKeyDown={this.textareaKeydown} defaultValue={val.content}></textarea>
                            default:
                                return <ComponentDescriber key={index} name={contentArr[0]} content={contentArr[1]}/>
                        }
                    })}
                </TabzoneContent>
            </div>
        )
    }
}
    

export default Tabzone;