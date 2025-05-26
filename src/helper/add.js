export const onAddHandle = (arr, movie) => {
  if (Object.keys(movie).length !== 0) {
    return [...arr, { ...movie, id: 12, favorite: false, like: false }];
  }
  return arr;
};
