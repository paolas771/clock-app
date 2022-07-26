import React from 'react'
import Quote from './Components/Quote'
import Time from './Components/Time'
export default function App() {
  const [time, setTime] = React.useState('http://worldtimeapi.org/api/ip')

    //move to app.js and pass props
    React.useEffect(() => {
        fetch('http://worldtimeapi.org/api/ip')
        .then(res => res.json())
        .then(info => setTime(info))
    }, [])

  return (
    <div className="App">
     <Quote />
     <Time 
      time={time.datetime}/>
    </div>
  );
}


