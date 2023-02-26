import React, { useState, useEffect } from 'react';
import './Countdown.css';

interface CountdownProps {
    countdown: number;
    onCountdownEnd?: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ countdown, onCountdownEnd }) => {
    const [currentCountdown, setCurrentCountdown] = useState<number>(countdown);

    useEffect(() => {
        if (currentCountdown === 0 && onCountdownEnd) {
            onCountdownEnd();
        }

        const intervalId = setInterval(() => {
            setCurrentCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [currentCountdown, onCountdownEnd]);

    return (
        <div className="countdown-container">
            <div className="countdown-text">{currentCountdown}</div>
        </div>
    );
};

export default Countdown;
