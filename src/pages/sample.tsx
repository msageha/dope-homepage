// npm install react tailwindcss tailwindcss-animated

import React, { useEffect, useState } from "react";
// import "tailwindcss/tailwind.css";
// import "tailwindcss-animated/dist/tailwind.css";

const AnimatedText: React.FC<{ text: string; delay: number }> = ({
    text,
    delay,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timeout);
    }, [delay]);

    return (
        <div
            className={`opacity-0 animated fadeIn ${
                isVisible ? "opacity-100" : ""
            }`}
        >
            {text}
        </div>
    );
};

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-end mt-10 mr-10">
            <div className="flex space-x-2">
                <AnimatedText text="D" delay={0} />
                <AnimatedText text="O" delay={500} />
                <AnimatedText text="P" delay={1000} />
                <AnimatedText text="E" delay={1500} />
            </div>
            <div className="flex flex-col items-end space-y-2">
                <AnimatedText text="Discover" delay={2000} />
                <AnimatedText text="Optimize" delay={2500} />
                <AnimatedText text="Pioneer" delay={3000} />
                <AnimatedText text="Empower" delay={3500} />
            </div>
        </div>
    );
};

export default HomePage;
