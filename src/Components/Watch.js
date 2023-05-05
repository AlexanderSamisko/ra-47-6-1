import React, { useEffect, useState } from "react";
import Arrow from "./Arrow";
import moment from "moment";

export default function Watch({initTime, timeZone, title, manageWatch, watches}) {
    
    const [seconds, setSeconds] = useState(+initTime[2]);
    const [minutes, setMinutes] = useState(+initTime[1]);
    const [hours, setHours] = useState(+initTime[0]);
    const [time, setTime] = useState(initTime);

    let fixHour = ((new Date()).getTimezoneOffset()) / 60 + +timeZone;

    let secondsArrow = seconds/60 + 0.75;
    let minutesArrow = minutes/60 + seconds/(60 * 60) + 0.75;
    let hoursArrow = hours/12 + minutes/(12* 60) + seconds/(12 * 60 * 60) + 0.75;
    let text = moment().add(fixHour, 'hours').format('hh') + ":" +  moment().format('mm:ss');

    let timer = setTimeout(()=> {
        setTime([moment().get('hour'), moment().get('minute'), moment().get('second')]);
        console.log(title);
    }, 900);

    useEffect(() => {
        return (
            ()=> {
                clearInterval(timer)
            }
        )
    }, [timer]);


    useEffect(() => {
        setSeconds(+time[2]);
        setMinutes(+time[1]);
        setHours(+time[0]);
    }, [time])

    const deleteWatch = () => {

        manageWatch(
            watches.filter(
                (item) => item.title !== title
            )
        )
    }

    return <div className="watch-block"> 
        <div className="watch-round">
            <span className="visually-hidden"></span>
            <Arrow arrowType="second-arrow" position={secondsArrow} value={seconds}/>
            <Arrow arrowType="minute-arrow" position={minutesArrow} value={minutes}/>
            <Arrow arrowType="hour-arrow" position={hoursArrow} value={hours} />
            <div className="watch-center"></div>
        </div>
        <h2 className="watch-title">{title}</h2>
        <div className="watch-cifral">
            <span className="tabloe"> {text} </span>
            <button className="delete-btn" onClick={deleteWatch}> Удалить </button>
        </div>
    </div>
    
    
}