import React from "react";
import '../components/Button.css'
const Button = () => {
  return (<button className="location-button">{this.props.location ? this.props.location : 'All Locations'}</button>);
}
 
export default Button;