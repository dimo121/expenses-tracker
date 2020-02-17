import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';


export class AddExpensePage extends React.Component{
  
  onSubmit = (expense) => {
    this.props.addExpense(expense);  
    this.props.history.push('/');
  };

  render(){
    return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={this.onSubmit}
      />
    </div>
    );
  }

};



//need a class declaration as the onSubmit is recalculated with every render
//this way the function is refactored in the component class declaration above.

/*
const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.onSubmit(expense);
        props.history.push('/');
      }}
    />
  </div>
);

*/

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});


export default connect(undefined,mapDispatchToProps)(AddExpensePage);
