import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [quoteObj, setQuoteObj] = useState({
		quote: "",
		author: ""
	});

	const url = "https://api.quotable.io";

	useEffect(() => {
		fetchQuote();
	}, []);

	const fetchQuote = async () => {
		const res = await fetch(url + "/quotes/random");
		const data = await res.json();

		setQuoteObj({
			quote: data[0].content,
			author: data[0].author
		});
	};

	return (
		<div className="App">
			<h2>Random Quote Machine</h2>
			<div id="quote-box">
				<h1 id="text"> {quoteObj.quote} </h1>
				<p id="author">{quoteObj.author}</p>
				<div className="tweet-section">
					<a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer">
						Tweet Quote
					</a>
					<button id="new-quote" onClick={fetchQuote}>
						New Quote
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
