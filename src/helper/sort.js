export const onSortHandle = (arr, category) => {
  switch (category) {
    case "all":
      return arr;
    case "popular":
      return arr.filter((c) => c.favourite === true);
    case "liked":
      return arr.filter((c) => c.like === true);

    default:
      return arr;
  }
};
