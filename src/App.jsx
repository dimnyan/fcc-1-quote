// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { updateQuote } from "./features/counter/quoteSlice";
import { useEffect } from "react";

function App() {
  const quote = useSelector((state) => state.quotes.quoteObj);
  // const payload = useSelector((state) => state.counter.action.payload);
  const dispatch = useDispatch();

  const handleUpdateQuote = () => {
    fetch("https://api.quotable.io/random", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateQuote(data));
      });
  };

  useEffect(() => {
    handleUpdateQuote();
  }, []);

  // console.log(toLink(quote.content));

  if (quote === null) {
    return <p>loading</p>;
  } else if (quote.content) {
    return (
      <>
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
              <button id="tweet-quote">Tweet Quote</button>
            </a>
            <button onClick={handleUpdateQuote} id="new-quote">
              Update Quote
            </button>
          </div>
        </div>
      </>
    );
  }
}

function toLink(text) {
  return text.split(" ").join("%20");
}

export default App;
