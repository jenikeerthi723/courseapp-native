import React from 'react';

class MultiSelect extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: ['BMW']};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      //console.log(event.target.selectedOptions)
      this.setState({value: Array.from(event.target.selectedOptions, (item) => item.value)});
    }

    handleSubmit(event) {
      alert('Favorite Car(s) Brand : ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite Car Brand:
            <select multiple={false} value={this.state.value} onChange={this.handleChange}>
              <option value="BMW">BMW</option>
              <option value="Audi">Audi</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Porsche">Porsche</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default MultiSelect;