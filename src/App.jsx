// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { updateQuote } from "./features/counter/quoteSlice";
import { useEffect } from "react";

function App() {
  const quote = useSelector((state) => state.quotes.quoteObj);
  const bgColor = useSelector((state) => state.quotes.color);
  const dispatch = useDispatch();

  const handleUpdateQuote = () => {
    fetch("https://api.quotable.io/random", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateQuote(data));
      });
    // console.log(quote);
    // dispatch(updateColor());
    // document.body.style.backgroundColor = "#" + bgColor;
  };

  useEffect(() => {
    handleUpdateQuote();
  }, []);

  // console.log(toLink(quote.content));

  if (quote === null || bgColor === null) {
    return <p>loading</p>;
  } else if (quote.content) {
    return (
      <div id="body" style={{ backgroundColor: "#" + bgColor }}>
        <div id="quote-box">
          <p id="text">{quote.content}</p>
          <p id="author">- {quote.author}</p>
          <div id="buttons">
            <a
              href={`https://twitter.com/intent/tweet?text="${toLink(
                quote.content
              )}" - ${quote.author}`}
              target="_blank"
            >
              <button
                id="tweet-quote"
                style={{ backgroundColor: "#" + bgColor }}
              >
                Tweet Quote
              </button>
            </a>
            <button
              onClick={handleUpdateQuote}
              id="new-quote"
              style={{ backgroundColor: "#" + bgColor }}
            >
              Update Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function toLink(text) {
  return text.split(" ").join("%20");
}

// function randomColor() {
//   return Math.floor(Math.random() * 16777215).toString(16);
// }

export default App;
