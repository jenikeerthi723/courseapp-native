import React, { Component } from 'react';

import Validate from './Validate';

import Input from './components/Input';
import TextArea from './components/TextArea';
import Select from './components/Select';
import CheckBox from './components/CheckBox';
import Radio from './components/Radio';
import Button from './components/Button'

class FormContainer2 extends Component {
  constructor() {
    super();

    this.state = {
      formIsValid: false,
      formControls: {
        
        name: {
          type: 'text',
          value: '',
          placeholder: 'What is your name',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
            minLength: 4,
            maxLength: 8,
            isRequired: true,
           // isNumber: true
          },
        },
        address: {
          type: 'textarea',
          value: '',
          placeholder: 'What is your address',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
            minLength: 8,
            isRequired: true
          },
        },
        my_email: {
          type: 'text',
          value: '',
          placeholder: 'What is your email',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
            isRequired: true,
            isEmail: true
          },
        },
        gender: {
          type: 'select',
          value: '',
          placeholder: 'What is your gender',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: 'male', displayValue: 'Male' },
            { value: 'female', displayValue: 'Female'}
          ]
        },
        my_radio: {
          type: 'radio',
          value: '',
          placeholder: 'Are you a frontend developer',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
              isRequired: true,
          },
          options: [
            { value: '0', displayValue: 'No' },
            { value: '1', displayValue: 'Yes' }
          ]
        },
        my_checkbox: {
          type: 'checkbox',
          value: [],
          placeholder: 'Technology',
          valid: false,
          errorMsg: '',
          touched: false,     
          validationRules: {
              isRequired: true,
          },
          options: [
            { value: 'R', displayValue: 'React' },
            { value: 'A', displayValue: 'Angular' }
          ]
        },
        my_multiselect: {
          type: 'select',
          value: [],
          placeholder: 'What is your Interest',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
            isRequired: true,
          },
          multiple: true,
          options: [
            { value: 'React', displayValue: 'Learn React' },
            { value: 'Angular', displayValue: 'Learn Angular'},
            { value: 'Vue', displayValue: 'Learn Vue'},
            { value: 'Backbone', displayValue: 'Learn Backbone'}
          ]
        }
        
      }

    }
  }

  componentDidMount() {
    const updatedControls = {
      ...this.state.formControls
    };

    
    let formIsValid = true;
    for (let formElementId in updatedControls) {
      let ValidationResult=Validate( updatedControls[formElementId].value,  updatedControls[formElementId].validationRules);
      updatedControls[formElementId].valid = ValidationResult.valid;
     console.log(ValidationResult)
    if ((!updatedControls[formElementId].valid) && (updatedControls[formElementId].touched)) {
      updatedControls[formElementId].errorMsg = ValidationResult.errorMsg
    }
    else {
      updatedControls[formElementId].errorMsg = ''
    }
    
    formIsValid = updatedControls[formElementId].valid && formIsValid;
  
  }
    
    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid
    });
  }
  
  changeHandler = event => {
    
      const name = event.target.name;
      console.log("Name : "+name);

      const updatedControls = {
        ...this.state.formControls
      };

      const updatedFormElement = {
        ...updatedControls[name]
      };

      let value;
      let selectedOptions;
      let newValArray;

    //  console.log(updatedControls[name].validationRules.isNumber)
    //  if (updatedControls[name].validationRules.isNumber)
    //   {
    //     const pattern = /^[0-9\b]+$/ 
    //     if ((event.target.value!== '') && (!pattern.test(event.target.value)))
    //       return;
    //   }

    //   if (updatedControls[name].validationRules.maxLength)
    //   {
    //     if (event.target.value.length > updatedControls[name].validationRules.maxLength)
    //       return;
    //   }

      if (updatedControls[name].value instanceof Array &&
        updatedControls[name].type === 'select' &&
        updatedControls[name].multiple !== undefined &&
        updatedControls[name].multiple
        )
      {
        selectedOptions = event.target.selectedOptions;
        newValArray = [...selectedOptions].map(option => option.value);
        value = newValArray;
        console.log("MultiSelect - Value : "+value)
      }
      else 
      {
        value = event.target.value;
        if (updatedControls[name].value instanceof Array &&
        updatedControls[name].type === 'checkbox') {
          console.log("Before Checkbox Value : "+value)
          if(updatedControls[name].value.indexOf(value) > -1) {
          newValArray = 
          updatedControls[name].value.filter(s => s !== value)
          } else {
          newValArray = [...updatedControls[name].value, value];
          }
        value = newValArray;
        console.log("Checkbox Value : "+value)
        }
        else
        {
        value = event.target.value
        console.log("Value : "+value)
        }
      }
     
      updatedFormElement.value = value;
      updatedFormElement.touched = true;

      let ValidationResult = Validate(value, updatedFormElement.validationRules);
      console.log(ValidationResult)
      updatedFormElement.valid = ValidationResult.valid;
      if ((!updatedFormElement.valid) && updatedFormElement.touched)
      {
        updatedFormElement.errorMsg = ValidationResult.errorMsg
      }
      else {
        updatedFormElement.errorMsg = ''
      }

      updatedControls[name] = updatedFormElement;

      let formIsValid = true;
      for (let inputIdentifier in updatedControls) {
        formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
      }

      this.setState({
        formControls: updatedControls,
        formIsValid: formIsValid
      });

  }
  
  
  formSubmitHandler = () => {
	const formData = {};
	for (let formElementId in this.state.formControls) {
	    formData[formElementId] = this.state.formControls[formElementId].value;
	}
    
    	console.dir(formData);
  }
  

  render() {
    
    return (
      <div className="App">
              <Input inputType={'text'}
                     title={'Name'}
                     name={'name'}
                     placeholder={this.state.formControls.name.placeholder}
                     value={this.state.formControls.name.value}
                     handleChange={this.changeHandler}
                     touched={this.state.formControls.name.touched}
                     valid={this.state.formControls.name.valid}
                     errorMsg={this.state.formControls.name.errorMsg}
          />

          <TextArea 
                    title={'Address'}
                    name={'address'}
                    placeholder={this.state.formControls.address.placeholder}
                    value={this.state.formControls.address.value}
                    handleChange={this.changeHandler}
                    touched={this.state.formControls.address.touched}
                    valid={this.state.formControls.address.valid}
                    errorMsg={this.state.formControls.address.errorMsg}
          />

          <Input 
                  inputType={'email'}
                  title={'Email'}
                  name={'my_email'}
                  placeholder={this.state.formControls.my_email.placeholder}
                  value={this.state.formControls.my_email.value}
                  handleChange={this.changeHandler}
                  touched={this.state.formControls.my_email.touched}
                  valid={this.state.formControls.my_email.valid}
                  errorMsg={this.state.formControls.my_email.errorMsg}
          />

           <Select 
                  title={'Gender'}
                  name={'gender'}
                  placeholder={this.state.formControls.gender.placeholder}
                  value={this.state.formControls.gender.value}
                  handleChange={this.changeHandler}
                  options={this.state.formControls.gender.options}
                  touched={this.state.formControls.gender.touched}
                  valid={this.state.formControls.gender.valid}
                  errorMsg={this.state.formControls.gender.errorMsg}
              />

          <Radio  title={'My Radio'}
                  name={'my_radio'}
                  handleChange={this.changeHandler}
                  value = {this.state.formControls.my_radio.value}
                  options={this.state.formControls.my_radio.options}
                  touched={this.state.formControls.my_radio.touched}
                  valid={this.state.formControls.my_radio.valid}
                  errorMsg={this.state.formControls.my_radio.errorMsg}
                /> 

              <CheckBox  title={'My Checkbox'}
                  name={'my_checkbox'}
                  handleChange={this.changeHandler}
                  value = {this.state.formControls.my_checkbox.value}
                  options={this.state.formControls.my_checkbox.options}
                  touched={this.state.formControls.my_checkbox.touched}
                  valid={this.state.formControls.my_checkbox.valid}
                  errorMsg={this.state.formControls.my_checkbox.errorMsg}
                /> 
          
          <Select 
                  title={'My MultiSelect'}
                  name={'my_multiselect'}
                  placeholder={this.state.formControls.my_multiselect.placeholder}
                  value={this.state.formControls.my_multiselect.value}
                  handleChange={this.changeHandler}
                  options={this.state.formControls.my_multiselect.options}
                  touched={this.state.formControls.my_multiselect.touched}
                  valid={this.state.formControls.my_multiselect.valid}
                  errorMsg={this.state.formControls.my_multiselect.errorMsg}
                  multiple={this.state.formControls.my_multiselect.multiple}
              />

           <Button 
              action = {this.formSubmitHandler}
              type = {'primary'} 
              title = {'Submit'} 
              style={buttonStyle}
              disabled={! this.state.formIsValid}
          /> { /*Submit */ }
          
          <Button 
            action = {this.handleClearForm}
            type = {'secondary'}
            title = {'Clear'}
            style={buttonStyle}
          /> {/* Clear the form */}
        
      </div>
    );

  }
}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

export default FormContainer2;