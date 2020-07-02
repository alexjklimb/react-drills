import React, { Component } from "react";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={'https://media.guestofaguest.com/t_article_content/wp-content/uploads/2015/05/10903648_383971765106291_579397609_n.jpg'} />
      </div>
    );
  }
}

export default App;
