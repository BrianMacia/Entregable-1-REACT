import { useState } from "react";
import quotes from "./quotes.json";
import "../components/App.css";

function App() {
  console.log(quotes);
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(randomIndex);

  const changequotes = () => {
    const anotherRandom = Math.floor(Math.random() * quotes.length);
    setIndex(anotherRandom);

  };

  const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#f0f06e",
    "#F85676",
    "#002cbd",
    "#08d3ee",
    "#07cc28",
    "#06d463",
    "#d406a7",
    "#d40639",
    "#d40606af",
    "#175fa3",
    "#c3c8cc"
  ];
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColorIndex]}`;

  return (

    <div className="App" style={{ color: colors[randomColorIndex] }}>
      <div className="card" >
        <h1>
          <i class="fa-solid fa-quote-left"></i>

          {quotes[index].quote} {" "}

        </h1>
        <h2>
          {quotes[index].author}
        </h2>
        <ul >
          <button onClick={changequotes} style={{ background: colors[randomColorIndex] }}>
            <i class="fa-sharp fa-solid fa-angle-right" style={{ color: "white" }}></i></button >
        </ul>
      </div>
    </div>
  );
}

export default App;
