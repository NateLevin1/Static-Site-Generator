import React from 'react';
import './Tabzone.css';
import Tab from './Tab/Tab';
import TabzoneContent from './TabzoneContent/TabzoneContent';

class Tabzone extends React.Component<{}, {}> {
    render() {
        return (
            <div className="Tabzone">
                <div className="Tabzone-tabs">
                    <Tab content="Input HTML"/>
                    <Tab content="Output HTML"/>
                    <Tab content="Components"/>
                </div>
                <TabzoneContent />
            </div>
        )
    }
}
    

export default Tabzone;