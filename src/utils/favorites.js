export const getFavorites = () => {
  const savedFavorites = JSON.parse(window.localStorage.getItem('favorites'));
  if (savedFavorites === null) {
    return [];
  } else {
    return savedFavorites;
  }
};

export const removeFromFavorites = id => {
  const savedFavorites = getFavorites();
  const index = savedFavorites.findIndex(item => item._id === id);
  savedFavorites.splice(index, 1);
  window.localStorage.setItem('favorites', JSON.stringify(savedFavorites));
};

export const addToFavorites = advert => {
  const savedFavorites = getFavorites();
  savedFavorites.push(advert);
  window.localStorage.setItem('favorites', JSON.stringify(savedFavorites));
};
