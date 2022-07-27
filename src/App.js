import React, { useState } from 'react'
import Quote from './Components/Quote'
import Time from './Components/Time'
export default function App() {
  const [time, setTime] = React.useState('http://worldtimeapi.org/api/ip')
  const [location, setLocation] = React.useState('https://api.ipbase.com/json/?apikey=dcTtWFj0pKh4crRKlhKsbJuJi7tGmc4zkDriXu3U')
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

  React.useEffect(() => {
    fetch('http://ipwho.is')
    .then(res => res.json())
    .then(info => setLocation(info))
  }, [])
  console.log(location)
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


