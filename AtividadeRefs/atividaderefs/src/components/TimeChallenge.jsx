import { useState } from "react";

const TimeChallenge = (title, targetTime) => {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const [formatedTimeRemaining, setFormatedTimeRemaining] = useState();
    const [userLost, setUserLost] = useState(false);

    const timerIsActive = (timeRemaining > 0) && (timeRemaining < targetTime * 1000);

    let timer

    const handleStart = () => {
        setInterval(() => {
            setTimeRemaining(prevtimeRemaining => prevtimeRemaining - 10);
        }, 10);
    }
}

export default TimeChallenge