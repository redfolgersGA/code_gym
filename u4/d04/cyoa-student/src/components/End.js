import React from 'react';

const End = (props) => {
  const style = props.ending.code === "red" ? "lose" : "win"
  return( <p className={style}> {props.ending.text}</p>





    );

}
