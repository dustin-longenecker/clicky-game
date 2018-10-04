import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
import "./App.css";
let score = 0;
let topScore = 0;
let message = "Click any image to score but careful not to click the same image twice! "
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score,
    topScore,
    message
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };
  updateClicked = id => {
    // console.log(`${id}, clicked`);
    // this.setState({
    //   score: this.state.score + 1
    // });
     const clickedFriend = this.state.friends.filter(clickedFriend => clickedFriend.id === id);
     console.log (clickedFriend);

     if (clickedFriend[0].clicked === false) {
      //Set the friend's clicked property to true.
      clickedFriend[0].clicked = true;
      console.log(clickedFriend);
      //Use the setState method to update a component's state.
      //Update the score - number of correct guesses/clicks without clicking an image twice.
      //Update the game message in the top navigation bar.
      this.setState({
        score: this.state.score + 1,
        message: "Good Job. Keep Clicking! "
      });
      console.log(this.state.score);
    }

    //if the friend has already clicked the image once already, then...
    else if (clickedFriend[0].clicked === true)
    {
      //Update the game message to tell the user that the friend has already been clicked. Reset the game.
      //Update the score - number of correct clicks - back to 0 to reset the game.
      //Update the top score.
      this.setState({
        score: 0,
        topScore: this.state.score,
        message: "You lose. Click some more! "

      });
      //console.log(Message);
      //For every friend, set the clicked value back to false.
      friends.forEach(friend => friend.clicked = false);
      console.log(friends);
    }

    //if user clicks all images without clicking on an image more than once (that is, score = 11), the user won.
    if (this.state.score === 11) {
      //Update the game message to tell the user that they won. Reset the game.
      //Update the score - number of correct clicks - back to 0 to reset the game.
      //Update the top score.
      this.setState({
        score: 0,
        topScore: this.state.score + 1,
        message: "WINNER!"
      });
      //For every friend, set the clicked value back to false.
      friends.forEach(friend => friend.clicked = false);
      console.log(friends);
    }

    //Randomize
    //Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.
    for (let i = friends.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [friends[i], friends[j]] = [friends[j], friends[i]];
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>

        <Title
        ></Title>
        <Navbar
          score={this.state.score}
          topScore ={this.state.topScore}
          message={this.state.message}
        />
        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            updateClicked={this.updateClicked}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}

          />

        ))}
      </Wrapper>
    );
  }
}

export default App;
