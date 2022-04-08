import React, {Component} from 'react';  

// Include bootstrap.css and bootstrap-theme.css in index.html

/* Import Components */
import CheckBox from './components/CheckBox';  
import Input from './components/Input';  
import TextArea from './components/TextArea';  
import Select from './components/Select';
import Button from './components/Button';
import Radio from './components/Radio'

let initialUserState =   {
  name: '',
  age: '',
  gender: '',
  highesteducation: '',
  skills: [],
  wishlist: [],
  about: ''
}

class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser : initialUserState,

      genderOptions: ['Male', 'Female', 'Others'],
      highesteducationOptions: ['Graduate', 'Post-Graduate', 'Others'],
      skillOptions: ['Programming', 'Development', 'Design', 'Testing'],
      wishlistOptions: ['React', 'Angular', 'Vue', 'Backbone']

    }

    this.handleInput = this.handleInput.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
   // this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
  }

  handleInput(e) {
      let value = e.target.value;
      let name = e.target.name;

      //Computed property names
      console.log(`Input Name : ${name}  Value : ${value}`);
      this.setState( prevState => ({ newUser : 
        {...prevState.newUser, [name]: value
        }
      })
      , () => console.log(this.state.newUser)
      )
      //console.log(this.state.newUser)
  }

  handleCheckBox(e) {

    const newSelection = e.target.value;
    console.log(newSelection);
    let newSelectionArray;

    if(this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = 
          this.state.newUser.skills.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

      this.setState( prevState => ({ newUser:
        {...prevState.newUser, skills: newSelectionArray }
      })
      , ()=>console.log(this.state.newUser)
      )
}

handleMultiSelect(e) {

  const newSelection = e.target.value;
    console.log(newSelection);
    let newSelectionArray;
  /*
    if(this.state.newUser.wishlist.indexOf(newSelection) > -1) {
      newSelectionArray = 
          this.state.newUser.wishlist.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.newUser.wishlist, newSelection];
    }
*/
      newSelectionArray = [...e.target.selectedOptions].map(option => option.value);
      this.setState( prevState => ({ newUser:
        {...prevState.newUser, wishlist: newSelectionArray }
      })
      , ()=>console.log(this.state.newUser)
      )
}

  // handleTextArea(e) {
  //   console.log("Inside handleTextArea");
  //   let value = e.target.value;
  //   this.setState(prevState => ({
  //     newUser: {
  //       ...prevState.newUser, about: value
  //     }
  //     })
  //     , ()=>console.log(this.state.newUser)
  //     )
  // }


 
  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    console.log(JSON.stringify(userData));

  }   

  handleClearForm(e) {
  
      e.preventDefault();
      this.setState({ 
        newUser: initialUserState
      })
  }

  render() {
    return (
    
        <form className="container-fluid">
       
            <Input inputType={'text'}
                   title= {'Full Name'} 
                   name= {'name'}
                   value={this.state.newUser.name} 
                   placeholder = {'Enter your name'}
                   handleChange = {this.handleInput}
            /> 
        
          <Input inputType={'number'} 
                name={'age'}
                title= {'Age'} 
                value={this.state.newUser.age} 
                placeholder = {'Enter your age'}
                handleChange={this.handleInput} 
          />  

          <Select title={'Gender'}
                  name={'gender'}
                  options = {this.state.genderOptions} 
                  value = {this.state.newUser.gender}
                  placeholder = {'Select Gender'}
                  handleChange = {this.handleInput}
          /> 

          <Radio  title={'Highest Education'}
                  name={'highesteducation'}
                  options={this.state.highesteducationOptions}
                  selectedOptions = { this.state.newUser.highesteducation}
                  handleChange={this.handleInput}
          /> 
          
          <CheckBox  title={'Skills'}
                  name={'skills'}
                  options={this.state.skillOptions}
                  selectedOptions = { this.state.newUser.skills}
                  handleChange={this.handleCheckBox}
          /> 

          <Select title={'WishList'}
                  name={'wishlist'}
                  options = {this.state.wishlistOptions} 
                  value = {this.state.newUser.wishlist}
                  placeholder = {'Select WishList'}
                  handleChange = {this.handleMultiSelect}
                  multiple
          /> 

          <TextArea
              title={'About you.'}
              rows={10}
              value={this.state.newUser.about}
              name={'about'}
              handleChange={this.handleInput}
              placeholder={'Describe your past experience and skills'} 
          />

          <Button 
              action = {this.handleFormSubmit}
              type = {'primary'} 
              title = {'Submit'} 
              style={buttonStyle}
          /> { /*Submit */ }
          
          <Button 
            action = {this.handleClearForm}
            type = {'secondary'}
            title = {'Clear'}
            style={buttonStyle}
          /> {/* Clear the form */}
          
        </form>
  
    );
  }
}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

export default FormContainer;