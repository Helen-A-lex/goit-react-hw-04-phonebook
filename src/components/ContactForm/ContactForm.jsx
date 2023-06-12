import { Component } from "react";
import { Form, Label, Input, ButtonAddDeleteContact } from "./ContactForm.styled";

export class ContactForm extends Component{
state = {
name: '',
number: '',
}

    
handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({[name]: value})
    }
    
handleSubmit = evt => {
    evt.preventDefault();
    
    this.props.onSubmit(this.state)
    this.reset();
    
    }


reset = () => {
    this.setState({ name: '', number: '' });
}
  
render() {
        const { name,number } = this.state;
        
        return (
    <Form onSubmit={this.handleSubmit}>
       <Label htmlFor="user_name">Name
        <Input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  value={name} 
  onChange={this.handleChange} 
                       
            />
        </Label>
                
        <Label htmlFor="user_tel">Number
        <Input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  value={number} 
  onChange={this.handleChange} 
/>
        </Label>
        <ButtonAddDeleteContact type="submit">Add contact</ButtonAddDeleteContact>
      
    </Form> )
}
};