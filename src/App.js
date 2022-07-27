import React, { useState } from 'react'
import Quote from './Components/Quote'
import Time from './Components/Time'
export default function App() {
  const [time, setTime] = React.useState('http://worldtimeapi.org/api/ip')
  //timer to update the clock every minute
  const [timer, setTimer] = useState(0)
  setTimeout(() => {
    setTimer(timer + 1)
  }, 60000)

  React.useEffect(() => {
    fetch('http://worldtimeapi.org/api/ip')
    .then(res => res.json())
    .then(info => setTime(info))
  }, [timer])

  
  return (
    <div className="App">
     <Quote />
     <Time 
      time={time.datetime}
    />
    </div>
  );
}


