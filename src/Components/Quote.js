import React from 'react'

export default function Quote(){
    const [quote, setQuote] = React.useState('https://programming-quotes-api.herokuapp.com/Quotes/random')
    
    React.useEffect(() => {
        fetch('https://programming-quotes-api.herokuapp.com/Quotes/random')
        .then(res => res.json())
        .then(data => setQuote(data))
    }, [])
    
    return(
        <div>
            <p>{quote.en}</p>
            <img src='../assets/desktop/icon-refresh.svg' alt=''/>
            <p>{quote.author}</p>
        </div>
    )
}