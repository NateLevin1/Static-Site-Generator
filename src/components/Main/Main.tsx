import React from 'react';
import './Main.css';
import Preview from './Preview/Preview';
import Tabzone from './Tabzone/Tabzone';

class Main extends React.Component<{}, {}> {
    render() {
        return (
            <main className="Main">
                <Preview />
                <Tabzone />
            </main>
        )
    }
}
    

export default Main;