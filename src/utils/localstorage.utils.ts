export const getLocalStorageValue = <T>(key: string): T => {
    return JSON.parse(localStorage.getItem(key) as string) as T;
}

const setItemToLocalStorage = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const setItemInLocalStorageArray = <T>(key: string, value: T): void => {
    var itemArray = getLocalStorageValue<T[]>(key);
    if (!itemArray)
        setItemToLocalStorage<T[]>(key, [value]);
    else {
        itemArray.push(value);
        setItemToLocalStorage(key, itemArray);
    }
}