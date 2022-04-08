import React, { Component } from 'react';

import Validate from './Validate';

import Input from './components/Input';
import TextArea from './components/TextArea';
import Select from './components/Select';
import CheckBox from './components/CheckBox';
import Radio from './components/Radio';
import Button from './components/Button'

let initFormState =   {
        
  firstname : {  
      name : 'firstname',
      title : 'First Name',
      type: 'text',
      value: '',
      placeholder: 'First Name',
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

    lastname : {  
      name : 'lastname',
      title : 'Last Name',
      type: 'text',
      value: '',
      placeholder: 'Last Name',
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


    age : {  
      name : 'age',
      title : 'Age',
      type: 'text',
      value: '',
      placeholder: 'Age',
      valid: false,
      errorMsg: '',
      touched: false,
      validationRules: {
        minLength: 1,
        maxLength: 2,
        isRequired: true,
        isNumber: true
       },

    },


    gender: {
      name : 'gender',
      title : 'Gender',
      type: 'select',
      value: '',
      placeholder: 'Gender',
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

    skills: {
      name : 'skills',
      title : 'Skills',
      type: 'radio',
      value: '',
      placeholder: 'Skills',
      valid: false,
      errorMsg: '',
      touched: false,
      validationRules: {
          isRequired: true,
      },
      options: [
        { value: '0', displayValue: 'Developer' },
        { value: '1', displayValue: 'Business Analyst' }
      ]
    },
};

class FormContainer2 extends Component {
  constructor() {
    super();

    this.state = {
      formIsValid: false,
      formControls : initFormState
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

  handleClearForm = () => {

      this.setState({
        formControls: initFormState,
        formIsValid: false
      });

    
  }
  

  render() {
    
    return (
      <div className="App">

            <Input inputType={'text'}
                     title={this.state.formControls.firstname.title}
                     name={this.state.formControls.firstname.name}
                     placeholder={this.state.formControls.firstname.placeholder}
                     value={this.state.formControls.firstname.value}
                     handleChange={this.changeHandler}
                     touched={this.state.formControls.firstname.touched}
                     valid={this.state.formControls.firstname.valid}
                     errorMsg={this.state.formControls.firstname.errorMsg}
          />

            <Input inputType={'text'}
                     title={this.state.formControls.lastname.title}
                     name={this.state.formControls.lastname.name}
                     placeholder={this.state.formControls.lastname.placeholder}
                     value={this.state.formControls.lastname.value}
                     handleChange={this.changeHandler}
                     touched={this.state.formControls.lastname.touched}
                     valid={this.state.formControls.lastname.valid}
                     errorMsg={this.state.formControls.lastname.errorMsg}
          />  


              <Input inputType={'text'}
                     title={this.state.formControls.age.title}
                     name={this.state.formControls.age.name}
                     placeholder={this.state.formControls.age.placeholder}
                     value={this.state.formControls.age.value}
                     handleChange={this.changeHandler}
                     touched={this.state.formControls.age.touched}
                     valid={this.state.formControls.age.valid}
                     errorMsg={this.state.formControls.age.errorMsg}
          />  

                <Select 
                  title={this.state.formControls.gender.title}
                  name={this.state.formControls.gender.name}
                  placeholder={this.state.formControls.gender.placeholder}
                  value={this.state.formControls.gender.value}
                  handleChange={this.changeHandler}
                  options={this.state.formControls.gender.options}
                  touched={this.state.formControls.gender.touched}
                  valid={this.state.formControls.gender.valid}
                  errorMsg={this.state.formControls.gender.errorMsg}
              />


              <Radio   
                  title={this.state.formControls.skills.title}
                  name={this.state.formControls.skills.name}
                  handleChange={this.changeHandler}
                  value = {this.state.formControls.skills.value}
                  options={this.state.formControls.skills.options}
                  touched={this.state.formControls.skills.touched}
                  valid={this.state.formControls.skills.valid}
                  errorMsg={this.state.formControls.skills.errorMsg}
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