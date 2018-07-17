import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates'; // calender picker tool
import 'react-dates/initialize'; // req. for react-dates
import 'react-dates/lib/css/_datepicker.css'; // req. for react-dates

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
      error: false
    };
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ( { note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {  // regex to allow numbers only and up to 2 decimals
      this.setState(() => ({ amount }));  
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    
    if (!this.state.description || !this.state.amount) {
      // set error state
      this.setState(() => ({ error: true }));
    } else {
      this.setState(() => ({ error: false }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,  // parse str -> num with decimals, base 10
        createdAt: this.state.createdAt.valueOf(), // valueOf: moment method that parse number to millisecs
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        <div>{this.state.error === true && 'Please provide description and amount.'}</div>
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="Description"
            autoFocus // focuses on form when renders to page. Only focus 1 at a time
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false} // allows to pick any day, even past days
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm;