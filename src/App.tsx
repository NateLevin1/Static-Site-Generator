import React, { ChangeEvent } from 'react';
import './App.css';
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from './components/Main/Main';

class App extends React.Component<{}, {components: {[key: string]: string}, content: Array<{content: string, type?: string, textareaChange?:(e:ChangeEvent)=>void}>, selected: string, inputHTML: string, inputCSS: string, srcDoc: string}> {
  constructor(props: object) {
    super(props);
    this.state = {
      components: {}, 
      content: [], 
      selected: "Input HTML",
      inputHTML: `<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8"/>
 <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
 <title>Generated By Static Site Generator</title>
 <link rel="stylesheet" href="input.css">
</head>
<body>
 <NewComponent color="red" />
</body>
</html>`, 
      inputCSS: ":root {\n font-family: sans-serif; \n}",
      srcDoc: ""
    }
  }
  componentDidMount() {
    this.newTabSelected(this.state.selected);
  }
  newComp = (name: string|undefined, content: string|undefined)=>{
    if(name && content) {
      let fixed = this.state.components;
      fixed[name] = content;
      this.setState({components: fixed});
      if(this.state.selected === "Components") {
        this.showComponents(fixed);
      }
    }
  }
  showComponents = (components: {[key: string]: string})=>{
    this.setState({content: Object.entries(components).map((arr: [string, string])=>{return {content: arr[0]+"\n"+arr[1]}})})
  }
  showInputHTML = ()=>{
    this.setState({content: [{content:this.state.inputHTML, type: "textarea", textareaChange: this.setHTML}]})
  }
  setHTML = (e: ChangeEvent)=>{
    const target = e.target as HTMLTextAreaElement;
    this.setState({inputHTML: target.value});
  }
  showInputCSS = ()=>{
    this.setState({content: [{content:this.state.inputCSS, type: "textarea", textareaChange: this.setCSS}]})
  }
  setCSS = (e: ChangeEvent)=>{
    const target = e.target as HTMLTextAreaElement;
    this.setState({inputCSS: target.value});
  }
  newTabSelected = (selected: string)=>{
    this.setState({selected: selected});
    switch(selected) {
      case "Components":
        this.showComponents(this.state.components);
        break;
      case "Input HTML":
        this.showInputHTML();
        break;
      case "Input CSS":
        this.showInputCSS();
        break;
      case "Output HTML":
        this.setState({content: [{content: "Output html\n"+this.state.srcDoc}]})
        break;
      default:
        this.setState({content: []});
        break;
    }
  }
  onCompile = ()=>{
    let doc = this.state.inputHTML;
    doc = doc.replace(" <link rel=\"stylesheet\" href=\"input.css\">", "<style>\n"+this.state.inputCSS+"\n</style>");
    
    let customWithChildren: Array<[string,string,string,string]> = Array.from(doc.matchAll(/<((?:[A-Z][^ >]+)) *([^>/]*)>([\s\S]*?)(?:<\/\1>)+/g), m => [m[1], m[2], m[3], m[0]]);
    customWithChildren.forEach((value)=>{
      // get the corresponding component
      let com = this.state.components[value[0]];
      if(!com) {
        console.error(`There is no component with the name "${value[0]}"`);
      } else {
        // com is code which should have all instances of $attr replaced with the attr
        let updated = com;
        let attrs: Array<[string, string]> = Array.from(value[1].matchAll(/([^ \n=]+)=("|')((?:(?!\2).)+)(?:[^\n ]*\2)/g), m => [m[1], m[3]]);
        updated = updated.replace(/\$children/g, value[2]);
        attrs.forEach((attr: [string, string])=>{
          updated = updated.replace(new RegExp("\\$"+attr[0], "g"), attr[1]);
        });
        // then it should be replaced
        doc = doc.replace(value[3], updated);
      }
    });


    let customSelfClosing: Array<[string, string, string]> = Array.from(doc.matchAll(/<([A-Z][^ ]+) ([^>/]*)\/?>/g), m => [m[1], m[2], m[0]]);
    customSelfClosing.forEach((value)=>{
      // get the corresponding component
      let com = this.state.components[value[0]];
      if(!com) {
        console.error(`There is no component with the name "${value[0]}"`);
      } else {
        // com is code which should have all instances of $attr replaced with the attr
        let updated = com;
        let attrs: Array<[string, string]> = Array.from(value[1].matchAll(/([^ \n=]+)=("|')((?:(?!\2).)+)(?:[^\n ]*\2)/g), m => [m[1], m[3]]);
        attrs.forEach((attr: [string, string])=>{
          updated = updated.replace(new RegExp("\\$"+attr[0], "g"), attr[1]);
        });
        // then it should be replaced
        doc = doc.replace(value[2], updated);
      }
    });
    this.setState({srcDoc: doc});
  }
  render() {
    return (
      <div>
      <Topbar onCompile={this.onCompile} />
      <Sidebar onComponentSave={this.newComp} style={this.state.inputCSS}/>
      <Main content={this.state.content} selected={this.state.selected} onSelect={this.newTabSelected} doc={this.state.srcDoc}/>
    </div>
    )
  }
}
  

export default App;