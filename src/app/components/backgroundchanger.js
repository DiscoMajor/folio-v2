"use client";
import { useState, useEffect } from "react";

const backgrounds = [
    "url('./backgrounds/gradient.png')",
    "url('./backgrounds/gradient3.png')",
    "url('./backgrounds/gradient4.png')",
    "url('./backgrounds/gradient5.png')",
    "url('./backgrounds/gradient6.png')",
    "url('./backgrounds/gradient7.png')",
    "url('./backgrounds/gradient8.png')",
    "url('./backgrounds/gradient9.png')",
];

const getRandomBackground = (currentBackground) => {
    let newBackground;
    do {
        newBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    } while (newBackground === currentBackground);
    return newBackground;
};

const BackgroundChanger = ({ children }) => {
    const [background, setBackground] = useState(getRandomBackground());

    const changeInterval = 5000;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackground((prevBackground) => getRandomBackground(prevBackground));
        }, changeInterval);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={styles.wrapper}>
            <div style={{ ...styles.background, backgroundImage: background }} />
            <div style={styles.content}>{children}</div>
        </div>
    );
};

const styles = {
    wrapper: {
        position: "relative",
        width: "100%",
    },
    background: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
        zIndex: -1,
    },
    content: {
        position: "relative",
        zIndex: 1,
        width: "100%",
        minHeight: "100vh",
    },
};

export default BackgroundChanger;
