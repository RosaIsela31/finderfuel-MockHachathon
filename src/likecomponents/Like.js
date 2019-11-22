import React, { Component } from 'react';
import UserProfile from './UserProfile'
import Heart from './Heart'

class App extends Component {
    state = {
      LikesNumber: 0

    }
    clickHeart = () => {
        const likes = this.state.LikesNumber
        this.setState({LikesNumber: likes + 1})
      }
     
      render() {
        return (
          <div className="Container">
            
            <UserProfile Likes={this.state.LikesNumber}/>
            <Heart clickHeart={this.clickHeart}/>
          </div>
        );
      }
}
    export default App;