type Theme = "light" | "dark";

export function toggleTheme() {
    let theme = themeInverse(getTheme());
    setTheme(theme);
}

export function syncPageWithLocalStorage() {
    let theme = getThemeLocalStorage();
    if (theme) {
        setThemeOnPage(theme)
    }
}

function themeInverse(theme: Theme): Theme {
    if (theme === "light") {
        return "dark"
    } else if (theme === "dark") {
        return "light"
    }
}

function setTheme(theme: Theme) {
    localStorage.setItem("theme", theme);
    setThemeOnPage(theme);
}

function setThemeOnPage(theme: Theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
}

export function getTheme(): Theme {
    return getThemeLocalStorage() ?? getThemeCss() ?? "light";
}

function getThemeLocalStorage(): Theme | null {
    return localStorage.getItem("theme");
}

function getThemeCss(): Theme | null {
    if (!window.matchMedia) {
        return null
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark"
    } else {
        return "light"
    }
}