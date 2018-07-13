import React from 'react';

const EditExpensePage = (props) => (
  <div>
    Editing the expense with id of {props.match.params.id}. {/* access to props via appRouter/ console to get data */}
  </div>
);

export default EditExpensePage;