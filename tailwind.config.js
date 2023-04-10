/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            body: ["Poppins", "sans-serif"],
            special: ["Mulish", "sans-serif"],
        },
        extend: {
            colors: {
                "grey-bg": "#f9f9f9",
            },
            keyframes: {
                morph: {
                    "0%": {
                        "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%",
                    },
                    "50%": {
                        "border-radius": "30% 60% 70% 40%/50% 60% 30% 60%",
                    },
                    "100%": {
                        "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%",
                    },
                },
            },
            animation: {
                morph: "morph 8s ease-in-out infinite",
            },
        },
    },
    plugins: [],
}
