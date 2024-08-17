const savedFavorites = JSON.parse(window.localStorage.getItem('favorites'));

export const getFavorites = () => {
  if (savedFavorites === null) {
    return [];
  } else {
    return savedFavorites;
  }
};

export const removeFromFavorites = id => {
  const index = savedFavorites.findIndex(item => item._id === id);
  savedFavorites.splice(index, 1);
  window.localStorage.setItem('favorites', JSON.stringify(savedFavorites));
};

export const addToFavorites = advert => {
  savedFavorites.push(advert);
  window.localStorage.setItem('favorites', JSON.stringify(savedFavorites));
};
