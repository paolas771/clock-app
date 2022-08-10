
export default function MoreInfo(props){
    return(
        <div className="infoSection">
            <h3 className="timezone infoName">Current timezone</h3>
            <h4 className="timezoneValue infoValue">{props.timeZone}</h4>
            <h3 className="yearDay infoName">Day of the year</h3>
            <h4 className="yearDayValue infoValue">{props.yearDay}</h4>
            {props.width >= 1440 && <hr></hr>}
            <h3 className="weekDay infoName">Day of the week</h3>
            <h4 className="weekDayValue infoValue">{props.weekDay}</h4>
            <h3 className="weekNum infoName">Week Number</h3>
            <h4 className="weekNumValue infoValue">{props.weekNumber}</h4>
        </div>
    )
}