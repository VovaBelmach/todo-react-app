export const saveItemsToLocalStorage = (items, localStorageName) => {
  localStorage.setItem(localStorageName, JSON.stringify(items));
};

export const getItemsFromLocalStorage = (localStorageName) => {
  return localStorage.getItem(localStorageName);
};