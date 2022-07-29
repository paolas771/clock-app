import React, { useState } from 'react'
import Quote from './Components/Quote'
import Time from './Components/Time'
import MoreInfo from './Components/MoreInfo'
export default function App() {
  const [time, setTime] = React.useState('http://worldtimeapi.org/api/ip')
  const [location, setLocation] = React.useState('http://ipwho.is/')
  const [timer, setTimer] = useState(0)
  const [expandInfo, setExpandInfo] = React.useState(false)
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
  function expand(){
    setExpandInfo(prev => !prev)
  }
  
  return (
    <div className="App">
     {!expandInfo && <Quote />}
     <Time 
      time={time.datetime}
      abbreviation={time.abbreviation}
      city={location.city}
      country={location.country_code}
    />
    <button onClick={expand}>{expandInfo ? 'Less' : 'More'} <img src={expandInfo ? '../assets/desktop/icon-arrow-up.svg' : '../assets/desktop/icon-arrow-down.svg'} alt=''/></button>
    {expandInfo && <MoreInfo 
      timeZone={time.timezone}
      yearDay={time.day_of_year}
      weekDay={time.day_of_week}
      weekNumber={time.week_number}
    />}
    </div>
  );
}


