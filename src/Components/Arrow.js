import React from "react";

export default function Arrow({ arrowType, position, value }) {

    // 1. Нужно, чтобы от типа стрелки и значения в скрытом тексте менялось значение.

    let text 

        switch (arrowType) {
            case "second-arrow": text = `${value} seconds`
            break
            case "minute-arrow": text = `${value} minutes`
            break
            default: text = `${value} hours`
        }



    let arrowStyle = {
        transform: `rotate(${position}turn)`,
        // transition: "transform 0.3s ease-in-out"
    }


    return <div className={arrowType} style={arrowStyle} ><span className="visually-hidden">{text}</span></div>
}