import {
  saveItemsToLocalStorage,
  getItemsFromLocalStorage,
} from "./localStorageRepository";

describe("localStorageRepository", () => {
  it("should save and get items from local storage", () => {
    const items = [1, 2, 3];
    const localStorageName = "test";

    saveItemsToLocalStorage(localStorageName, items);

    const storedItems = JSON.parse(getItemsFromLocalStorage(localStorageName));
    expect(storedItems).toEqual(items);
  });

  it("should return null if local storage item does not exist", () => {
    const localStorageName = "nonexistent";

    const storedItems = getItemsFromLocalStorage(localStorageName);
    expect(storedItems).toBeNull();
  });
});
