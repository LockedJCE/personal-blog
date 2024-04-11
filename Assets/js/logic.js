const themeChangerButton = document.querySelector(".toggle-button");

// get the blog data
const dataFromLocalStorage = function() 
{
    const unreadyData = localStorage.getItem("blogs");
    const readyData = JSON.parse(unreadyData);
    return readyData || [];
}

// apply theme
const applyTheme = function(theme)
{
    let mainColor, secondaryColor, tertiaryColor, accentColor, secondAccentColor, textColor;

    if(theme === "dark-theme")
    {
        // Dark Theme
        mainColor = "#0f084b";
        secondaryColor = "#1e1e1e";
        tertiaryColor = "#291fbd";
        accentColor = "#190858";
        secondAccentColor = "#ffffff";
        textColor = "#ffffff";
    }
    else
    {
        // Light Theme
        mainColor = "#1163af";
        secondaryColor = "#747474";
        tertiaryColor = "#ffffff";
        accentColor = "#719ff4";
        secondAccentColor = "#000000";
        textColor = "#000000";
    }

    // Set all the properties
    document.documentElement.style.setProperty("--main-color", mainColor);
    document.documentElement.style.setProperty("--secondary-color", secondaryColor);
    document.documentElement.style.setProperty("--tertiary-color", tertiaryColor);
    document.documentElement.style.setProperty("--accent-color", accentColor);
    document.documentElement.style.setProperty("--second-accent-color", secondAccentColor);
    document.documentElement.style.setProperty("--text-color", textColor);

}

// handles which theme to change to
const handleThemeChange = function() 
{
    // get theme from local storage
    const theme = localStorage.getItem("theme") || "dark-theme";
    console.log(theme);
   
    // switch themes
    let diffTheme;
    if (theme === "light-theme") { diffTheme = "dark-theme" }
    else { diffTheme = "light-theme" }
    console.log(diffTheme);


    localStorage.setItem("theme", diffTheme)
    applyTheme(diffTheme);
}

// sets up the theme changer
themeChangerButton.addEventListener("click", () => 
{
    handleThemeChange();
});