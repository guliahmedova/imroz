import { useState, useEffect } from "react";

export default function CompanyGrowthCard(props) {

    const { title, number, duration } = props

    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(number.substring(0, 3))

        //if zero, return
        if (start === end) return

        let totalMilSetOut = parseInt(duration);
        let incrementTime = (totalMilSetOut / end) * 1000;

        let timer = setInterval(() => {
            start += 1;
            setCount(String(start) + number.substring(3))
            if (start === end) {
                clearInterval(timer)
            }
        }, incrementTime);
    }, [number, duration])


    return (
        <div className="column">
            <h2 className="column-title">{count}+</h2>
            <p className="text">{title}</p>
        </div>
    )
}