import React from 'react';
import './PropSelector.css';
import PropItem from "./PropItem/PropItem";
import AddProp from './AddProp/AddProp';


class PropSelector extends React.Component<{}, {}> {
    render() {
        return (
            <ul className="PropSelector">
                <PropItem default="Var1" defaultContent="abc"/>
                <AddProp />
            </ul>
        )
    }
}
    

export default PropSelector;