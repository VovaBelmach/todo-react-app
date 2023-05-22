export const saveItemsToLocalStorage = (localStorageName, items) => {
  localStorage.setItem(localStorageName, JSON.stringify(items));
};

export const getItemsFromLocalStorage = (localStorageName) => {
  return localStorage.getItem(localStorageName);
};
