
export default function MoreInfo(props){
    return(
        <div>
            <h3>Current timezone</h3>
            <h4>{props.timeZone}</h4>
            <h3>Day of the year</h3>
            <h4>{props.yearDay}</h4>
            <h3>Day of the week</h3>
            <h4>{props.weekDay}</h4>
            <h3>Week Number</h3>
            <h4>{props.weekNumber}</h4>
        </div>
    )
}