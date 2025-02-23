import { createContext, useContext, useState } from "react";

// Step 1.
// Create a context
const MyContext = createContext(undefined);

// Implement the ThemeProvider component
export const ThemeProvider = ({ children }) => {
    // Step 2. 
    // Add the useState hook
    const [darkMode, setDarkMode] = useState(false);

    // Create the toogleTheme function
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    // Return a ThemeContext.Provider component 
    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                toggleTheme
            }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);