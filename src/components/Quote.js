import { useRef, useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [url, setUrl] = useState('');
  const awaitingFetch = useRef(null);
  useEffect(() => {
    const getQuote = async () => {
      const data = await fetch('https://quotes.rest/qod?language=en');
      const response = await data.json();
      if (response.contents) {
        setQuote(response.contents.quotes[0].quote);
        setUrl(response.contents.quotes[0].background);
        awaitingFetch.current.remove();
      }
    };
    getQuote();
  }, []);

  return (
    <div className="quote">
      <div ref={awaitingFetch}>
        <p id="" className="awaiting-fetch">
          Fetching...
        </p>
        <p id="loading" />
      </div>
      <img className="quote-img" src={url} alt="" />
      <h2 className="quote-text">{quote}</h2>

    </div>
  );
};

export default Quote;
