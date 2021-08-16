import { useState } from "react";
import "./styles.css";

const dogUrl =
  "https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=312&q=80";
const catUrl =
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=727&q=80";
const parrotUrl =
  "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFycm90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

export default function App() {
  const [picture, setPicture] = useState(dogUrl);

  const changeImage = (id) => {
    switch (id) {
      case "cat":
        setPicture(catUrl);
        break;
      case "parrot":
        setPicture(parrotUrl);
        break;
      default:
        setPicture(dogUrl);
    }
  };

  return (
    <div className="App">
      <h1>My pet world</h1>
      <div className="container">
        <div className="btn-container">
          <button onClick={() => changeImage("dog")}> Dog</button>
          <button onClick={() => changeImage("cat")}> Cat</button>
          <button onClick={() => changeImage("parrot")}> Parrot</button>
        </div>
        <div className="img-container">
          <img src={picture} alt="dog" />
        </div>
      </div>
    </div>
  );
}
