"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

type Theme = "light" | "system" | "dark";

const themes: { value: Theme; label: string; icon: React.ReactNode }[] = [
    { value: "light", label: "Light Theme", icon: <Sun size={16} /> },
    { value: "system", label: "System Theme", icon: <Monitor size={16} /> },
    { value: "dark", label: "Dark Theme", icon: <Moon size={16} /> },
];

const ThemeSwitcher: React.FC = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState<Theme>("system");

    useEffect(() => {
        if (resolvedTheme) {
            setSelectedTheme(resolvedTheme as Theme);
        }
    }, [resolvedTheme]);

    const handleThemeChange = (theme: Theme) => {
        setSelectedTheme(theme);
        setTheme(theme);
    };

    return (
        <div
            className="flex py-1 bg-transparent rounded-3xl px-1 border border-dark-gray-4 gap-1"
            role="radiogroup"
            aria-label="Theme Switcher"
        >
            {themes.map(({ value, icon, label }) => (
                <button
                    key={value}
                    className={`inline-block p-2 cursor-pointer rounded-full text-light-gray-1 hover:text-white ${selectedTheme === value ? "bg-dark-gray-3 text-light-gray-4" : ""
                        }`}
                    aria-checked={selectedTheme === value}
                    aria-label={label}
                    role="radio"
                    onClick={() => handleThemeChange(value)}
                >
                    {icon}
                </button>
            ))}
        </div>
    );
};

export default ThemeSwitcher;
