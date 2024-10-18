import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
    const [value, setValue] = useState<T>(initialValue);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedValue = localStorage.getItem(item);
            if (storedValue) {
                setValue(JSON.parse(storedValue));
            } else {
                setValue(initialValue);
            }
        }
    }, []);

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        if (typeof window !== 'undefined') {
            localStorage.setItem(item, JSON.stringify(newValue));
        }
    };

    return { value, updateLocalStorage };
}
