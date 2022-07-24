/* eslint-disable */
//import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //Variables
  let [postTitle, a] = useState(["title1", "title2", "title3"]);
  let [likeCounter, b] = useState(0);

  //body
  return (
    <div className="App">
      <div className="nav-black-block">
        <h4 style={{ color: "red", fontSize: "16px" }}>Blog</h4>
      </div>

      <div className="list-box">
        <h4 className="title-list">
          {postTitle[0]}
          <span>💝</span>
          {likeCounter}
        </h4>
        <p className="date-list">published date : 2022.07.21</p>
        <h4 className="title-list">{postTitle[1]}</h4>
        <p className="date-list">published date : 2022.07.21</p>
        <h4 className="title-list">{postTitle[2]}</h4>
        <p className="date-list">published date : 2022.07.21</p>
      </div>
    </div>
  );
}

export default App;
