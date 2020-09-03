import React, { Component } from "react";
import './contact.css';

import Input from '../components/Input';  
import TextArea from '../components/TextArea';  
import Button from '../components/Button'

class ContactForm extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        name: '',
        email: '',
        company: '',
        budget: '',
        expertise: ''
      },
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit() {
    // Form submission logic
  }
  handleClearForm() {
    // Logic for resetting the form
  }
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>

        <Input /> {/* Name of the user */}
        <Input /> {/* Input for Email */} 
        <Input /> {/* Company Name */}
        <Input /> {/* Max Budget */}
        <TextArea /> {/* Description about what you and your company does */}
        <Button /> { /*Submit */ }
        <Button /> {/* Clear the form */}
      </form>
    );
  }
}

export default ContactForm;