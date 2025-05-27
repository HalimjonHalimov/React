export const onAddHandle = (arr, movie) => {
  if (arr.length !== 0) {
    return [...arr, movie];
  }
  return arr;
};
