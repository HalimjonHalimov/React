export const onSortHandle = (arr, category) => {
  switch (category) {
    case "all":
      return arr;
    case "popular":
      return arr.filter((c) => c.favorite === true);
    case "like":
      return arr.filter((c) => c.like === true);

    default:
      return arr;
  }
};
