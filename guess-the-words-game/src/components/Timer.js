import React, { useState, useEffect } from 'react';

const Timer = ({ onTimeout }) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (seconds >= 60) {
            onTimeout();
        }
    }, [seconds]);

    return <div>Time: {seconds} seconds</div>;
};

export default Timer;
