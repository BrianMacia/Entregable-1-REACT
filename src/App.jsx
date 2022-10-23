import { useState } from "react";
import quotes from "./components/quotes.json";
import "../components/App.css";
import colors from "./components/Colors"
function App() {
  console.log(quotes);
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(randomIndex);

  const changequotes = () => {
    const anotherRandom = Math.floor(Math.random() * quotes.length);
    setIndex(anotherRandom);

  };

  
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
