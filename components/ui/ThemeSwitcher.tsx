'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

type Theme = 'light' | 'system' | 'dark';

const themes: { value: Theme; label: string; icon: React.ReactNode }[] = [
  { value: 'light', label: 'Light Theme', icon: <Sun size={16} /> },
  { value: 'system', label: 'System Theme', icon: <Monitor size={16} /> },
  { value: 'dark', label: 'Dark Theme', icon: <Moon size={16} /> },
];

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<Theme>('system');

  useEffect(() => {
    if (theme) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedTheme(theme as Theme);
    }
  }, [theme]);

  const handleThemeChange = (value: Theme) => {
    setSelectedTheme(value);
    setTheme(value);
  };

  return (
    <div
      className='border-dark-gray-4 flex gap-1 rounded-3xl border bg-transparent px-1 py-1'
      role='radiogroup'
      aria-label='Theme Switcher'
    >
      {themes.map(({ value, icon, label }) => (
        <button
          key={value}
          className={`text-light-gray-1 inline-block cursor-pointer rounded-full p-2 hover:text-white ${
            selectedTheme === value
              ? 'bg-dark-gray-3 border-border-color text-light-gray-4 border'
              : ''
          }`}
          aria-checked={selectedTheme === value}
          aria-label={label}
          role='radio'
          onClick={() => handleThemeChange(value)}
        >
          {icon}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
