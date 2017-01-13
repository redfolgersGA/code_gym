import React from 'react';

const Choice = (props) => {
const { label, to } = props.details;
return (
  <a className="button" onClick={() => {props.changeAdventure(to)} }>

    {label}
  </a>
  );


}




export default Choice;
