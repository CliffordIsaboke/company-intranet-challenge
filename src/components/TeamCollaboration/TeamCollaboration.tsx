import React from 'react';

const Greeting: React.FC = () => {
    const getGreetingMessage = (): string => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            return "Good Morning!";
        } else if (currentHour < 18) {
            return "Good Afternoon!";
        } else {
            return "Good Evening!";
        }
    };

    return (
        <div className="greeting">
            <h1>{getGreetingMessage()} Welcome to the Intranet!</h1>
        </div>
    );
};

export default Greeting;