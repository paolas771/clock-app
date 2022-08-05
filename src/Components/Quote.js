import React from 'react'

export default function Quote(){
    const [quote, setQuote] = React.useState('https://programming-quotes-api.herokuapp.com/Quotes/random')
    const [update, setUpdate] = React.useState(0)
    React.useEffect(() => {
        fetch('https://programming-quotes-api.herokuapp.com/Quotes/random')
        .then(res => res.json())
        .then(data => setQuote(data))
    }, [update])

    function newQuote(){
        setUpdate(update + 1)
    }
    return(
        <div className="quoteContainer">
            <p className="quote">{quote.en}</p>
            <button onClick={newQuote} className="refreshButton"><img src='../assets/desktop/icon-refresh.svg' alt=''/></button>
            <p className="author">{quote.author}</p>
        </div>
    )
}