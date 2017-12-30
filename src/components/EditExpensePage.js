import React, { Component } from 'react';

const EditExpensePage = (props) => {
  return (
    <div>Edit Expense Page ID: {props.match.params.id}</div>
  )
};

export default EditExpensePage;