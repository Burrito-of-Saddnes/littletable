import React from 'react';
import { Component } from 'react';
import * as ReactModal from 'react-modal';

export default class AddingBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
          modalOpen: this.props.modalOpen,
          id: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        };
    }
  
    handleId = (text) => {
        this.setState( { id: text.target.value } );
    };

    handleFirstName = (text) => {
        this.setState( { firstName: text.target.value } );
    };   
    handleLastName = (text) => {
        this.setState( { lastName: text.target.value } );
    };

    handleEmail = (text) => {
        this.setState( { email: text.target.value } );
    };   
    handlePhone = (text) => {
        this.setState( { phone: text.target.value } );
    };

    handleOpen = () => {
        this.setState( { modalOpen: true } )
    };

    handleClose = () => {
        this.setState( { modalOpen: false } )
    };

    handleFormSubmit = () => {
        this.props.onAdd({ 
            id: this.state.id, 
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            email: this.state.email, 
            phone: this.state.phone
        })
        this.setState({modalOpen: false});
        this.setState({ id: '', firstName: '', lastName: '', email: '', phone: '' });
    };

    render() {
      return (
        <div className="Add">
            <button 
                onClick = { this.handleOpen }
                className="AddBar" 
            > Add </button>
            <ReactModal
                isOpen = { this.state.modalOpen }
                onAfterClose = { this.handleClose }
                className="Modal"
            >
                <div className="ModalContainer">
                    <div className="tab"></div>
                    <input
                        className="SearchBar"
                        type = "text"
                        placeholder = { 'id' }
                        autoCapitalize = "none"
                        value = { this.state.id }
                        onChange = { this.handleId }
                    />
                    <input
                        className="SearchBar"
                        type = "text"
                        placeholder = { 'firstName' }
                        autoCapitalize = "none"
                        value = { this.state.firstName }
                        onChange = { this.handleFirstName }
                    />
                    <input
                        className="SearchBar"
                        type = "text"
                        placeholder = { 'lastName' }
                        autoCapitalize = "none"
                        value = { this.state.lastName }
                        onChange = { this.handleLastName }
                    />
                    <input
                        className="SearchBar"
                        type = "text"
                        placeholder = { 'email' }
                        autoCapitalize = "none"
                        value = { this.state.email }
                        onChange = { this.handleEmail }
                    />
                    <input
                        className="SearchBar"
                        type = "text"
                        placeholder = { 'phone' }
                        autoCapitalize = "none"
                        value = { this.state.phone }
                        onChange = { this.handlePhone }
                    />
                    <button className = "AddBar"
                        disabled={!(this.state.id && this.state.firstName && this.state.lastName && this.state.email && this.state.phone )}
                        onClick={this.handleFormSubmit}
                        type = "button"
                    > Add </button>   
                    <button className = "AddBar"
                        onClick = { this.handleClose }
                        type = "button"
                    > Close </button>                
                </div>
            </ReactModal>
        </div>
      );
    }
  };