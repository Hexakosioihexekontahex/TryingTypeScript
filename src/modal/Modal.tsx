import React, {useState } from 'react'
import './Modal.css'

interface State {isOpen: boolean;}
export default class Modal extends React.Component<{}, State> {
    state: State = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true})}>Open modal</button>

                { this.state.isOpen && <div className='modal'>
                    <div className='modal-body'>
                        <h1>Modal title</h1>
                        <p>I am awesome modal!</p>
                        <button onClick={() => this.setState({isOpen: false})}>Close modal</button>
                    </div>
                </div>}
            </React.Fragment>
        )
    }
}
