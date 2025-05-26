export const onAddHandle = (arr, movie) => {
  if (movie) {
    return [...arr, { ...movie, favorite: false, like: false }];
  }
};
