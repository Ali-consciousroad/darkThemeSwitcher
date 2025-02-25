import { createContext, useContext, useState } from "react";

// Step 1.
// Create a context
const ThemeContext = createContext(undefined);

// Implement the ThemeProvider component with a children prop
export const ThemeProvider = ({ children }) => {
    // Step 2. 
    // Add the useState hook and add a default state
    const [theme, setTheme] = useState("light");

    // Create the toogleTheme function
    const toggleTheme = () => {
        /* Use of function form of the state updater instead of the state "theme" directly 
        to ensure the state is based on the most recent state value and avoid bugs */
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    // Return a ThemeContext.Provider component 
    return (
        <ThemeContext.Provider
            value={{
                theme, 
                toggleTheme
            }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);