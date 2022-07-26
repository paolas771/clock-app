import React from 'react'

export default function Quote(){
    const [quote, setQuote] = React.useState('https://programming-quotes-api.herokuapp.com/Quotes/random')
    
    React.useEffect(() => {
        fetch('https://programming-quotes-api.herokuapp.com/Quotes/random')
        .then(res => res.json())
        .then(data => setQuote(data))
    }, [])

    console.log(quote)
    return(
        <div>
            <p>{quote.en}</p>
            <p>{quote.author}</p>
        </div>
    )
}