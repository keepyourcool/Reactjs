import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css'
const layout = (props) => {
    return (
        <Aux>
            <div className="layout">
                <Toolbar />
                <main className="main-content">{props.children}</main>
            </div>
        </Aux>
    )
}
export default layout;