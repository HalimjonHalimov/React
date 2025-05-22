export const onTermHandle = (arr, term) => {
  if (term.length === 0) return arr;
  else
    return arr.filter((c) => c.name.toLowerCase().includes(term.toLowerCase()));
};
