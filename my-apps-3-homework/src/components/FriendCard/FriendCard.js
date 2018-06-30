import React from "react";
import "./FriendCard.css";
// props - are like property or parameters to pass in
// state is just the data , it's stored in an object in a {{name: value}} pair 
//need an event handler 
//onChange = {this.handleChange}
//this is an event handler method
//this.setState ({this.}) 
// reactjs.org/docs/forms.html

const FriendCard = props => (
  //this props will handle the friends click on the click,
  // we don't want it to happen right away. Then we have to call it with the right id
  <div className="card" onClick={() => props.handleFriendClick(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
    
  </div>
);

export default FriendCard;
