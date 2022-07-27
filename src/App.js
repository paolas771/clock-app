import React, { useState } from 'react'
import Quote from './Components/Quote'
import Time from './Components/Time'
export default function App() {
  const [time, setTime] = React.useState('http://worldtimeapi.org/api/ip')
  const [location, setLocation] = React.useState('http://ipwho.is/')
  const [timer, setTimer] = useState(0)
  
  //timer to update the clock every minute
  setTimeout(() => {
    setTimer(timer + 1)
  }, 60000)

  React.useEffect(() => {
    fetch('http://worldtimeapi.org/api/ip')
    .then(res => res.json())
    .then(info => setTime(info))
  }, [timer])

  //https://ipwhois.io/documentation used this api instead because the one recommended was not giving accurate location
  React.useEffect(() => {
    fetch('http://ipwho.is/')
    .then(res => res.json())
    .then(info => setLocation(info))
  }, [])

  return (
    <div className="App">
     <Quote />
     <Time 
      time={time.datetime}
      abbreviation={time.abbreviation}
      city={location.city}
      country={location.country_code}
    />
    </div>
  );
}


