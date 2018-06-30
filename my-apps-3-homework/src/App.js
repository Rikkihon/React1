import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import ScoreCard from "./components/ScoreCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import { Stylesheet, View, Vibration, Button} from 'react-native'

const DURATION = 10000;
const PATTERN = [1000, 2000, 3000, 4000];


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score: 0,
    friends
  };


  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  }
  // handleIncrement = () => {
  //   this.setState(prevState => ({ count: prevState.count + 1 }))
  // };
  // handleTotalClicks = () => {
  //   console.log(this.calculateTotalClicks());
  //   if (friends.clickCount >= 2) {
  //     return <p>Game Over</p>
  //   } else { }
  // }

StartVibrationFunction = () => {
  Vibration.vibrate(DURATION);
}

StopVibrationFunction = () => {
  Vibration.cancel();
}

  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  shuffleOnClick = () => {
    let shuffledFriendState = friends.map((friend) => {
      return friend
    })
    let newState = this.shuffleArray(shuffledFriendState);
    this.setState({ friends: newState })

    //shuffle this and then make that the new state 
    //we are passing by reference vs passing by value 
    //lodash - lets you copy objects and an array without mutating it 
    //lodash 
  }


  handleIndiviualFriendClick = (id) => {
    let arrayWithUpdatedFriend = friends.map((friend) => {
      if (friend.id === id) {
        friend.clickCount++
        console.log("individual friend count", friend.clickCount);
      }
      if (friend.clickCount >= 2)
        alert("Sorry, Game over. You clicked this image twice");
      //this.resetgame()
      return friend
    })
    this.setState({ ...this.state, friends: arrayWithUpdatedFriend })
    this.shuffleOnClick()
    this.updateScore();
    this.resetGame();
  }

  updateScore = () => {
    const score = this.calculateTotalClicks();
    this.setState({score: score})
  }

  calculateTotalClicks = () => {
    return this.state.friends.reduce((prev, cur) => {
      prev += cur.clickCount
      return prev
    }, 0)
  }

  resetGame = (id) => {
    friends.map((friend) => {
      if (friend.id === id)
        friend.clickCount = 0;
      console.log("The game has been reset")
      return friend.clickCount
      //reset the click counter here to be 0

    })
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    // {/* write a function in here to call the overall click counting function */}
    return (
      <Wrapper>
        <Title>A Game of House Seats </Title>
        <ScoreCard
          count={this.state.count}
          score={this.state.score}
        />
        <View style = {styles.MainContainer}>

        </View>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            clickCounter={friend.clickCount}
            handleFriendClick={this.handleIndiviualFriendClick}
          />
        ))}
      </Wrapper>


      /* //put the click counter in this file for the Score  
      //count the clicks on each image and store it for each image
      //build a shuffler for the images to resort the items in the object, this is a shuffler method 
      //click alert to vibrate  
      //make a new component */

    );


  }

}
export default App;
