/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            size: {
                60: "60px",
                52: "52px",
                5.2: "82px",
            },
            fontFamily: {
                monda: ["Monda", "sans-serif"],
                jersey: ["Jersey 10", "sans-serif"],
            },
            height: {
                475: "475px",
            },
            width: {
                320: "320px",
            },
            fontSize: {
                xxs: "0.6rem",
            },
        },
        screens: {
            xs: "360px",
            sm: "640px",
            // => @media (min-width: 640px) { ... }
            md: "768px",
            // => @media (min-width: 768px) { ... }
            lg: "1024px",
            // => @media (min-width: 1024px) { ... }
            xl: "1280px",
            // => @media (min-width: 1280px) { ... }
            xxl: "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        backgroundImage: {
            gradientBg: "url('/background/gradient1.jpg')",
            gradientBg2: "url('/background/gradient2.jpg')",
        },
        // backgroundColor: {
        //     offwhite: "#F8FBF8",
        // },
    },
    plugins: [],
};
