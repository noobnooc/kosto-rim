type ColorScheme = "light" | "dark";

function getCurrentColorScheme(): ColorScheme {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return "dark";
  } else {
    return "light";
  }
}

function switchColorScheme(scheme: ColorScheme | undefined) {
  if (scheme) {
    localStorage.theme = scheme;
  } else {
    localStorage.removeItem("theme");
  }

  applyColorScheme();
}

export function applyColorScheme() {
  const currentColorScheme = getCurrentColorScheme();

  if (currentColorScheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export default function useToggleColorScheme() {
  return () => {
    const currentColorScheme = getCurrentColorScheme();

    switchColorScheme(currentColorScheme === "light" ? "dark" : "light");
  };
}
