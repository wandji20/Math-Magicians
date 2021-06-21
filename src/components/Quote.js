/* eslint-disable */
import React from 'react'
import { useEffect, useState } from 'react'

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [url, setUrl] = useState('')
  useEffect(() => {
    console.log(quote)
    const getQuote = async () => {
      const data = await fetch('https://quotes.rest/qod?language=en')
      const response = await data.json()
      console.log(response.contents.quotes[0])
      if (response.contents) {
        setQuote(response.contents.quotes[0].quote)
        setUrl(response.contents.quotes[0].background)
      } 
    }
    getQuote()
  })

  return (
    <div className = 'quote'>
      <img className = 'quote-img' src={url} alt="" />
      <h2 className = 'quote-text'>{quote}</h2>
     
    </div>
  )
}

export default Quote;
