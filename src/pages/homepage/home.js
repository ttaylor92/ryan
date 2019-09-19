import React from 'react';
import './home.sass';

export default class Homepage extends React.Component{
  render(){
    return(
      <div>
        <div className="header"></div>
        <div className="menu"></div>
        <div className="content"></div>
        <div className="footer"></div>
      </div>
    )
  }
}
