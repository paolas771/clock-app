import React from 'react'

export default function Time(props){

    //get time from string
    var date = new Date(props.time)
    var hour = date.getHours()
    var minutes = date.getMinutes()
    if(minutes < 10){
        minutes = '0' + minutes
    } 
    var mainTime = [hour, minutes].join(':')
    
    
    function getGreeting(hour){
        var greeting = 5 <= hour && hour < 12 ? "good morning"
                    : 12 <= hour && hour < 18 ? "good afternoon"
                    : "good evening"
       
        return greeting
    }
    const greet = getGreeting(hour)
    //function to get background image depanding on time
    function bgBody(greet){
        const bodyClassName = (greet == 'good evening') ? 'nightTime' : 'dayTime'
        document.body.classList.add(bodyClassName) 
        bodyClassName == 'nightTime' ? document.body.classList.remove('dayTime') : document.body.classList.remove('nightTime')
    }
    const styles375 = {
        paddingTop: (props.info) ? "99px" : "226px"
    }
    const styles768 = {
        paddingTop: (props.info) ? "153px" : "388px"
    }
    const styles1440 = {
        paddingTop: (props.info) ? "56px" : "233px"
    }
    bgBody(greet)
    return(
        <div className="timeContainer" style={props.width <= 768 ? styles375 : props.width <= 1275 ? styles768 : styles1440}>
            <img className="sun/moon" src={(greet == 'good evening') ? '../assets/desktop/icon-moon.svg' : '../assets/desktop/icon-sun.svg'}/>
            <h2 className="greeting">{greet}{props.width > 375 && ", it's currently"}</h2>
            <h1 className="time">{mainTime} <span>{props.abbreviation}</span></h1>
            <h2 className="location">in {props.city}, {props.country}</h2>
        </div>
    )
}