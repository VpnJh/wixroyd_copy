export const storage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get(key) {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        console.error(`Error parsing localStorage item "${key}":`, e);
        return null;
      }
    }
    return null;
  },

  remove(key) {
    localStorage.removeItem(key);
  }
};
