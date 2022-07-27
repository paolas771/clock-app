import React from 'react'

export default function Time(props){
    

    //get time from string
    var date = new Date(props.time)
    var hour = date.getHours()
    var localHour = hour - 12
    var minutes = date.getMinutes()
    var mainTime = [localHour, minutes].join(':')
    
    
    function getGreeting(hour){
        var greeting = 5 <= hour && hour < 12 ? "good morning"
                    : 12 <= hour && hour < 18 ? "good afternoon"
                    : "good evening"
       
        return greeting
    }

    const greet = getGreeting(hour)

    return(
        <div>
            <h2>{greet}</h2>
            <h1>{mainTime}<span>{props.abbreviation}</span></h1>
            <h2>in {props.city}, {props.country}</h2>
        </div>
    )
}